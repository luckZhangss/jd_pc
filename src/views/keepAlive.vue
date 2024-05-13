<template>
  <div>
    <!-- 缓存组件  -->

    <KeepAlive exclude="componentA">
        
      <componentA v-if="test"> </componentA>

      <componentB v-else>
        <input type="text" name="b" />
      </componentB>
    </KeepAlive>

    <button @click="change">切换</button>
  </div>
</template>
<script></script>
<script setup>
import { onActivated, onDeactivated, ref } from "vue";
import componentB from "@/components/componentB.vue";
import componentA from "@/components/componentA.vue";
onActivated(() => {
  console.log("激活调用了");
});
onDeactivated(() => {
  console.log("失活调用了");
});
const test = ref(true);
const change = () => {
  test.value = !test.value;
};
</script>

<style lang="scss" scoped></style>
