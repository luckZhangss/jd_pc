<template>
  <div class="box">
    <!-- <h1 style="margin-left: 800px;">京东购物商城</h1> -->
    <a-card style="width: 300px">
      
      <a-form
      ref="formRef"
        :model="formState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: '请输入用户名' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: '请输入密码!' }]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="formState.remember">记住</a-checkbox>
          </a-form-item>
          <a class="login-form-forgot" href="">忘记密码</a>
        </a-form-item>
        <!-- @click="submitForm('ruleForm')" -->
        <a-form-item>
          <a-button
            :disabled="disabled"
            type="primary"
            html-type="submit"
            class="login-form-button"
          >
            登录
          </a-button>
          或者
          <a href="/register">去注册</a>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>
<script lang="ts" setup>
import { reactive,ref, computed, getCurrentInstance } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import type { FormInstance } from 'ant-design-vue';
import router from "@/router";
import axios from "axios";
import { message } from "ant-design-vue";



const {appContext}  =  getCurrentInstance()
console.log(appContext);
const globalProxy = appContext.config.globalProperties



interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
});
const formRef = ref<FormInstance>();

const onFinish = (values: any) => {
  const { username, password } = formState;

  globalProxy.$http.post('http://localhost:5000/api/v1/login',{username:username,password:password}).then((res)=>{
    console.log(res);
    if(res.data.code === 0){
      localStorage.setItem('userInfo',JSON.stringify(res.data.data))
      globalProxy.$message.success({
        content:'登录成功',
        duration:2,
        onClose:()=>{
           router.push("/home");
        }
      })
    }else{
      globalProxy.$message.error({
        content:res.data.msg,
        duration:3,
        onClose:()=>{
          formRef.value.resetFields()
        }
      });
      
    }
   
    
  })
  // axios
  //   .post("http://localhost:5000/api/v1/login", {
  //     username: username,
  //     password: password,
  //   })
  //   .then((res) => {
  //     console.log(res);
  //     if (res.data.code === 0) {
  //       localStorage.setItem("userInfo", JSON.stringify(res.data.data));
  //       message.success({
  //         content: "登录成功",
  //         duration: 2,
  //         onClose: () => {
  //           router.push("/");
  //         },
  //       });
  //     } else {
  //       message.error({
  //         content: res.data.msg,
  //         duration: 3,
  //         onClose: () => {
  //           formRef.value.resetFields()
  //         },
  //       });
  //     }
  //   });
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};


const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>
<style scoped>
.box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
 padding-right: 80px;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url('	https://passport.jd.com/new/misc/2015/background.png');
  background-size: cover;
}
.a-card {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep(:where(.css-dev-only-do-not-override-1hsjdkk).ant-btn-primary) {
  width: 100%;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
