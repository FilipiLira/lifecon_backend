const express = require('express')

module.exports = (app) => {

    // API Routes
    const router = express.Router()
    app.use('/api', router)

    // User routes
    const userService = require('../api/user/userService')
    userService.register(router, '/user')
}