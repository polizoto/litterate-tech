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
    friends: [ this ]
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
  return this.thoughts.length;
});

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });
  

// create the User model using the UserSchema
const User = model('User', UserSchema);

module.exports = User;