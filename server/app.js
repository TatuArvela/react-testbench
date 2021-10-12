const express = require('express')
const cors = require('cors')
const users = require('./data/users');
const { getToken, getImages, getReport } = require('./utils');

const port = 3001

const app = express()

app.use(express.json())
app.use(cors({
    origin: '*'
}));

app.use(express.static('public'))

app.post('/authenticate', (req, res) => {
    // This is just some silly mock thing I made to cut corners. Don't do anything like this.

    const {username, password} = req.body;

    const user = users.find(u => u.username === username);
    if (user.password === password) {
        return res.json({
            name: user.name,
            token: user.token,
            permissions: user.permissions
        })
    }

    return res.status(401).json({
        error: "Umm... I don't like know you? Pls don't call me again, thx!"
    });
})

app.get('/images', async (req, res) => {
    const token = getToken(req);

    const user = users.find(u => u.token === token);
    if (user && user.permissions.includes('images')) {
        const images = await getImages();

        if (images) {
            return res.json(images)
        }
    }

    return res.status(401).send();
})

app.get('/report', async (req, res) => {
    const token = getToken(req);

    const user = users.find(u => u.token === token);
    if (user && user.permissions.includes('report')) {
        const report = await getReport(user.username);

        if (report) {
            return res.json(report)
        }
    }

    return res.status(401).send();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
