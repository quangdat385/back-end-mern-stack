const express = require('express')
const usersController = require('../controllers/usersController')
const verifyJWT = require('../middleware/verifyJWT')

const router = express.Router()





router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

module.exports = router