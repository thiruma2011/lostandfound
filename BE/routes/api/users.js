const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
// https://faizanv.medium.com/authentication-for-your-react-and-express-application-w-json-web-tokens-923515826e0#4010

// Load User  model
const User = require('../../models/user')

// @route GET api/Users
// @description Get all Users
// @access Public
router.get('/', (req, res) => {
  User.find()
    .then(Users => res.json(Users))
    .catch(err => res.status(404).json({ noUsersfound: 'No Users found' }))
})

// @route GET api/Users/:id
// @description Get single User by id
// @access Public
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(User => res.json(User))
    .catch(err => res.status(404).json({ noUserfound: 'No User found' }))
})

// @route GET api/Users/:username
// @description Get single User by username
// @access Public
router.get('/login', (req, res) => {
  console.log('in user login')

  const { email, password } = req.body
  User.findOne({ email }, function (err, user) {
    if (err) {
      console.log(' user login 2')
      console.error(err)
      res.status(500)
        .json({
          error: 'Internal error please try again'
        })
    } else if (!user) {
      console.log(' user login 3')
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        })
    } else if (password == user.password) {
      console.log(' user login 4')
      console.log(user.password)
      console.log(password)
      // Issue token
      console.log(' user login 7')
      const payload = { email }
      const token = jwt.sign(payload, secret, {
        expiresIn: '1h'
      })
      res.cookie('token', token, { httpOnly: true })
        .sendStatus(200)
    } else {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        })
    }
  })
})

// @route GET api/Users
// @description add/save User
// @access Public
router.post('/', (req, res) => {
  console.log('in Users post')
  console.log(req.body)
  User.create(req.body)
  //       .then(User => res.json({ msg: 'User added successfully' }))
  //      .catch(err => res.status(400).json({ error: 'Unable to add this User' }));
    .then(User => res.json({ msg: 'User added successfully' }))
    .catch(err => console.log(error.message))
})

// @route GET api/Users
// @description add/save User
// @access Public

router.post('/:login', (req, res) => {
  const { email, password } = req.body

  console.log('login 1')

  //   console.log(req.query);
  User.findOne({ email: (req.query.username) }, function (err, user) {
    if (!user) {
      console.log(' user login 3')
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        })
    } else if (password = user.password) {
      console.log(' user login 4')
      console.log(user.password)
      console.log(password)

      // Issue token
      console.log(' user login 7')
      const payload = { email }
      const token = jwt.sign(payload, secret, {
        expiresIn: '1h'
      })
      res.cookie('token', token, { httpOnly: true })
        .sendStatus(200)
    } else {
      console.log(' user login 6')
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        })
    }
  })
})

// @route GET api/Users/:id
// @description Update User
// @access Public
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(User => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    )
})

// @route GET api/Users/:id
// @description Delete User by id
// @access Public
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then(User => res.json({ mgs: 'User entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such an User' }))
})

module.exports = router
