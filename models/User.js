const { Schema, model } = require('mongoose');
const { stringify } = require('querystring');

const userSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        }, 
        email: {
            type: String,
            required: true,
            unique: true, 
            // match: [`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`, "Please fill a valid email address"],    
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId, 
                ref: 'Thoughts'
            }
        ],
        friends: [
            {
            type: Schema.Types.ObjectId, 
            ref: 'User'
            }
        ],
    }, {
        toJSON: {
          virtuals: true,
        }
      }
)

userSchema.virtual('friendCount')
    .get(function () {
        return this.friends.length;
    })
    // .set(function (value) {
    //     this.set({friends: value})
    // })

const User = model('User', userSchema)

module.exports = User;