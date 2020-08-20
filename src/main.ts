import Vue, { createApp } from 'vue';
import App from './App.vue'
import router from './router';
import store from './store'

import './plugins';
import './registerGlobalComponent';

import extend from './extend';

extend(Vue);
// createApp(App).use(router).use(store).mount('#app')
