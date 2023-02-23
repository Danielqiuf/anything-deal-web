import { createStore } from 'vuex'

const moduleFiles = require.context('./modules', true, /\.js$/)

const modules = moduleFiles.keys().reduce((m, path) => {
    const name = path.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = moduleFiles(path)
    m[name] = value.default
    return m
}, Object.create(null))

export default createStore({
    modules: {
        ...modules,
    },
})
