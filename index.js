const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// route handler
// req: object to interact with to receive info from user
// res: object to interact with to send info to user
app.get('/', (req, res) => {
    res.send(`
        <div>
            <form method="POST">
                <input name="email" placeholder="email"/>
                <input name="password" placeholder="password"/>
                <input name="passwordConfirmation" placeholder="password confirmation"/>
                <button>Sign Up</button>
            </form>
        </div>
    `);
});

// post request that handles account creation
app.post('/', (req, res) => {
    console.log(req.body);
    // get access to email, password, passwordConfirmation    
    res.send('Account created!!!');
});

// tell application to listen for incoming network traffic
// on a particular port on the computer

app.listen(3000, () =>  {
    console.log('Listening');
})


