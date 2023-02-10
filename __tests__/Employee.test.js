const Employee = require("../lib/Employee");

describe("Employee", () => {

    // constructor
    
    describe("Initialization", () => {
        it("should create an object with a name, id and email if provided valid arguments", () => {
            const employee = new Employee("Sarah", 1, "sarah@email.com");

            // Verify that the new object has the correct properties
            expect(employee.name).toEqual("Sarah");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("sarah@email.com");
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Employee();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrow();
        })

        it("should throw an error if not provided a name", () => {
            const cb = () => new Employee("", 1, "sarah@email.com");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        })

        it("should throw an error if not provided an id", () => {
            const cb = () => new Employee("Sarah", "", "sarah@email.com");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        })

        it("should throw an error if not provided an email", () => {
            const cb = () => new Employee("Sarah", 1, "");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        })
    })

    //functions

    //getName()

    describe("getName", () => {
        it("should get the name from the employee object", () => {
            // Create new objects to test with
            const employee = new Employee("Sarah", 1, "sarah@email.com")

            expect(employee.getName()).toEqual("Sarah");
        })
    })

    //getId()

    describe("getId", () => {
        it("should get the id from the employee object", () => {

            const employee = new Employee("Sarah", 1, "sarah@email.com")

            expect(employee.getId()).toEqual(1);
        })
    })

    //getEmail()

    describe("getEmail", () => {
        it("should get the email from the employee object", () => {

            const employee = new Employee("Sarah", 1, "sarah@email.com")

            expect(employee.getEmail()).toEqual("sarah@email.com");
        })
    })

    //getRole()

    describe("getRole", () => {
        it("should get the role from the employee object", () => {

            const employee = new Employee("Sarah", 1, "sarah@email.com")

            expect(employee.getRole()).toEqual("Employee");
        })
    })
})


