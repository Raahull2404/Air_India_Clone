const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const apiRouter = require('./src/routes/index')
const app = express()
const port = 3000
app.use('/api', apiRouter)
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.listen(port, () => {
    console.log('Server has started on ' + port)
})