<template>
  <div class="box">
  <div
   
  >
    <a-card style="width:500px;text-align: center;height:300px;">
      <a-form
    
        ref="formRef"
        name="custom-validation"
        :model="formState"
        :rules="rules"
        v-bind="layout"
        @finish="handleFinish"
        @validate="handleValidate"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item has-feedback label="Username" name="username">
          <a-input v-model:value="formState.username" autocomplete="off">
          </a-input>
        </a-form-item>

        <a-form-item has-feedback label="Password" name="pass">
          <a-input
            v-model:value="formState.pass"
            type="password"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item has-feedback label="Confirm" name="checkPass">
          <a-input
            v-model:value="formState.checkPass"
            type="password"
            autocomplete="off"
          />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" html-type="submit">注册</a-button>
          <a-button style="margin-left: 10px" @click="resetForm"
            >去登录</a-button
          >
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</div>
</template>

<script setup lang="ts">
import axios from "axios";
import router from "@/router";
import { reactive, ref } from "vue";
import type { Rule } from "ant-design-vue/es/form";
import type { FormInstance } from "ant-design-vue";
import { message } from "ant-design-vue";

interface FormState {
  username: string;
  pass: string;
  checkPass: string;
}
const formRef = ref<FormInstance>();
const formState = reactive<FormState>({
  username: "",
  pass: "",
  checkPass: "",
});
const checkUserName = async (_rule: Rule, value: string) => {
  // console.log(_rule, value);

  if (value === "") {
    // console.log(value);

    return Promise.reject("Please input the username");
  } else {
    return Promise.resolve();
  }
};
const validatePass = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Please input the password");
  } else {
    if (formState.checkPass !== "") {
      formRef.value.validateFields("checkPass");
    }
    return Promise.resolve();
  }
};
const validatePass2 = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Please input the password again");
  } else if (value !== formState.pass) {
    return Promise.reject("Two inputs don't match!");
  } else {
    return Promise.resolve();
  }
};

const rules: Record<string, Rule[]> = {
  username: [{ required: true, validator: checkUserName, trigger: "change" }],
  pass: [{ required: true, validator: validatePass, trigger: "change" }],
  checkPass: [{ validator: validatePass2, trigger: "change" }],
};
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};
const handleFinish = (values: FormState) => {
  const { username, pass } = formState;
  axios
    .post("http://localhost:5000/api/v1/register", {
      username: username,
      password: pass,
    })
    .then((res) => {
      console.log(res);
      if (res.data.code === 0) {
        message.success({
          content: "注册成功",
          duration: 2,
          onClose: () => {
            router.push("/login");
          },
        });
      } else {
        message.error({
          content: res.data.msg,
          duration: 5,
          onClose: () => {
            // 清空输入框
            formRef.value.resetFields();
          },
        });
      }
    });
  console.log(values, formState);
};

const handleFinishFailed = (errors) => {
  console.log(errors);
};
// 去登陆
const resetForm = () => {
  // formRef.value.resetFields();
  router.push("/login");
};
const handleValidate = (...args) => {
  console.log(args);
};
</script>

<style scoped>
.box{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://passport.jd.com/new/misc/2015/background.png');
  background-size: cover;
  width: 100%;
  height: 700px;
}
</style>
