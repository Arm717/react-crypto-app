const express = require('express')
const app = express()
const port = 80

app.use(express.static('frontend/dist'))

app.listen(port, () => console.log('Server started on port 80'))
