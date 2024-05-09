const fileHelper = require('../utils/filehelper')

const getAllUsers = async (req, res) => {
  try {
    // Read all users from the file
    const users = await fileHelper.readUsers()
    // Return the users in the response
    return res.json(users)
  } catch (error) {
    // Log and handle errors
    console.error(error.message)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

const getUserById = async (req, res) => {
  try {
    // Extract user ID from request parameters
    const { id } = req.params
    // Read all users from the file
    const users = await fileHelper.readUsers()

    // Validate user ID format
    const idRegex = /^\d+$/
    if (!idRegex.test(id)) {
      return res.status(400).json({ error: 'Invalid user ID format' })
    }

    // Find user by ID
    const user = users.find((u) => u.id === parseInt(id, 10))
    if (!user) {
      return res.status(404).json({ error: `User with id ${id} not found` })
    }

    // Return the user in the response
    return res.json(user)
  } catch (error) {
    // Log and handle errors
    console.error(error.message)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

const addUser = async (req, res) => {
  try {
    // Extract user data from the request body
    let { id, name, email } = req.body

    // Convert id to a number (remove quotes if present)
    id = parseInt(id, 10)

    // Ensure all required fields are present
    if (!id || !name || !email) {
      return res
        .status(400)
        .json({ error: 'id, name, email fields are needed' })
    }

    // Create a user object
    const user = { id, name, email }

    // Append the user to the file
    await fileHelper.appendUser(user)

    // Return the added user in the response
    return res.json(user)
  } catch (error) {
    // Log and handle errors
    console.error(error.message)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = { getAllUsers, getUserById, addUser }
