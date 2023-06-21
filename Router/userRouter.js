const express = require('express');
const router = express.Router()
const Users = require('../Controller/userController')



router.get('/allUsers', Users.getAllUsers)

router.get('/userid', Users.getUserById)

router.post('/creatUser', Users.CreateUser)

router.put('/updateUser', Users.upDateuser)

router.delete('/userid', Users.deleteUser)




module.exports = router;