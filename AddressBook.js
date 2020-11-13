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
        if (lnameRegex.test(lasstName)) {
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
        if (phoneRegex.test(this.phoneNumber)) {
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
    toString() {
        return '\nName : ' + this.firstName + ' ' + this.lastName + '\nAddress : ' + this.address + '\nCity : ' + this.city +
            '\nState : ' + this.state + '\nZip : ' + this.zip + '\nphoneNumber : ' + this.phoneNumber + '\nEmail : ' + this.email;
    }
}

