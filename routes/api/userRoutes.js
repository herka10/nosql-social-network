const router = require('express').Router()
const userController = require('../../controllers/userController')

router.get('/', userController.find)

router.get('/:id', userController.findOne)

router.post('/', userController.create)

router.put('/:id', userController.update)

router.delete('/:id', userController.delete);

router.post('/:id/addFriend/:friendId', userController.addFriend)

router.delete('/:id/deleteFriend/:friendId', userController.deleteFriend);

module.exports = router;

