 
## Description

This guide focuses on adding error handling and routing middleware to an ExpressJS application, as well as implementing a feature to append users to a file. Additionally, it ensures a clean separation of concerns within the codebase and integrates linting using ESLint and Prettier.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js and npm
- Git

### Instructions

1. **Clone the repository to your local machine:**

   ```bash
   git clone https://github.com/sindhusid5/expressLint.git 
   ```

2. **Navigate to the project directory:**

   ```bash
   cd expressLint
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Check for linting errors and fix them (optional but recommended):**

   ```bash
   npm run format    # Format code using Prettier
   npm run lint      # Find linting errors using ESLint
   npm run lint:fix  # Fix linting errors automatically
   ```

5. **Start the ExpressJS application:**

   ```bash
   npm start
   ```

   or

   ```bash
   node app.js
   ```

6. **Access the application routes:**

   - **Fetch all users:**

     ```bash
     GET http://localhost:4000/users
     ```

   - **Fetch a user with a specific ID (e.g., ID 1):**

     ```bash
     GET http://localhost:4000/users/1
     ```

   - **Add a new user:**

     ```bash
     POST http://localhost:4000/users
     ```

     - **Example of adding a user (using Postman or similar tool):**
       - URL: `http://localhost:4000/users`
       - Method: `POST`
       - Body: (select `raw` and `JSON`)
         ```json
         {
           "name": "John Doe",
           "email": "john.doe@example.com"
         }
         ```

   - Once a new user is added, they will be appended at the beginning of the `users.json` file under the `sample` folder.

7. **To stop the server:**

   Press `Ctrl + C` in the terminal where the server is running. 
