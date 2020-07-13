const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

const PORT = 5000
 
app.listen(PORT, () => console.log(`server connected ${PORT}`));