import express from 'express'

// Create Express server
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

app.get('/', (_req, res) => {
  console.log('hello world called!')
  res.send('Hello World!')
})

export default app
