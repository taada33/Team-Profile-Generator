const Manager = require("../lib/Manager");

describe("Manager", () => {

    // constructor
    
    describe("Initialization", () => {
        it("should create an object with a name, id and email if provided valid arguments", () => {
            const manager = new Manager("Sarah", 1, "sarah@email.com", 1);

            // Verify that the new object has the correct properties
            expect(manager.name).toEqual("Sarah");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("sarah@email.com");
            expect(manager.officeNumber).toEqual(1);
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Manager();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrow();
        })

        it("should throw an error if not provided a name", () => {
            const cb = () => new Manager("", 1, "sarah@email.com", 1);
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        })

        it("should throw an error if not provided an id", () => {
            const cb = () => new Manager("Sarah", "", "sarah@email.com", 1);
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        })

        it("should throw an error if not provided an email", () => {
            const cb = () => new Manager("Sarah", 1, "", 1);
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        })

        it("should throw an error if not provided an officeNumber", () => {
            const cb = () => new Manager("Sarah", 1, "sarah@email.com", "");

            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
            
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        })
    })

    //functions

    //getName()

    describe("getName", () => {
        it("should get the name from the manager object", () => {
            // Create new objects to test with
            const manager = new Manager("Sarah", 1, "sarah@email.com", 1)

            expect(manager.getName()).toEqual("Sarah");
        })
    })

    //getId()

    describe("getId", () => {
        it("should get the id from the manager object", () => {

            const manager = new Manager("Sarah", 1, "sarah@email.com", 1)

            expect(manager.getId()).toEqual(1);
        })
    })

    //getEmail()

    describe("getEmail", () => {
        it("should get the email from the manager object", () => {

            const manager = new Manager("Sarah", 1, "sarah@email.com", 1)

            expect(manager.getEmail()).toEqual("sarah@email.com");
        })
    })

    //getRole()

    describe("getRole", () => {
        it("should get the role from the manager object", () => {

            const manager = new Manager("Sarah", 1, "sarah@email.com", 1)

            expect(manager.getRole()).toEqual("Manager");
        })
    })

    //getOfficeNumber

    describe("getOfficeNumber", () => {
        it("should get the officeNumber from the manager object", () => {

            const manager = new Manager("Sarah", 1, "sarah@email.com", 1)

            expect(manager.getofficeNumber()).toEqual(1);
        })
    }
)})