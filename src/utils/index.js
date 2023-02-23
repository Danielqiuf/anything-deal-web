export default {
    throttlePromise(handler, wait) {
        let apiMap = new Map([])
        return function (url, ...args) {
            let nowTime = new Date().getTime()
            // eslint-disable-next-line prefer-rest-params
            !apiMap.get(url) && apiMap.set(url, 0)
            if (nowTime - apiMap.get(url) > wait) {
                apiMap.set(url, nowTime)
                // eslint-disable-next-line prefer-rest-params
                return handler.apply(this, [url, ...args])
            }
            console.log('-----promise 拦截请求')
            // return Promise.reject(null)
            return {
                catch: () => ({
                    data: null,
                }),
            }
        }
    },
    px2rem(px) {
        if (/%/gi.test(px)) {
            return px
        } else {
            return parseFloat(px) / 75 + 'rem'
        }
    },
}
