<template>
  <h3>{{ name }}</h3>
  <div>{{ errorMessage }}</div>
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

  <input type="text" v-model="title" @keyup.enter="createPost" />

  <div v-for="post in posts" :key="post.id">
    <input
      type="text"
      :value="post.title"
      @keyup.enter="updatePost($event, post.id)"
    />
    <button @click="deletePost(post.id)">删除</button>
    {{ post.title }} -
    <small>{{ post.user.name }}</small>
  </div>
</template>

<script>
import { axios, apiHttpClient } from '@/app/app.service';

export default {
  data() {
    return {
      name: '宁浩网',
      menuItems: ['首页', '热门', '发布'],
      currentItem: 0,
      posts: [],
      user: {
        name: '苏东坡',
        password: '123456789',
      },
      token: '',
      title: '',
    };
  },

  // created() {
  //   axios
  //     .get('http://localhost:3000/posts1')
  //     .then(response => {
  //       console.log(response);
  //       this.posts = response.data;
  //     })
  //     .catch(error => {
  //       console.log(error.message);
  //       console.log(error.response);

  //       this.errorMessage = error.message;
  //     });
  // },

  async created() {
    this.getPosts();
    //用户登录
    try {
      const response = await apiHttpClient.post('/login', this.user);
      this.token = response.data.token;
      console.log(response.data);
    } catch (error) {
      this.errorMessage = error.message;
    }
  },

  methods: {
    async deletePost(postId) {
      try {
        await apiHttpClient.delete(`/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        this.getPosts();
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    async updatePost(event, postId) {
      console.log(event.target.value);
      console.log(postId);

      try {
        await apiHttpClient.patch(
          `/posts/${postId}`,
          {
            title: event.target.value,
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          },
        );
        this.getPosts();
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    async getPosts() {
      try {
        const response = await apiHttpClient.get('/posts');
        this.posts = response.data;
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    async createPost() {
      try {
        const response = await apiHttpClient.post(
          '/posts',
          {
            title: this.title,
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          },
        );
        console.log(response.data);
        this.title = '';
        this.getPosts();
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
};
</script>

<style>
/* button {
    margin:4px;
} */

@import './styles/app.css';
</style>
