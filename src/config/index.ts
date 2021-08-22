interface IConfig {
  APP_NAME: string
}

switch(process.env.NODE_ENV) {
  case 'development':
    require('dotenv').config({path: '../env/development.env'})
  case 'production':
    require('dotenv').config({path: '../env/production.env'})
  case 'test':
    require('dotenv').config({path: './env/test.env'})
}

const config: IConfig = {
  APP_NAME: process.env.APP_NAME
}

export default config