import {createApp} from 'vue';
import App from './app/app.vue';
import appRouter from './app/app.router';
import appStore from './app/app.store';

/**
 * 创建应用
 */
const app = createApp(App);

/**
 * 应用路由
 */
app.use(appRouter);

/**
 * 应用Store
 */
 app.use(appStore);

/**
 * 挂载应用
 */
app.mount('#app');