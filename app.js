const fs = require('fs');
const express = require('express');
const adminRoutes = require('./routes/login');
//const routes = require('./routes');

const shopRoutes = require('./routes/chat')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    fs.readFile('username.txt', 'UTF-8', (err, data) => {
        if (err) {
            console.log(err);
            data = 'no chat exists';
        }
        res.send(`
        ${data}<form  action="/" onsubmit="document.getElementById('username').value= localStorage.getItem('username')" method="POST">
        <input type="text" id="message" name="message" placeholder="Type Message...">
        <input type="hidden" name="username" id="username">
        <button type="submit"> 
        send</button></form>
        `

        )
    })
})

app.use(adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    res.status(404).send('<h1> Page not found</h1>')
})
app.listen(3000);
