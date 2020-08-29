const express = require('express')
const app = express()
const plantsCtrl = require('./controllers/plantsController.js')
const listCtrl = require('./controllers/listController.js')

const SERVER_PORT = 3005

app.use(express.json())

app.listen(SERVER_PORT, () => 
    console.log(`Greetings from ${SERVER_PORT}`)
)

//Plant endpoints
app.get('/api/plants', plantsCtrl.getAllPlants)


//List endpoints
app.get('/api/list', listCtrl.getList)
app.post('/api/list', listCtrl.addToList)
app.put('/api/list/:list_id', listCtrl.changeWatered)
app.delete('/api/list/:list_id', listCtrl.removeFromList)
