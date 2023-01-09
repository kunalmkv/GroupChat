const fs = require('fs');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(`
        <html><head><title>Enter Message</title></head><body>
        <body>  <br></body>
        <form  action="/" onsubmit="document.getElementById('username').value= localStorage.getItem('username')" method="POST">
        <input type="text" id="message" name="message" placeholder="Type Message...">
        <input type="hidden" name="username" id="username">
        <button type="submit"> 
        send</button></form>
        </body>
        </html>`);

})
router.post('/', (req, res, next) => {
    //res.send('<h1> Chat</H1>');

    console.log(req.body.username);
    console.log(req.body.message)
    fs.writeFile('username.txt', `   ${req.body.username}:${req.body.message}  `, { flag: 'a' }, (err) => err ? console.log(err) : res.redirect("/"));
});



module.exports = router;