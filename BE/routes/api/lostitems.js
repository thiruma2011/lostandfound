const express = require('express')
const router = express.Router()
const dbController = require('../../config/dbController')

// Load Item  model
const lostItem = require('../../models/lostitem')

// @route GET api/items/test
// @description tests items route
// @access Public
router.get('/test', (req, res) => res.send('lostitem route testing!'))

// @route GET api/items
// @description Get all items
// @access Public
router.get('/', (req, res) => {
  console.log('in items get')
  lostItem.find()
    .then(lostItems => res.json(lostItems))
    .catch(err => res.status(404).json({ noitemfound: 'No Items found' }))
})

// @route GET api/items/:id
// @description Get single item by id
// @access Public
router.get('/:id', (req, res) => {
  lostItem.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(404).json({ noitemfound: 'No Item found' }))
})

// @route GET api/items/:id
// @description
// @access Public
router.get('/recommendations/test', (req, res) => {
  console.log('in recommendations route test')
  res.send('recommendations route testing!')
})

// @route GET api/items/:id
// @description Get single item by id
// @access Public
router.get('/recommendations/:id', dbController.findFoundItemsbyKeyword)

// @route GET api/items
// @description add/save item
// @access Public
router.post('/', (req, res) => {
  console.log('in lostitems post')
  console.log(req.body)
  lostItem.create(req.body)
  //       .then(item => res.json({ msg: 'Item added successfully' }))
  //      .catch(err => res.status(400).json({ error: 'Unable to add this item' }));
    .then(item => res.json({ msg: 'lostItem added successfully' }))
    .catch(err => console.log(error.message))
})

// @route GET api/items/:id
// @description Update item
// @access Public
router.put('/:id', (req, res) => {
  lostItem.findByIdAndUpdate(req.params.id, req.body)
    .then(item => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    )
})

// @route GET api/items/:id
// @description Delete item by id
// @access Public
router.delete('/:id', (req, res) => {
  console.log('in items delete')
  console.log(req.params.id)

  lostItem.findByIdAndRemove(req.params.id, req.body)
    .then(item => res.json({ mgs: 'Item entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such an item' }))
})

module.exports = router
