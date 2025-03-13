1. Spring backend upload json data to a mysql table
2. Spring backend that returns the values from a table 
3. Have react fetch the data from that table through api call
4. Have react update the table via api calls to backend
    * make a form and use react router to switch components
    * create a fetch post 
5. Implement a context for global storage 
6. Create table and spring data repository for storing and getting username, password, authority, id (should be a uuid)
   // react frontend creates a fetch with method type POST
   // endpoint in the api will query table for the username
   // endpoint will verify that the username/password match the user stored in database
   // endpoint will return user information if valid, error if incorrect
   // react frontend uses the response to either reject login, or log user in 
7. Implement a UserContext for managing user data 
8. Prevent users that are not logged in from being able to use form