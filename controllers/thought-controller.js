const { Thought, User } = require('../models');

const thoughtController = {
    addThought({ body }, res) {
        console.log(body);
        Thought.create(body)
          .then(({ _id }) => {
            return User.findOneAndUpdate(
              { _id: body.userId },
              { $push: { thoughts: _id } },
              { new: true, runValidators: true }
            );
          })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
      },

      getAllThought(req, res) {
        Thought.find({})
          .select('-__v')
          .sort({ _id: -1 })
          .then(dbThoughtData => res.json(dbThoughtData))
          .catch(err => {
            console.log(err);
            res.sendStatus(400);
          });
      },

      getThought({ params }, res) {
        Thought.findOne({ _id: params.id })
          .select('-__v')
          .sort({ _id: -1 })
          .then(dbThoughtData => res.json(dbThoughtData))
          .catch(err => {
            console.log(err);
            res.sendStatus(400);
          });
      },

      updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
          .then(dbThoughtData => {
            if (!dbThoughtData) {
              res.status(404).json({ message: 'No thought found with this id!' });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch(err => res.status(400).json(err));
      },

      addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
          { _id: params.id },
          { $push: { reactions: body } },
          { new: true, runValidators: true }
        )
          .then(dbThoughtData => {
            if (!dbThoughtData) {
              res.status(404).json({ message: 'No thought found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
      },

      removeThought({ body, params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
          .then(deletedThought => {
            if (!deletedThought) {
              return res.status(404).json({ message: 'No thought with this id!' });
            }
            return User.findOneAndUpdate(
              { _id: body.userId },
              { $pull: { thoughts: params.id } },
              { new: true }
            );
          })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
      },

      removeReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
          { _id: params.id },
          { $pull: { reactions: { reactionId: body.reactionId } } },
          { new: true }
        )
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.json(err));
      }
  };

module.exports = thoughtController;