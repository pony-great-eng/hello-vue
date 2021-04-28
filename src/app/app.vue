<template>
    <h3>{{name}}</h3>
    <!-- {{processStatus}}
    <button v-on:click="resetName">重置</button>
    <button @click="setName">设置</button> -->
    <!-- <div v-for="(post, index) in postList" :key ="post.id">
        {{index+1}} {{post.content}} - <small>{{post.author}}</small>
    </div> -->
    <!-- <div v-if="visible">隐藏的内容！</div>
    <button @click="visible = !visible">{{ visible ? '隐藏' : '显示'}}</button> -->
    <div class="menu">
        <div 
        :class="['menu-item',{active: currentItem === index}]"
        @click="currentItem = index"
        v-for="(item, index) in menuItems" :key="index"
        >
        {{item}}
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            name:'宁浩网',
            menuItems:['首页','热门','发布'],
            currentItem:0,

            // visible:false,

            // postList:[
            //     {
            //         id:1,
            //         content:'故人西辞黄鹤去，白云千载空悠悠',
            //         author:'李白',
            //     },
            //     {
            //         id:2,
            //         content:'好雨知时节，当春乃发生',
            //         author:'杜甫',
            //     },
            //     {
            //         id:3,
            //         content:'莫听穿林打叶声，何妨吟啸且徐行',
            //         author:'苏轼',
            //     },

            // ],
        };
    },

    // computed:{
    //     processStatus(){
    //         return this.name ==='NINGHAO' ? '初始化...' : '成功设置了数据！';
    //     }
    // },

    // watch:{
    //     name(newName, oldName) {
    //         console.log(`name 发生了变化: ${oldName} -> ${newName}`);
    //     }

    // },

    // created() {
    //     console.log('app组件已创建');

    //     this.setName();
    // },

    // methods:{
    //     setName(){
    //           setTimeout(() => {
    //         this.name ='宁浩网';
    //     },3000);
    //     },

    //     resetName(){
    //         this.name="NINGHAO";
    //     }
    // }

}
</script>

<style>
/* button {
    margin:4px;
} */

@import './styles/app.css';
</style>