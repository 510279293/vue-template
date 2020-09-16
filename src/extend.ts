import moment from 'moment';
import * as utils from './utils/utils';
import {VueConstructor} from 'vue/types/vue'

export default (Vue: VueConstructor) => {
    Vue.prototype.$utils = {
        ...utils,
        moment,
    };
    Vue.prototype.$EventBus = new Vue();
};
