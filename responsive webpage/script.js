// Step 1: Create an object to represent a person
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    job: "Software Developer",
    
    // Step 2: Add a method (function) inside the object
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },

    // Method to display the person's introduction
    introduce: function() {
        return "Hi, my name is " + this.fullName() + " and I am a " + this.job + ".";
    }
};

// Step 3: Access object properties
console.log("First Name:", person.firstName); // John
console.log("Last Name:", person.lastName); // Doe
console.log("Age:", person.age); // 30
console.log("Job:", person.job); // Software Developer

// Step 4: Access object methods
console.log("Full Name:", person.fullName()); // John Doe
console.log("Introduction:", person.introduce()); // Hi, my name is John Doe and I am a Software Developer.

// Step 5: Modify object properties
person.age = 35;
console.log("Updated Age:", person.age); // 35

// Step 6: Add new property to the object
person.country = "USA";
console.log("Country:", person.country); // USA

// Step 7: Iterate over the object properties
console.log("Object properties:");
for (let key in person) {
    if (typeof person[key] !== 'function') { // Exclude methods
        console.log(key + ":", person[key]);
    }
}
