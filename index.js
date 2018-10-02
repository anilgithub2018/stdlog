require('./config/config');

const express = require('express')
const app = express()

// app.use(express.static(__dirname + '/public')); 

// var bodyParser = require('body-parser');

console.log("entering the app" , "project " , process.env.PROJECT);


// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true }));

// var user = require('./routes/userRoute');
// app.use('/user/',user);

app.get('/', (req, res) => res.send('Thank you for visiting ' + process.env.PORT  + ' ' + process.env.PROJECT
        + ' ' + process.env.GOOGLE_CLOUD_PROJECT))

app.get('/log', (req, res) => {
  res.status(418).send("Hello I'm a teapot running on Node Standard GAE")
})



app.listen(process.env.PORT || 8080, () => {
  console.log("started to listen" +  process.env.PORT );
  console.log("GOOGLE_APPLICATION_CREDENTIALS :", process.env.GOOGLE_APPLICATION_CREDENTIALS);
}
)

