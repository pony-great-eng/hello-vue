<template>
    <div>用户登录 {{username}}</div>
    <AppInput v-model="username" />
</template>

<script>
import AppInput from './app-input'

export default {
    // mounted (){
    //     console.log(this.$refs.username);
    //     this.$refs.username.focus();
    // }

    data(){
        return {
            username:'',
        };
    },

    created(){
        console.log('user login created');
    },

    mounted(){
        console.log('user login mounted');
    },

    updated(){
        console.log('user login updated');
    },

    unmounted(){
        console.log('user login unmounted');
    },

    components:{AppInput},

};
</script>