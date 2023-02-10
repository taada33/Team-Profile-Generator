const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    // constructor
    
    describe("Initialization", () => {
        it("should create an object with a name, id and email if provided valid arguments", () => {
            const engineer = new Engineer("Sarah", 1, "sarah@email.com", "shcoding");

            // Verify that the new object has the correct properties
            expect(engineer.name).toEqual("Sarah");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("sarah@email.com");
            expect(engineer.github).toEqual('shcoding');
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Engineer();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrow();
        })

        it("should throw an error if not provided a name", () => {
            const cb = () => new Engineer("", 1, "sarah@email.com", "shcoding");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        })

        it("should throw an error if not provided an id", () => {
            const cb = () => new Engineer("Sarah", "", "sarah@email.com", "shcoding");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        })
        
        it("should throw an error if not provided an email", () => {
            const cb = () => new Engineer("Sarah", 1, "", "shcoding");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        })

        it("should throw an error if not provided a github", () => {
            const cb = () => new Engineer("Sarah", 1, "sarah@email.com", "");

            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'github' to be a non-empty string");
            
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        })
    })

    //functions
 
    //getName()


    describe("getName", () => {
        it("should get the name from the engineer object", () => {
            // Create new objects to test with
            const engineer = new Engineer("Sarah", 1, "sarah@email.com", "shcoding")

            expect(engineer.getName()).toEqual("Sarah");
        })
    })

    //getId()

    describe("getId", () => {
        it("should get the id from the engineer object", () => {

            const engineer = new Engineer("Sarah", 1, "sarah@email.com", "shcoding")

            expect(engineer.getId()).toEqual(1);
        })
    })

    //getEmail()

    describe("getEmail", () => {
        it("should get the email from the engineer object", () => {

            const engineer = new Engineer("Sarah", 1, "sarah@email.com", "shcoding")

            expect(engineer.getEmail()).toEqual("sarah@email.com");
        })
    })

    //getRole()

    describe("getRole", () => {
        it("should get the role from the engineer object", () => {

            const engineer = new Engineer("Sarah", 1, "sarah@email.com", "shcoding")

            expect(engineer.getRole()).toEqual("Engineer");
        })
    })

    //getGithub

    describe("getGithub", () => {
        it("should get the github from the engineer object", () => {

            const engineer = new Engineer("Sarah", 1, "sarah@email.com", "shcoding")

            expect(engineer.getGithub()).toEqual("shcoding");
        })
    }
)})


