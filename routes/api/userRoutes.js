const router = require('express').Router()

const userController = require('../../controllers/userController');
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
} = require('../../controllers/userController')

router.get('/', userController.getUsers)

router.route('/:userId').get(getSingleUser).delete(deleteUser);

module.exports = router;

