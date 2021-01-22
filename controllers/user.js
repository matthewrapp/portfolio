// import models
const Applicant = require('../models/applicant');

// applicant instance
const newApplicant = new Applicant(null, 'Matthew', 'Rapp', '574 Legacy Lane', 'Rexburg', 'Idaho', '83440', '(702) 417-8655', 'mattrapp25@gmail.com');

exports.getIndex = (req, res, next) => {

    res.render('user/index', {
        docTitle: 'Matthew Rapp Portfolio',
        path: '/',
        newApplicant: newApplicant
    })
}