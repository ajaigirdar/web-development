// Exercise

const user = {
    name: "Alice",
    age: 28,
  };
  
  const job = {
    title: "Software Engineer",
    company: "Tech Corp",
  };
  
  const userLocation = {  
    city: "New York",
    country: "USA",
  };
  
// Merge using Object.assign()
const userProfile = Object.assign(user, job, userLocation);

console.log(userProfile);
  
// Merge using spread operator
const userProfile1 = { ...user, ...job, ...userLocation };

console.log(userProfile1);

//Challenge

job.name =  "Bob";
  
// Merging with Object.assign()
const userProfile2 = Object.assign(user, job, location);

console.log(userProfile2);

  
  