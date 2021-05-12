<template>
  <div class="page">
    <div class="page-header">
      <h3 class="brand" @click="onClickName">
        {{ name }}
        <span v-if="loading">加载中...</span>
      </h3>
      {{ currentUser }}
      <div class="menu">
        <router-link class="menu-item" to="/">首页</router-link>
        <router-link class="menu-item" :to="{ name: 'about' }"
          >关于</router-link
        >
        <router-link class="menu-item" :to="{ name: 'postIndex' }"
          >内容</router-link
        >
      </div>
    </div>
    <div class="page-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      name: 'name',
      currentUser: 'user/currentUser',
    }),
    ...mapState(['loading', 'user']),
  },

  created() {
    //this.$store.dispatch('getName');
    this.getName();
    this.getCurrentUser();
  },

  methods: {
    ...mapMutations(['setName']),

    ...mapActions({
      getName: 'getName',
      getCurrentUser: 'user/getCurrentUser',
    }),

    onClickName() {
      if (this.$store.state.name === '宁浩网') {
        //this.$store.commit('setName', 'NINGHAO');
        this.setName('NINGHAO');
      } else {
        //this.$store.commit('setName', '宁浩网');
        this.setName('宁浩网');
      }
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>
