import {request} from '@/plugins';
import { stringify } from 'qs';

// post
export async function postApi(data: any) {
    return request({
        url: '/api/postUrl',
        method: 'POST',
        data,
    });
}

// get
export async function getApi(data: any) {
    return request({
        url: `/api/getUrl?${stringify(data)}`,
        method: 'GET',
        data,
    });
}
