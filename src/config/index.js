import configDefault from './config.default'
import configTest from './config.test'
import configProd from './config.prod'

let configEnv = {}
if (process.env.VUE_APP_ENV === 'test') {
  configEnv = configTest
} else if (process.env.VUE_APP_ENV === 'prod') {
  configEnv = configProd
}
// ./config. + process.env.VUE_APP_ENV

const config = Object.assign({}, configDefault, configEnv)

export default {
  ...config
}
