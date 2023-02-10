const Employee = require('./Employee');

class Manager extends Employee{

    constructor(name,id, email, officeNumber){
        if (officeNumber === "" || isNaN(officeNumber) || officeNumber < 0) {
            throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
        }

        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getofficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;