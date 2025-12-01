const route = require('express').Router()
const userController = require('../controller/userController')

route.post('/login', userController.login)
route.get('/language', userController.language)

module.exports = route