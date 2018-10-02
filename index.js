
const express = require('express')
const app = express()

console.log("entering the app" , "project " , process.env.PROJECT);



app.get('/', (req, res) => res.send('Thank you for visiting ' + process.env.PORT  + ' ' + process.env.PROJECT
        + ' ' + process.env.GOOGLE_CLOUD_PROJECT))

app.get('/log', (req, res) => {
  res.status(418).send("Hello I'm a teapot running on Node Standard GAE")
})



app.listen(process.env.PORT || 8080, () => {
  console.log("started to listen & Process Port = " +  process.env.PORT );
}
)

