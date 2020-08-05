module.exports = {
    lintOnSave: true,
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'assets',
    devServer: {
        // proxy: {

        // }
    },
    configureWebpack: {

    },
    chainWebpack: config => {
        config.module
              .rule('eslint')
              .use('eslint-loader')
              .loader('eslint-loader')
              .tap(options => {
                 options.fix = true
                 return options
              })
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
    },
}