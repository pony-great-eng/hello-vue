<template>
  <h3>
    <router-link to="/">{{ name }}</router-link>
  </h3>
  <router-view></router-view>
  <div class="menu">
    <div
      :class="['menu-item', { active: currentItem === index }]"
      @click="currentItem = index"
      v-for="(item, index) in menuItems"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '宁浩网',
      menuItems: ['首页', '热门', '发布'],
      currentItem: 0,
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
