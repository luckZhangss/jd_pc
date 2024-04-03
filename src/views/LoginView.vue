<template>
    <div class="box">
      <h1>京东购物商城</h1>
      <a-card style="width: 300px">
        <a-form
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
        <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button" @click="submitForm('formState')" >  
         登录
        </a-button>
       或者
        <a href="">去注册</a>
      </a-form-item>
    </a-form>
      </a-card>
    </div>
  </template>
  <script lang="ts" setup>
  import { reactive, computed } from 'vue';
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
  import { useRouter } from 'vue-router';
  
  
  interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }
  const formState = reactive<FormState>({
    username: '',
    password: '',
    remember: true,
  });
  const router = useRouter()
  
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  const submitForm = ()=>{
    console.log( '登录成功');
    router.push('/home')
  }
  const disabled = computed(() => {
    return !(formState.username && formState.password);
  });
  </script>
  <style scoped>
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
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
  