const plants = require('../data.json')

const list = {items: []}
let listId = 0


module.exports = {
getList: (req, res) => {
    res.status(200).send(list)
},
addToList: (req, res) => {
    const {plantId} = req.body
    const plant = plants.find((element) => element.id === +plantId)
    
    plant.listId = listId

    list.items.push(plant) 
    res.status(200).send(list)
    listId++
},
changeWatered: (req, res) => {
    const {list_id} = req.params
    const { action } = req.query
    
    const index = list.items.findIndex((element) => element.listId === +list_id)
    if(action === 'clicked'){
    list.items[index].watered = 'yes'
    }
    res.status(200).send(list)
},
removeFromList: (req, res) => {
    const { list_id } = req.params

    const index = list.items.findIndex((element) => element.listId === +list_id)
    list.items.splice(index, 1)
    res.status(200).send(list)
}



}

