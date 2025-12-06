const route = require('express').Router()
const userController = require('../controller/userController')

route.post('/login', userController.login)
route.get('/language', userController.language)
route.get('/products', userController.get_product_service)
route.post('/products', userController.add_product_service)
route.put('/products/:id', userController.edit_product_service);
module.exports = route