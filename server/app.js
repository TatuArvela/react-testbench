const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors({
    origin: '*'
}));
const port = 3001

const AATU_TOKEN = "AATUAATU";

app.post('/authenticate', (req, res) => {
    // This is just some silly mock thing I made to cut corners. Don't do anything like this.

    const {username, password} = req.body;

    if (username === 'aatu' && password === 'password') {
        return res.json({
            name: 'Aatu Aakkonen',
            token: AATU_TOKEN,
            permissions: ['images', 'report']
        })
    }

    return res.json({
        error: "Umm... I don't like know you? Pls don't call me again, thx!"
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
