const express = require('express');

const app = express();

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

// middleware function to parse email, password, passwordConfirmation data
const bodyParser = (req, res, next) => {
    if (req.method === 'POST') {
    req.on('data', data => {
        const parsed = data.toString('utf8').split('&');
        const formData = {};
        for (let pair of parsed) {
            const [key, value] = pair.split('=');
            formData[key] = value;
        }
        
        req.body = formData;
        next();
    
     });
    } else {
        next();
    }
}


app.post('/', bodyParser, (req, res) => {
    console.log(req.body);
    // get access to email, password, passwordConfirmation    
    res.send('Account created!!!');
});

// tell application to listen for incoming network traffic
// on a particular port on the computer

app.listen(3000, () =>  {
    console.log('Listening');
})


