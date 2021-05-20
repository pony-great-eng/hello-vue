<template>
  <h3 @click="changeName">{{ nameEmoji }}</h3>
  <div @click="username = 'wanghao'">{{ username }}</div>
</template>

<script>
import { ref, reactive, toRefs, onMounted, watch, computed } from 'vue';

export default {
  //组合式组件

  setup() {
    const name = ref('宁浩网');

    const user = reactive({
      username: '王皓',
    });

    const changeName = () => {
      name.value = 'NINGHAO';
    };
    //const { username } = toRefs(user);

    //生命周期
    onMounted(() => {
      console.log('mounted');
    });

    //监视数据
    watch(name, (newName, oldName) => {
      console.log(newName, oldName);
    });

    //计算属性
    const nameEmoji = computed(() => `${name.value}🌤️`);
    return {
      name,
      ...toRefs(user),
      changeName,
      nameEmoji,
    };
  },
  //   data() {
  //     return {
  //       name: '宁浩网',
  //     };
  //   },

  //   created() {
  //     console.log(this.$data);
  //   },

  //   created() {
  //     const user = {
  //       name: '宁浩网',
  //     };

  //     const handler = {
  //       get(target, property) {
  //         return target[property];
  //       },

  //       set(target, property, value) {
  //         if (property === 'name') {
  //           if (value.length > 10) {
  //             throw new Error('名字太长了');
  //           }
  //         }

  //         return Reflect.set(target, property, value);
  //       },
  //     };

  //     const userProxy = new Proxy(user, handler);

  //     try {
  //       userProxy.name = 'NINGHAO';
  //     } catch (error) {
  //       console.log('错误：', error.message);
  //     }

  //     console.log(userProxy.name);
  //   },
};
</script>

<style>
@import './styles/app.css';
</style>
