// import moment from 'moment';
/* eslint-disable no-useless-escape */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

/**
 * 判断 url 是否合法
 * @param {String} path
 */
export const isUrl = (path: string) => reg.test(path);

/**
 * 判断是否浏览器环境
 */
export const isBrowser = () => typeof window !== 'undefined';

function isArray(arg: any) {
    return Array.isArray(arg);
}


export function isPlainObject(arg: any) {
    return arg !== null && toString.call(arg) === '[object Object]';
}

/**
 *
 * @param {*} value
 * @description 数组，判断 length，纯对象判断可枚举 length，默认数字为 0 时为空，暂时没扩展 Symbol，Set，Map
 */
export function isEmpty(value: any) {
    if (isArray(value)) {
        return Boolean(value.length);
    }

    if (isPlainObject(value)) {
        return Object.keys(value).length;
    }

    return Boolean(value);
}

export function isFunction(arg: any) {
    return toString.call(arg) === '[object Function]';
}

// export function format(time = moment(), pattern = 'YYYY-MM-DD') {
//     return time.format(pattern);
// }

export const localStorage = {
    setItem(name: string, data: any) {
        window.localStorage.setItem(name, JSON.stringify(data));
    },
    getItem(name: string) {
        const current = window.localStorage.getItem(name);
        if (current !== void 0 && current !== null) {
            return JSON.parse(current);
        }

        return null;
    },
    clear() {
        window.localStorage.clear();
    },
};

export function findValueInObjectArray(value: any, sources = [], compareProperty = 'id') {
    return sources.find(source => source[compareProperty] === value);
}

// 按需加载
export const _import = (file: any) => () =>
   import('@/' + file + '.vue').then((m) => m.default);