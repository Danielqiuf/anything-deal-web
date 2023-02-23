const prdPlugins = []
if (process.env.NODE_ENV === 'production') {
    prdPlugins.push('transform-remove-console')
}
module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins: ['@babel/plugin-syntax-dynamic-import', ...prdPlugins],
}
