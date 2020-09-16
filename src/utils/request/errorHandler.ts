import {RequestOptions, codeMessage} from './requestInterface'

export function requestError(error: any = {}, requestOptions: RequestOptions) {
  const status = error.status
  if(status === 401) {

  } else if (status === 403) {

  } else if (status >= 404 && status < 422) {
      console.log(`请求接口不存在`)
  }
  const {disableCommonSuccessHandler, errorHandler} = requestOptions
  if(!disableCommonSuccessHandler) {
      const errortext = codeMessage[error.status] || error.statusText;
  }
  if (errorHandler) {
      errorHandler(error, requestOptions);
  }
}

export function codeError(source: any = {}, requestOptions: RequestOptions) {
    const {code, msg} = source
    const {codeErrorTipMsgMap, disableCommonErrorHandler} = requestOptions
    if (disableCommonErrorHandler) {
        return source
    }
    const errorTipMap: any = {...codeErrorTipMsgMap}
    const errorMsg: string = errorTipMap[code] || msg

    return source
}