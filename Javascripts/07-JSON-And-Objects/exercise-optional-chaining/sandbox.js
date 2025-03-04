// Exercise

const book = {
    title: "JavaScript Basics",
    author: {
        name: "John Doe",
        social: {
            twitter: "@johndoe"
        }
    }
};

// Use optional chaining to access the Twitter handle
console.log(book.author?.social?.twitter);


// Try accessing a non-existent property using optional chaining
console.log(book.publisher?.name);

   /*

- What happens when you try to access book.publisher?.name?
Since book.publisher does not exist, book.publisher?.name returns undefined instead of throwing an error.

- How does optional chaining prevent errors in this scenario?
?. ensures that if a property does not exist, the expression stops and returns undefined, instead of crashing the program.

- What would happen if we removed ?. in book.publisher?.name?
Since publisher does not exist, JavaScript will throw an error.

   */


// Challenge

// add
book.edition = { year: 2025 };

// check
console.log(book.edition?.year ?? "Edition information not available.");

// test
const book1 = {
    title: "JavaScript"
  };
  console.log(book1.edition?.year ?? "Edition information not available.");

