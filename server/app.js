const express = require('express')
const cors = require('cors')
const users = require('./data/users');
const { getToken, getImages } = require('./utils');

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

    const match = users.find(user => user.username === username);
    if (match.password === password) {
        return res.json({
            name: match.name,
            token: match.token,
            permissions: match.permissions
        })
    }

    return res.status(401).json({
        error: "Umm... I don't like know you? Pls don't call me again, thx!"
    });
})

app.get('/images', async (req, res) => {
    const token = getToken(req);

    const match = users.find(user => user.token === token);
    if (match && match.permissions.includes('images')) {
        const images = await getImages();

        if (images) {
            return res.json(images)
        }
    }

    return res.status(401).send();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
