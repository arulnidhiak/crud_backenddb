Objective:
Create a fully functional Node.js application that interacts with a MongoDB database using Mongoose, implements at least three API routes, and follows proper coding practices for readability, maintainability, and version control.

1.Create a Node.js Application:

Set up a Node.js project using npm.
Use Express as the web framework for handling API requests.
Organize the project files in a readable and maintainable format (use separate folders for models, routes, and configurations if necessary).
API Requirements:

2.Develop at least three API routes that interact with the MongoDB database.
Use the GET, POST, and PUT HTTP methods to handle requests.
Each route should perform a specific action:
GET: Retrieve data from the database.
POST: Store new data in the database.
PUT: Update existing data in the database.
Database Integration (MongoDB + Mongoose):

3.Connect the Node.js application to a MongoDB database using Mongoose as the Object Data Modeling (ODM) library.
Define at least one Mongoose model that represents a collection in the database (e.g., a User model with fields like name, quantity, and price).
Store, retrieve, and update data using the Mongoose model.
API Functionality:

The API should allow clients to perform the following actions:
Retrieve all records (GET /users).
Create a new record (POST /users).
Update an existing record (PUT /users/:id).
The data should be validated and error-handling should be implemented to handle invalid requests.
