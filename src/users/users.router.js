const router = require('express').Router()

const userServices = require('./users.services')

//? /Users
//? /Users/:id

router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.postUser)

router.get('/users/:id', userServices.getUserById)
router.patch('/users/:id', userServices.patchUser)
router.delete('/users/:id', userServices.deleteUser)


module.exports = router