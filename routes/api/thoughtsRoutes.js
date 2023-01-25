const router = require('express').Router()
const thoughtsController = require('../../controllers/thoughtsController')

router.get('/', thoughtsController.find)

router.get('/:id', thoughtsController.findOne)

router.post('/', thoughtsController.create)

router.put('/:id', thoughtsController.update)

router.delete('/:id', thoughtsController.delete);

router.post('/:id/addReaction', thoughtsController.addReaction)

router.delete('/:id/deleteReaction/:reactionId', thoughtsController.deleteReaction);

module.exports = router;