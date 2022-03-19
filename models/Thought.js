const { Schema, model, Types } = require('mongoose');
const fns = require('date-fns')

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    username: {
      type: String,
      required: 'You need to provide your name!'
    },
    createdAt: {
      type: Date,
      default: fns.format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS"),
      get: createdAtVal => fns.format(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const ThoughtSchema = new Schema(
  {
    username: {
      type: String,
      required: 'You need to provide your name!',
      trim: true
    },
    thoughtText: {
      type: String,  
      required: true,
      minLength: 1,
      maxLength: 280,
      trim: true
    },
    createdAt: {
        type: Date,
        default: fns.format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS"),
        get: createdAtVal => fns.format(createdAtVal)
      },
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
