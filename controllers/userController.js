const { User } = require('../models');

module.exports = {
  // get all users
  find: async function (req, res) {
    try {
      const result = await User
        .find()
        //result.friendCount()
      res.json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  findOne: async function (req, res) {
    try {
      const result = await User
        .findById(req.params.id)
      res.json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // create a new user
  create: async function (req, res) {
    try {
      const result = await User.create(req.body)
      res.json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // update user
  update: async function (req, res) {
    try {
      const result = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // delete user
  delete: async function (req, res) {
    try {
      const result = await User.findByIdAndDelete(req.params.id)
      res.json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  //add a friend
  addFriend: async function (req, res) {
    try {
      console.log('Friend Added')
      const result = await User.findByIdAndUpdate(
        {_id: req.params.id},
        { $addToSet: { friends: req.params.friendId }})
      res.json(result)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // delete friend
  deleteFriend: async function (req, res) {
    try {
      const result = await User.findByIdAndUpdate  
        ({_id: req.params.id},
        { $unset: { friends: req.params.friendId }})
      res.json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  },
}