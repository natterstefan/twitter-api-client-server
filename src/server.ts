import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

// Controllers (route handlers)
import * as homeController from './controllers/home'
import * as apiController from './controllers/api'
// Utils
import { twitterClient } from './utils/twitterClient'

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
 * Middlewares
 */
app.use((_req, res, next) => {
  res.locals.twitterClient = twitterClient
  next()
})

/**
 * Primary app routes.
 */
app.get('/', homeController.index)

/**
 * API examples routes.
 */
app.get(
  '/api/accountsAndUsers/usersSearch/:username',
  apiController.usersSearch,
)
app.get(
  '/api/tweets/statusesUserTimeline/:screenName',
  apiController.statusesUserTimeline,
)

export default app
