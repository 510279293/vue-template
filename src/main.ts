import { createApp } from 'vue';
import App from './App.vue'
import router from './router';
import store from './store'

import {Antd} from './plugins';
import useGlobalComponent from './registerGlobalComponent';
import extend from './extend';

const VueApp = createApp(App)
useGlobalComponent(VueApp)
extend(VueApp)
VueApp
.use(Antd)
.use(router)
.use(store)
.mount('#app')
