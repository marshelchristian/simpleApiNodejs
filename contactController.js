//contactcontroller.js
Contact = require('./contactModel');
//import contact model
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: "err"
            });
        }
        res.json({
            status: "success",
            message: "contact retrieved successfully",
            data:contacts
        });
    });
};

// handle create contact action 
exports.new = function (req, res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    // save the contact for errors
    contact.save(function (err) {
        // if (err)
        // res.json(err);
        res.json({
            message: ' new contact added',
            data: contact
        });
    });
};

// handle view contact info 
exports.view = function (req, res) {
    Contact.fundById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'contact details loading..',
            data: contact
        });
    });
};

// handle update contact info 
exports.update = function (req, res) {
    Contact.findById(req.param.contact_id, function (err, contact) {
        if (err)
            res.send(err);

        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;

        // save the contact and check for errors 
        contact.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: 'contact info updated',
                data: contact
            });
        });
    });
};

// handle delete contact 
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
    
        res.json({
            status: "success",
            message: 'contact removed'
        });
    });
};