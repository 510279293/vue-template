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
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
    },
}