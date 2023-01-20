const router = require('express').Router()
const thoughtsController = require('../../controllers/thoughtsController')

router.get('/', thoughtsController.find)

router.get('/:id', thoughtsController.findOne)

router.post('/', thoughtsController.create)

router.put('/:id', thoughtsController.update)

router.delete('/:id', thoughtsController.delete);

module.exports = router;