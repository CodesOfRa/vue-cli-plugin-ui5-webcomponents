module.exports = (api, opts) => {
    api.chaiWebpack(config => {
        config
            .module
            .rule("loader")
            .test(/\.(png|jpg|gif)$/)
            .use("file-loader")
            .loader("file-loader")
    })
}
