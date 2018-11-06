'use strict'

const config_settings = {
  'dev': {
    'jenkins_url': 'http://178.128.116.130:8080/',
    'jenkins_ssh': 'ssh root@178.128.116.130'
  }
}

const config = config_settings[process.env.APP_ENV || 'dev']

module.exports = config