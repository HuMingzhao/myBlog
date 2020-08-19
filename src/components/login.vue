<template>
  <el-dialog
    :visible.sync="centerDialogVisible"
    class="login-wrap"
    width="30%"
    :show-close="false"
    center>
    <h2>Sign in to HMZ blog</h2>
    <el-form :model="ruleForm" label-position="top" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="Username" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>

        <el-form-item label="Password" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item v-if="mode=='register'" label="Confirm password" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <!-- <el-button type="primary" @click="submitForm('ruleForm')">Sign in</el-button> -->
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
          <button class="submit-btn" @click="submitForm('ruleForm')">Sign in</button>
        </el-form-item>
    </el-form>
    <button class="switch-mode" v-if="mode=='login'" @click="goToRegister">go to register</button>
    <button class="switch-mode" v-if="mode=='register'" @click="mode='login'">go to log in</button>
  </el-dialog>
</template>

<script>
export default {
  name: 'Login',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      centerDialogVisible: true,
      mode: 'login',
      ruleForm: {
        username: '',
        password: '',
        checkPass: ''
      },
      rules: {
        username: [
          { required: true, message: 'username is required', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'password is required', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: 'confirm password is required', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      alert('submit!')
    },
    goToRegister () {
      this.mode = 'register'
    }
  }
}
</script>

<style lang="scss">
    .login-wrap {
        h2 {
            padding: 0;
            margin: 0;
            font-weight: 700;
            margin-bottom: 20px;
            text-align: center;
            color: rgba(68, 160, 179, .5);
        }
        .el-form-item__label {
            color: rgba(68, 160, 179, .5);
            font-weight: 700;
        }
        .el-input__inner {
            background-color: rgba(0, 129, 198, .05);
            color: rgba(0, 129, 198, .7);
            border: none;
            border-radius: 3px;
        }
        .submit-btn {
            display: inline-block;
            width: 100%;
            border: none;
            color: #fff;
            padding: 15px;
            border-radius: 3px;
            background-color: #44a0b3;;
            -webkit-box-shadow: 0 2px 7px rgba(0, 129, 198, .45);
            box-shadow: 0 2px 7px rgba(0, 129, 198, .45);
            font-weight: 700;
            outline: 0;
            cursor: pointer;
            -webkit-transition: all .5s;
            -o-transition: all .5s;
            transition: all .5s;
        }
        .switch-mode {
            background: #fff;
            outline: none;
            border: none;
            color: rgba(68, 160, 179, 0.8);
            display: block;
            margin: 0 auto;
        }
    }
</style>
