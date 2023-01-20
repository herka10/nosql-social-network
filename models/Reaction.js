const { Schema, model, Types } = require('mongoose')

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId, 
            default: () => new Types.ObjectId(),
        },
        createdAt: {
            type: Date,
            default: Date.now, 
            get: (time) => {
                return time.toISOString().split('T')[0];
              }  
        },
        username: {
            type: String,
            required: true,
        },
        reactionBody: {
                type: String,
                required: true,
                maxLength: 280,
        },
    }
)


module.exports = reactionSchema;