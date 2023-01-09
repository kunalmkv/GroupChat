const express = require('express');
const router = express.Router();



router.get('/userlogin', (req, res, next) => {
    res.send(`<h1> Welcome to WhatsApp Chat. \n Enter userID</h1>
    <form  onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/chat" method="POST">
    <label>Username</label> &nbsp;&nbsp;<input id="username" type="text" name="title">&nbsp;
    <button type="submit"> login </button>`);

})
router.post('/chat', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})
module.exports = router;