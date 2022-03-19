const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
    username: {
      type: String,
      unique: true,
      required: 'You need to provide your name!',
      trim: true
    },
    email: {
      type: String,
      required: 'You need to provide your email',
      unique: true,
      match: [/.+\@.+\..+/, 'Please submit a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// get total count of thoughts and reactions on retrieval
UserSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.reduce((total, thought) => total + thought.reactions.length + 1, 0);
});

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total, friend) => total + friend.length + 1, 0);
  });
  

// create the User model using the UserSchema
const User = model('User', UserSchema);

module.exports = User;