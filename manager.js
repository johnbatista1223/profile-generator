const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, title) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = title;
    }

    getRole() {
        return 'manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;