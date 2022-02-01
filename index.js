const express = require('express')
const routes = require('./routes/index')
const config = require('./configs/config')
const app = express()

// parse requests of content-type – application/json
app.use(express.json())

// load routes
app.use('/api', routes)

app.listen(config.web.port, () => {
    console.log(`server is running at port ${config.web.port}`)
})