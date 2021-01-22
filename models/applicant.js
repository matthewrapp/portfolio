// representing a single applicant

const fileSystem = require('fs');
const path = require('path');

// global variables
// const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

module.exports = class Applicant {
    constructor(id, firstName, lastName, streetAddress, city, state, zipcode, phoneNumber, email) {
        id = Math.random();
        this.firstName = firstName;
        this.lastName = lastName;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}