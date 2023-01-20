const { Thoughts } = require('../models');

// const userCount = async () => 
//     Thoughts.aggregate([
//         { $count: 'userCount' }
//     ])

module.exports = {
    // get all users
    find: async function (req, res) {
        try {
            const result = await Thoughts
              .find()
            res.json(result)
          } catch(err) {
            res.status(500).json(err)
          }
    },

    findOne: async function (req, res) {
      try {
          const result = await Thoughts
            .findById(req.params.id)
          res.json(result)
        } catch(err) {
          res.status(500).json(err)
        }
  },

    // create a new user
    create: async function (req, res) {
        try {
            const result = await Thoughts.create(req.body)
            res.json(result)
          } catch(err) {
            res.status(500).json(err)
          }
    },

    // update user
    update: async function (req, res) {
      try {
        const result = await Thoughts.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(result)
      } catch(err) {
        res.status(500).json(err)
      }
    },

    // delete user
    delete: async function (req, res) {
      try {
        const result = await Thoughts.findByIdAndDelete(req.params.id)
        res.json(result)
      } catch(err) {
        res.status(500).json(err)
      }
    },
}