import winston from 'winston'

const logConfiguration = {
  'transports': [
    new winston.transports.File({
      filename: 'logs/serverLogs.log'
    })
  ],
}

const logger = winston.createLogger(logConfiguration)



export default logger