<template>
  <div class="login">
    <div class="l-form">
      <div class="l-tip">Login test</div>
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.name" placehold="account or email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import config from '../config'
import axios from '../utils/request'
import { Message } from 'element-ui'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      msg: 'Login page'
    }
  },
  created () {
    if (this.$store.state.token) {
      this.$router.push('/index')
    } else {
      const token = localStorage.getItem('token')
      if (token) {
        this.$store.commit('loginIn', token)
        this.$router.push('/index')
      }
    }
    console.log('======created', this.$store.state.token)
  },
  methods: {
    onSubmit (event) {
      const payload = {
        name: this.form.name,
        password: this.form.password
      }
      axios.post(config.url.login, payload)
        .then(response => {
          console.log('-----------------', response)
          if (response.code !== 200) {
            Message({
              message: response.msg,
              type: 'error',
              duration: 2000
            })
            // return
          } else {
            Message({
              message: 'Login success',
              type: 'success',
              duration: 2000
            })
            this.$store.commit('loginIn', response.data.f)
            this.$router.push('/index')
          }
        })
        .catch(e => {
          console.error(e)
          Message({
            message: e.message,
            type: 'error',
            duration: 5000
          })
        })
    }
  }
}
</script>

<style lang="scss">
.login {
 width: 100%;
 height: 100%;
 background: #000;
 .l-form {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translateY(-50%) translateX(-50%);
 width: 300px;
 margin: auto;
 border-radius: 8px;
 background: #fff;
 padding: 20px;
 .l-tip {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
 }
 .el-form {
  width: 100%;
  margin: auto;
  margin-top: 20px;
  .el-form-item {
  button {
   width: 100%;
  }
  }
 }
 }
}
</style>
