const { defineConfig } = require('@vue/cli-service')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')

module.exports = defineConfig({
    transpileDependencies: true,
    productionSourceMap: false,
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/assets/sass/_mixins.scss";`,
            },
            postcss: {
                postcssOptions: {
                    plugins: [
                        require('postcss-pxtorem')({
                            rootValue({ file }) {
                                return file.indexOf('vant') !== -1 ? 37.5 : 75
                            },
                            unitPrecision: 2,
                            propList: ['*'],
                        }),
                    ],
                },
            },
        },
    },
    configureWebpack: {
        module: {
            /** 别把这2个库当作ES模块解析了，它们可能时AMD/CommentJS规范的版本？ */
            noParse: /^(lodash|moment)$/,
        },
        plugins: [
            ComponentsPlugin({
                resolvers: [VantResolver()],
            }),
        ],
    },
    chainWebpack(config) {
        if (process.env.NODE_ENV === 'production') {
            config.entry('main').add('babel-polyfill')
            config.optimization.minimize(true)
            config.optimization.splitChunks({
                chunks: 'all',
                cacheGroups: {},
            })
            config.optimization.minimizer('terser').tap((args) => {
                Object.assign(args[0].terserOptions.compress, {
                    pure_funcs: ['console.log'],
                })
                return args
            })
            config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)
            /** 开启生产环境gzip压缩 */
            config.plugin('CompressionWebpackPlugin').use(CompressionWebpackPlugin, [
                {
                    filename: '[path][base].gz',
                    algorithm: 'gzip',
                    test: new RegExp('\\.(js|css)$'),
                    threshold: 10240,
                    minRatio: 0.8,
                    deleteOriginalAssets: false,
                },
            ])
        }
        /** 就加个编译时间插件看看 */
        config.plugin('speed').use(SpeedMeasureWebpackPlugin)
        if (process.env.NODE_ENV === 'production') {
        }
    },
})
