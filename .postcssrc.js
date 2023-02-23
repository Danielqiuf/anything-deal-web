module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'postcss-aspect-ratio-mini': {},
        autoprefixer: {},
        'postcss-px-to-viewport': {
            viewportWidth: 750,
            unitPrecision: 6,
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            unitToConvert: 'px',
            propList: ['*'],
            mediaQuery: false,
            minPixelValue: 1,
            exclude: [/node_modules/],
            replace: true,
        },
    },
}
