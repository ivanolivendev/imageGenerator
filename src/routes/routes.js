const express = require('express')
const {createImage} = require('../controllers/controllers')
const routes = express()



routes.get("/",createImage)

module.exports = {routes}