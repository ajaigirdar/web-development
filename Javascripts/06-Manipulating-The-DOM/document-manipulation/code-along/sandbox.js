// create a cat object

let cat = {
    name: 'Fluffy',
    breed: 'Bombay Cat',
    age: 3,
    meow: function() {
        console.log(`${this.name} says 'Meow'`);
    }
}

console.log(cat.name);
console.log(cat.age);
cat.meow();

cat.color = "Black";
console.log(cat.color);

delete cat.color;
console.log(cat.color);

// create an owner

let owner = {
    name: "Abrar",
    city: "Philadelphia"
};

cat.owner = owner;

console.log(cat.owner.name);
console.log(cat.owner.city);


// compare objects

let cup1 = {color: 'blue', vol: 12};
let cup2 = {color: 'blue', vol: 12};

console.log(cup1 == cup2); // false

let cup3 = cup2;

console.log(cup2 == cup3);
cup2.color = 'red'

console.log(cup3.color);

// convert object to JSON

let catJSON = JSON.stringify(cat);
console.log(catJSON);

