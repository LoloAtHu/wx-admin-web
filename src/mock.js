import Mock from 'mockjs'
import config from './config'

Mock.mock(`${config.host}${config.url.login}`, 'post', options => {
  const data = JSON.parse(options.body)
  const { name, password } = data

  if (name !== 'admin') {
    return {
      code: 500,
      msg: 'account or email error',
      data: ''
    }
  } else if (password !== 'admin') {
    return {
      code: 500,
      msg: 'password error',
      data: ''
    }
  } else {
    return {
      code: 200,
      msg: 'success',
      data: {
        name: name,
        f: 'hahfjwhefjbhskjhaf'
      }
    }
  }
})
