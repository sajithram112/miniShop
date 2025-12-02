const route = require('express').Router()
const userController = require('../controller/userController')

route.post('/login', userController.login)
route.get('/language', userController.language)
route.get('/products', userController.get_product_service)

module.exports = route