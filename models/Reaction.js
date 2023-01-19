const { Schema, model, Types } = require('mongoose')

const reactionSchema = new Schema (
    {
        reactionId: {
            type: mongoose.Schema.Types.ObjectId, 
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
            type: DataTypes.STRING,
            required: true,
        },
        reactionBody: {
                type: DataTypes.STRING,
                required: true,
                maxLength: 280,
        },
    }
)


module.exports = reactionSchema;