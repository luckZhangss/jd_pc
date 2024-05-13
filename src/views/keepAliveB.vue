<template>
  <div>
    <!-- 缓存组件  -->
    <KeepAlive
      exclude="componentB"
      max="2"
      @activated="onActivated" @deactivated="onDeactivated"
    >
      <componentA v-if="test"> </componentA>

      <componentB v-else>
        <input type="text" name="b" />
      </componentB>
    </KeepAlive>
    <button @click="change">切换</button>
  </div>
</template>
<script>
import { onMounted, onUnmounted, ref } from "vue";
import componentB from "@/components/componentB.vue";
import componentA from "@/components/componentA.vue";
export default {
  components: {
    componentB,
    componentA,
  },
  setup() {
    const test = ref(true);
    const change = () => {
      test.value = !test.value;
    };
    onMounted(() => {
      console.log('组件已挂载');
    });
    onUnmounted(()=>{
      console.log('组件已卸载');
    })
    const onActivated = ()=>{
      console.log('11','组件被激活（进入缓存状态）');
    }
    const onDeactivated = ()=>{
      console.log('组件被去激活（离开缓存状态）');
    }
    return {
      test,
      change,
      onActivated,
      onDeactivated
    };
  },
};
</script>

<style lang="scss" scoped></style>
