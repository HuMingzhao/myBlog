const path = require("path");

module.exports = {
    outputDir: './dist',
    assetsDir: 'assets',
    // productionSourceMap: false,
    // devServer: {
    //     proxy: {
    //         "/api": {
    //             target: "http://smtpman.yaitoo.cn"
    //         }
    //     },
    //     port: 8081
    // },
    configureWebpack: config => {
        Object.assign(config, {
            resolve: {
                alias: {
                    "@": path.resolve(__dirname, "./src"),
                    "@components": path.resolve(__dirname, "./src/components"),
                    "@assets": path.resolve(__dirname, "./src/assets"),
                    "@views": path.resolve(__dirname, "./src/views"),
                    // "@api": path.resolve(__dirname, "./src/api"),
                }
            }
        })
    }
};
