const Router = require('express')
const router = new Router()

const PostController = require('../controller/post')

router.post('/create', PostController.create)
router.get('/get', PostController.get)

module.exports = router