import {createStore,createLogger} from "vuex";
import user, {UserState} from '@/user/user.store';
import {createApp} from 'vue';
import {logger} from './app.plugin';

export interface RootState {
    name: string;
    loading: boolean;
    user?: UserState;
}

/**
 * 创建Store
 */
const store =createStore ({
    state: {
        name:'',
        loading:false,
    },

    getters: {
        name(state) {
            return `你好！${state.name}`;
        },
    },

    mutations:{
        setName(state,data){
            state.name=data;
        },

        setLoading(state,data){
            state.loading = data;
        },
    },

    actions:{
        getName({commit,rootState}){
            console.log(rootState);
           commit('setLoading',true);

           setTimeout(()=>{
            const name ='宁浩网';
            commit('setName',name);
            commit('setLoading',false);
           },2000);
            //console.log(context);
        },
    },

    modules:{
        user
    },

    plugins:[createLogger(),logger],
});

export default store;