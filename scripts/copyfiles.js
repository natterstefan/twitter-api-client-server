/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const exampleFiles = [path.join(__dirname, '../.env.example')]
const configFiles = [path.join(__dirname, '../.env')]

/**
 * prepare the app config based on the given example config file.
 */
configFiles.forEach((configFile, i) => {
  if (fs.existsSync(configFile)) {
    console.log(`${configFile} exists already.`)
  } else {
    fs.copyFile(exampleFiles[i], configFile, err => {
      if (err) {
        throw err
      }

      console.log(`${configFile} copied`)
    })
  }
})
