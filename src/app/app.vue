<template>
    <h3>{{name}}</h3>
    <UserProfile />
  
</template>

<script>
import UserProfile from './components/user-profile';

export default {
    data (){
        return {
            name:'宁浩网',
        };
    },

methods:{
onTapAppButton(text) {
    console.log('on tap app button');
},

onInitAppButton(){
    console.log('on init app button')
}
},

   components:{UserProfile},

}
</script>

<style>


@import './styles/app.css';
</style>