'use strict'

const config_settings = {
  'dev': {
    'jenkins_url': 'http://178.128.116.130:8080/'
  }
}

const config = config_settings[process.env.APP_ENV || 'dev']

module.exports = config