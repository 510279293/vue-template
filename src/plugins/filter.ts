import Vue from 'vue';
import * as filters from '../filters';

Object.keys(filters).forEach((key: string) => {
    //@ts-ignore
    Vue.filter(key, filters[key]);
})