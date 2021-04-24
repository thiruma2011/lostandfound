const FoundItem = require('../models/founditem')
const lostitem = require('../models/lostitem')

exports.findFoundItemsbyKeyword = function (req, res) {
  lostitem.findById(req.params.id, function (err, lostitem) {
    if (err) { res.send(err) }
    console.log('lostitem returned: ' + lostitem)
  }).then(lostitems => {
    lostitems.keyword.forEach(word => FoundItem.find({ keyword: { $in: word } }, function (_err, docs) {
      console.log('word: ' + word)
      console.log('word type: ' + typeof word)
      console.log('document returned: ' + docs)
    }))
  }).then(item => res.status(200).json({ message: 'ok' })).catch(_err => res.status(400).json({ error: _err.toString() }))
}
// foreach string in keywords, run a find and return the matched documents
// Documents have to be unique
