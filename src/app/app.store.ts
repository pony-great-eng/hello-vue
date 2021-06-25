import { postStoreModule, PostStoreState } from '@/post/post.store';
import {createStore} from 'vuex';

export interface RootState{
    appName: string;
    post: PostStoreState;
}
/**
 * 创建Store
 */
const store = createStore({
    state: {
        appName: '宁浩网',
    } as RootState,

    modules: {
        post: postStoreModule,
    }
});

/**
 * 默认导出
 */
export default store;