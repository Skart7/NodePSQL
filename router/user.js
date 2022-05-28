const Router = require('express')
const router = new Router()

const UserController = require('../controller/user')

router.post('/create', UserController.create)
router.get('/get/:id', UserController.get)
router.put('/update', UserController.update)
router.delete('/delete/:id', UserController.delete)

module.exports = router