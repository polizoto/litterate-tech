const router = require('express').Router();

const {
  addThought,
  getAllThought,
  getThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThought)
  .post(addThought);  

router
  .route('/:id')
  .get(getThought)
  .put(updateThought)
  .delete(removeThought);
  

router
  .route('/:id/reactions')
  .post(addReaction)
  .delete(removeReaction);
  
  module.exports = router;