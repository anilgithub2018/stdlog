
const express = require('express')
const app = express()

console.log("entering the app" , "project " , process.env.PROJECT);



app.get('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify({value: 1}));
}
        
        )

app.get('/log', (req, res) => {
  res.status(418).send("Hello I'm a teapot running on Node Standard GAE")
})



app.listen(process.env.PORT || 8080, () => {
  console.log("started to listen & Process Port = " +  process.env.PORT );
}
)

