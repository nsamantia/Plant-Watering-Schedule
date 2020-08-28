const plants = require('../data.json')

const list = {items: []}
const cartId = 0

module.exports = {
getList: (req, res) => {
    res.status(200).send(list)
},
addToList: (req, res) => {},
changeWatered: (req, res) => {},
removeFromList: (req, res) => {}
}

