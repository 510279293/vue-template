import Vue from 'vue';
import { HelloWorld } from '@/config/allComponent'

const components = [
    HelloWorld
]
components.forEach(async component => {
    const {name} = await component()
    Vue.component(name, component);
})