/*

let cat = new Object();
cat.name = "Fluffy";
cat.breed = "Bombay Cat";
cat.age = 3;
cat.meow = function() {
    console.log(`${this.name} says 'Meow!'.`);
};

console.log(cat);
cat.meow();

let cat2 = {
    name: "Fluffy",
    breed: "Bombay Cat",
    age: 3,
    meow: function() {
        console.log(`${this.name} says 'Meow!'.`);
    }
};

console.log(cat2);
cat2.meow();

let owner = {
    name: "Jane Doe",
    city: "Chicago"
};

cat.owner = owner;

console.log(cat);
console.log(`${cat.name} is owned by ${cat.owner.name}.`);

// associative array syntax
console.log(cat['breed']);

console.log(typeof(cat.unknown));

delete cat.age;
console.log(cat.age); // undefined

// comparing objects
let cup = {
    color: "blue",
    vol: 12
};

let cup2 = {
    color: "blue",
    vol: 12
};

console.log(cup == cup2); // false

let cup3 = cup2;

console.log(cup3 == cup2); // true

cup2.color = "red";
console.log(cup3.color); // red
console.log(cup.color); // blue

let x = 2;
let y = x;
x = 4;
console.log(y); // still 2


let json = '{"name":"Fritz", "breed":"Tabby", "age":3, "colors":["white","grey","black"], "owner": {"name":"Jane Doe"}}';
let cat4 = JSON.parse(json);
console.log(cat4);

let catsJSON = '[{"name":"Fluffy", "breed":"Bombay Cat", "age":3}, {"name":"Fritz", "breed":"Tabby", "age":3}]';
let catlist = JSON.parse(catsJSON);
console.log(catlist);

let catJSON = JSON.stringify(cat);
console.log(catJSON);



// Optional Chaining

const person = {
    name: "Alex",
    age: 25,
    contact: {
    email: "alex@example.com"
    }
   };


   // if statement to check for undefined / null
   if(person.socialMedia) {
    console.log(person.socialMedia.twitter);
   }

   //using && operator to avoid errors with short-circuiting
   console.log(person.socialMedia && person.socialMedia.twitter);

   // using a ternary operator ? to choose between a specific or default option
   console.log(person.socialMedia ? 
                person.socialMedia.twitter :
                "No twitter account")

    // optional chaining with ? before the dot operator when accessing data in an object
    console.log(person.socialMedia?.twitter);

    const users = [
        { name: "John", profile: { website: "johnsblog.com" } },
        { name: "Emma" },
        { name: "Mike", profile: { website: "mikesite.net" } }
       ];

    users.forEach(user => {
        console.log(user.name, user.profile?.website);
    });


    // Example of arrow function
    let sum = (x,y) => x + y;

    let greeting = name => console.log("Hello, ", name);
    greeting("Judy");

    console.log("testing sum function ", sum(3,2));




// Object shorthand

const firstName = "Mark";
const lastName = "Scott";
const status = "retired";

const wrestler1 = {
    firstName: firstName,
    lastName: lastName,
    status: status,
    };

console.log(wrestler1);
console.log(JSON.stringify(wrestler1, null, 2));



// Object Destructuring

const me = {
    name: "CodeFinity",
    age: 22,
    mileTime: "3:55",
    maxBench: 500,
    isLying: true,
    };

console.log(me.name, me.age, me.mileTime);

const { name, age } = me;
console.log(name, age);

// Destruction embedded object data
const { mileTime } = me;
console.log(mileTime);

*/


// Exercise

// Task 1: Create a Car object
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "red",
    drive: function() {
        console.log("The car is driving.");
    }
};


car.drive();

// Task 2: Modify the Car object
car.color = "blue";
car.fuelType = "gasoline";
delete car.year; 


console.log("Car color:", car.color);
console.log("Fuel type:", car.fuelType);

// Task 3: Create a Driver object
let driver = {
    name: "John",
    licenseNumber: "ABC123456",
    age: 30
};


car.driver = driver;


console.log("Driver name:", car.driver.name);

// Task 4: Convert the Car object to JSON
let carJSON = JSON.stringify(car, null, 2); 

console.log("\nCar Object as JSON:\n", carJSON);

// Task 5: Parse a JSON string into a Car object
let carJSONString = '{"make":"Ford", "model":"Mustang", "year":2022, "color":"black", "fuelType":"electric"}';
let newCar = JSON.parse(carJSONString);

console.log("Parsed Car Object:\n", newCar);
