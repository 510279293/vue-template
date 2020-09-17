import {codeError} from './errorHandler'
import { message } from 'ant-design-vue'
export default async function (source, requestOptions) {
    const {errorHandler, successTipMsg, successHandler, disableCommonSuccessHandler} = requestOptions
    if (source.code !== 200) { // 后端代码错误不通过
       if (errorHandler) {
           return errorHandler(source, requestOptions)
       }
       return codeError(source, requestOptions)
    }

    if (requestOptions.method !== 'GET' && !disableCommonSuccessHandler) {
        message.success(successTipMsg || '操作成功')
    }

    if (successHandler) {
        return successHandler(source, requestOptions)
    }
    return source
}