import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

// Controllers (route handlers)
import * as homeController from './controllers/home'
import * as apiController from './controllers/api'

// Create Express server
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

// Set proper CORS Headers
app.use(cors())

// BODYPARSER
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * Primary app routes.
 */
app.get('/', homeController.index)

/**
 * API examples routes.
 */
app.get(
  '/api/accounts-and-user/users-search/:username',
  apiController.usersSearch,
)

export default app
