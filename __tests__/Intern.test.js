const Intern = require("../lib/Intern");

describe("Intern", () => {

    // constructor
    
    describe("Initialization", () => {
        it("should create an object with a name, id and email if provided valid arguments", () => {
            const intern = new Intern("Sarah", 1, "sarah@email.com", "Carleton U");

            // Verify that the new object has the correct properties
            expect(intern.name).toEqual("Sarah");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("sarah@email.com");
            expect(intern.school).toEqual("Carleton U");
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Intern();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrow();
        })

        it("should throw an error if not provided a name", () => {
            const cb = () => new Intern("", 1, "sarah@email.com", "Carleton U");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        })

        it("should throw an error if not provided an id", () => {
            const cb = () => new Intern("Sarah", "", "sarah@email.com", "Carleton U");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        })

        it("should throw an error if not provided an email", () => {
            const cb = () => new Intern("Sarah", 1, "", "Carleton U");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        })

        it("should throw an error if not provided a school", () => {
            const cb = () => new Intern("Sarah", 1, "sarah@email.com", "");

            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'school' to be a non-empty string");
            
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        })
    })

    //functions
    
    //getName()

    describe("getName", () => {
        it("should get the name from the intern object", () => {
            // Create new objects to test with
            const intern = new Intern("Sarah", 1, "sarah@email.com", "Carleton U")

            expect(intern.getName()).toEqual("Sarah");
        })
    })

    //getId()

    describe("getId", () => {
        it("should get the id from the intern object", () => {

            const intern = new Intern("Sarah", 1, "sarah@email.com", "Carleton U")

            expect(intern.getId()).toEqual(1);
        })
    })

    //getEmail()

    describe("getEmail", () => {
        it("should get the email from the intern object", () => {

            const intern = new Intern("Sarah", 1, "sarah@email.com", "Carleton U")

            expect(intern.getEmail()).toEqual("sarah@email.com");
        })
    })

    //getRole()

    describe("getRole", () => {
        it("should get the role from the intern object", () => {

            const intern = new Intern("Sarah", 1, "sarah@email.com", "Carleton U")

            expect(intern.getRole()).toEqual("Intern");
        })
    })

    //getSchool

    describe("getSchool", () => {
        it("should get the school from the intern object", () => {

            const intern = new Intern("Sarah", 1, "sarah@email.com", "Carleton U")

            expect(intern.getSchool()).toEqual("Carleton U");
        })
    }
)})