import winston from 'winston'


// Generally, i would implement sentry for logging instead of saving logs in file system :)
const logConfiguration = {
  'transports': [
    new winston.transports.File({
      filename: 'logs/serverLogs.log'
    })
  ],
}

const logger = winston.createLogger(logConfiguration)



export default logger