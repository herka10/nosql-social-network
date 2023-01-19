const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtsSchema = new Schema (
    {
        thoughtText: {
            type: DataTypes.STRING,
            required: true,
            minLength: 1,
            maxLength: 280,
        }, 
        createdAt: {
            type: Date,
            default: Date.now, 
            get: (time) => {
                return time.toISOString().split('T')[0];
              }  
        },
        username: {
            type: DataTypes.STRING,
            required: true,
        },
        reactions: [
            reactionSchema
        ],
    }
)

thoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Thoughts = model('Thoughts', thoughtsSchema)

module.exports = Thoughts;