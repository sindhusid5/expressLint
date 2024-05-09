 ## Description
This assignment focuses on adding error handling and routing middleware to an ExpressJS application, as well as implementing a feature to append users to a file. Additionally, it requires a clean separation of concerns within the codebase and integration of linting using eslint and prettier.

1. Require node, 

2. Clone the repository to your local machine:

3.Navigate to the project directory:

`cd Lint`

4. Install dependencies

`npm install` or
`npm i`

5. To check linting errors and fix them, use the following commands:
   `npm run format` # Format code using Prettier
   `npm run lint` # Find linting errors using ESLint
   `npm run lint:fix` # Fix linting errors automatically

6. Start the ExpressJS application:

`npm start` or
`node app.js`

7. Once the server is running, you can access the following routes:

GET /users: Returns all users.
GET /users/:id: Returns a user with a specific ID.
POST /users: Add a user to the starting file.

Example:
To fetch all users: http://localhost:4000/users
To fetch a user with ID 1: http://localhost:4000/users/1
To post a user: http://localhost:4000/users

Once the new user added it will be appended at first of the users.json file under sample folder.

8. To stop the server, press Ctrl + C in the terminal.
