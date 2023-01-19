const { ObjectId } = require('mongoose').Types;
const { User, Thoughts } = require('../models');

const userCount = async () => 
    User.aggregate([
        { $count: 'userCount' }
    ])
    


module.exports = {
    // get all users
    getUsers(req, res) {
        User.find()
            .then(async (users) => {
                const userObj = {
                users,
                userCount: await userCount(),
                };
                return res.json(userObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err))
    }
}