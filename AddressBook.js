var prompt = require('prompt-sync')();
class Contact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        let fnameRegex = RegExp('^[A-Z]{1}[a-zA-z]{2,}$');
        if (fnameRegex.test(firstName)) {
            this._firstName = firstName;
        }
        else throw 'First Name Incorrect';
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        let lnameRegex = RegExp('^[A-Z]{1}[a-zA-z]{2,}$');
        if (lnameRegex.test(lastName)) {
            this._lastName = lastName;
        }
        else throw 'Last Name Incorrect';
    }
    get address() {
        return this._address;
    }
    set address(address) {
        this._address = address;
    }
    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
    get zip() {
        return this._zip;
    }
    set zip(zip) {
        let zipRegex = RegExp('[0-9]{6}');
        if (zipRegex.test(zip)) {
            this._zip = zip;
        }
        else throw 'Invalid Zip Code';
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp('^[1-9]{1}[0-9]{9}$');
        if (phoneRegex.test(phoneNumber)) {
            this._phoneNumber = this.phoneNumber;
        }
        else throw 'Invalid Phone Number';
    }
    get email() {
        return this._email;
    }
    set email(email) {
        let emailRegex = RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[$#@!%_&])[A-Za-z0-9$#@!%_&]{8,}$');
        if (emailRegex.test(email)) {
            this._email = email;
        }
        else throw 'Invalid Email';
    }
    createContact() {
        this.firstName = prompt('Enter the first name');
        this.lastName = prompt('Enter the last name');
        this.address = prompt('Enter the address');
        this.city = prompt('Enter the city');
        this.state = prompt('Enter the state');
        this.zip = prompt('Enter the zipcode');
        this.phoneNumber = prompt('Enter the phone number');
        this.email = prompt('Enter the email');
        let contact = new Contact(this.firstName, this.lastName, this.address, this.city, this.state, this.zip,
            this.phoneNumber, this.email);
        return contact;

    }
    toString() {
        return '\nName : ' + this.firstName + ' ' + this.lastName + '\nAddress : ' + this.address + '\nCity : ' + this.city +
            '\nState : ' + this.state + '\nZip : ' + this.zip + '\nphoneNumber : ' + this.phoneNumber + '\nEmail : ' + this.email;
    }
}
//UC3
var addressBook = new Array();
function addContact(contact) {
    if (!checkContact(contact.firstName + contact.lastName)) {
        addressBook.push(contact);
    }
    else {
        console.log('Contact already exists');
    }
}
let contact = new Contact();
addContact(contact.createContact());
console.log(addressBook);
//UC4
function editContact(name) {
    addressBook.filter(c => (c.firstName + c.lastName == name)).forEach(c => editDetails(c));
}
function editDetails(contact) {
    var choice = parseInt(prompt('Enter what u wish to do\n1.Update phoneNumber\n2.Update Address\n3.Update email'));
    switch (choice) {
        case 1:
            var phone = prompt('Enter new phone number');
            contact.phoneNumber = phone;
            break;
        case 2:
            var address = prompt('Enter new address');
            contact.address = address;
            break;
        case 3:
            var email = prompt('Enter new email');
            contact.email = email;
            break;
    }
}
//UC5
function deleteContact(name) {
    addressBook.filter(c => (c.firstName + c.lastName == name));
}
//UC6
function contactSize() {
    return addressBook.length;
}
//UC7
function checkContact(name) {
    addressBook.forEach(c => {
        if (c.firstName + c.lastName == name) {
            return false;
        }
    });
}
//UC8
function searchInCity(city, name) {
    return addressBook.filter(c => (c.city == city)).filter(c => (c.firstName + c.lastName == name));
}
function searchInState(state, name) {
    return addressBook.filter(c => (c.state == state)).filter(c => (c.firstName + c.lastname == name));
}
//UC9
function getContactByCity(city) {
    addressBook.filter(c => (c.city == city)).forEach(c => console.log(c.firstName + ' ' + c.lastName));
}
function getContactByState(state) {
    addressBook.filter(c => (c.state == state)).forEach(c => console.log(c.firstName + ' ' + c.lastName));
}
//UC10
function getContactSizeByCity(city) {
    let list = getContactByCity(city);
    return list.length;
}
function getContactSizeByStae(state) {
    let list = getContactByState(state);
    return list.length;
}
//UC11
function compare(contact1, contact2) {
    let a = contact1.firstName.toUpperCase();
    let b = contact2.firstName.toUpperCase();
    if (a > b) {
        return 1;
    }
    else {
        return -1;
    }
}
function sortByName() {
    let sortedByName = addressBook.sort(compare);
    return sortedByName;
}
//UC12
function compareByCity(contact1, contact2) {
    let a = contact1.city.toUpperCase();
    let b = contact2.city.toUpperCase();
    if (a > b) {
        return 1;
    }
    else {
        return -1;
    }
}
function sortByCity() {
    let sortedByCity = addressBook.sort(compareByCity);
    return sortedByCity;
}