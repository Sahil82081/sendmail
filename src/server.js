const express = require("express")
const app = express()
const cors = require('cors')
const sendEmail = require('../func/sendMail')


const corsOptions = {
    origin:['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length'],
    credentials: true
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) => {
    res.send("Hello")
})
app.get('/complete', (req, res) => {
    res.json({
        message:"Completed"
    })
})
app.post('/sendMessage', (req, res) => {
    const {email} = req.body
    console.log(email)
    sendEmail(email,"Time Pass Message","How are You ????????????")
    res.json({
        message:"Email Send Succesfully !!"
    })
})

app.listen(8000, () => {
    console.log('Server was Started')
})