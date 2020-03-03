let router = require('express').Router();
router.get('/', function (req, res) {
    res.json({
        status: 'api its working nows',
        message: 'welcome'
    });
});
// import contact controller
var contactController = require('./contactController');

// contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;