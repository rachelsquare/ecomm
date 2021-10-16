const express = require('express');

const app = express();

// route handler
// req: object to interact with to receive info from user
// res: object to interact with to send info to user
app.get('/', (req, res) => {
    res.send('hi there!');
})

// tell application to listen for incoming network traffic
// on a particular port on the computer

app.listen(3000, () =>  {
    console.log('Listening');
})


