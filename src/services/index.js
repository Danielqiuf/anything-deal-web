import axios from 'axios'
import { ErrorCode } from '@/constant/http'
import utils from '@/utils'

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 20000,
    responseType: 'json',
})

/** 全局请求的拦截 */
axiosInstance.interceptors.request.use(
    (config) => processRequest(config),
    (error) => Promise.reject(error)
)

/** 全局响应的拦截 */
axiosInstance.interceptors.response.use(
    (response) => {
        return processResponse(response)
    },
    (error) => {
        return processResponseError(error)
    }
)

const processRequest = (config) => {
    if (process.env.VUE_APP_ENV === 'develop') {
        reportHttpLog(config, 1)
    }
    return config
}

// 请求返回成功后，对返回数据进行处理
const processResponse = (response) => {
    if (process.env.VUE_APP_ENV === 'develop') {
        reportHttpLog(response, 2)
    }
    if (response && response.config && response.data) {
        // 统一处理错误码
        if (response.data.code !== ErrorCode.SUCCESS) {
            // Toast.fail(ERROR_MESSAGE[response.data.code] || '接口请求失败');
            // token 失效
            if (response.data.code === ErrorCode.INVALID_TOKEN) {
            }
        }
    }

    return response
}

// 请求返回错误后，对错误进行处理
const processResponseError = (error) => {
    if (error && error.response) {
        //@todo
    } else {
        if (error) {
            // 请求超时
            // Toast.fail('接口请求超时，请检查接口是否可用');
            Promise.reject(error)
        }
    }
}

const reportHttpLog = (config, type) => {
    console.log(`${type === 1 ? 'request' : 'response'} url ---> ${config.url}, data=${JSON.stringify(config)}`)
}

function request(url, data, options = {}) {
    if (process.env.MOCK === '1') {
        // MOCK数据走这里
        return
    }

    const config = {
        url,
        method: 'POST',
        data,
        ...options,
    }

    return axiosInstance.request(config)
}

export default request

export const throttleRequest = utils.throttlePromise((url, ...args) => {
    const httpParams = { ...args[0] }
    return request(url, httpParams)
}, 1000)
