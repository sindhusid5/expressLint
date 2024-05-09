const express = require('express')
const app = express()
const routes = require('./routes/user')
const middleware = require('./middleware/routingMiddleware')
const PORT = 4000

app.use(express.json())
app.use(middleware.routeLogger)

app.get('/users', routes.getAllUsers)
app.get('/users/:id', routes.getUserById)
app.post('/users', routes.addUser)

app.use(middleware.errorHandler)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
