const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Got POST request on server')
})

app.get('/users', (req, res) => {
    const userData = req.body
    res.send(JSON.stringify(userData))
})

app.listen(port, () => {
    console.log('Server is connected')
})