const { ObjectId } = require('mongoose').Types;
const { User, Thoughts } = require('../models');

// const userCount = async () => 
//     User.aggregate([
//         { $count: 'userCount' }
//     ])
    


module.exports = {
    // get all users
    find: async function (req, res) {
        try {
            const result = await User
              .find()
              .populate('username')
              .populate('email')
            res.json(result)
          } catch(err) {
            res.status(500).json(err)
          }
    },

    findOne: async function (req, res) {
      try {
          const result = await User
            .findById(req.params.id)
            .populate('username')
            .populate('email')
          res.json(result)
        } catch(err) {
          res.status(500).json(err)
        }
  },

    // create a new user
    create: async function (req, res) {
        try {
            const result = await User.create(req.body)
            res.json(result)
          } catch(err) {
            res.status(500).json(err)
          }
    },

    // update user
    update: async function (req, res) {
      try {
        const result = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(result)
      } catch(err) {
        res.status(500).json(err)
      }
    },

    // delete user
    delete: async function (req, res) {
      try {
        const result = await User.findByIdAndDelete(req.params.id)
        res.json(result)
      } catch(err) {
        res.status(500).json(err)
      }
    },
}