const dotenv = require('dotenv')

dotenv.config()

class Filminder {
  static isTestEnvironment() {
    return process.env.NODE_ENV === 'test'
  }
}

module.exports = Filminder
