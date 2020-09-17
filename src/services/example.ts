import request from '@/utils/request';
//@ts-ignore
import { stringify } from 'qs';

// post
export async function postApi(data: Object) {
    return request({
        url: '/api/postUrl',
        method: 'POST',
        data,
    });
}

// get
export async function getApi(data: Object) {
    return request({
        url: `/api/getUrl?${stringify(data)}`,
        method: 'GET',
        data,
    });
}
