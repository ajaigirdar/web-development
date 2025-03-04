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
