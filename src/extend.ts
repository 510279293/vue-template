// import moment from 'moment';
import * as utils from './utils/utils';
import { createApp } from 'vue';
export default (app: any) => {
    app.config.globalProperties.$utils = {
        ...utils,
    };
    app.config.globalProperties.$EventBus = createApp({});
};