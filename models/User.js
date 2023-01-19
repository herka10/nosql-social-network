const { Schema, model } = require('mongoose')

const userSchema = new Schema (
    {
        username: {
            type: DataTypes.STRING,
            unique: true,
            required: true,
            trim: true,
        }, 
        email: {
            type: DataTypes.STRING,
            required: true,
            unique: true, 
            match: [`/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`, 'Please fill a valid email address'],    
        },
        thoughts: [
            {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Thoughts'
            }
        ],
        friends: [
            {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'
            }
        ],
    }
)

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const User = model('User', userSchema)

module.exports = User;