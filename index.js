require('./config/config');

const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public')); 

console.log("entering the app" , "project " , process.env.PROJECT);

app.get('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify({value: 1}));
}
        
        )

app.get('/log', (req, res) => {
  res.status(418).send("Hello I'm a teapot running on Node Standard GAE")
})



app.listen(process.env.PORT || 3000, () => {
  console.log("started to listen & Process Port = " +  process.env.PORT );
}
)

