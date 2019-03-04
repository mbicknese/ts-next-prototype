const path = require('path')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
    webpack (config) {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                modules: [
                    ...config.resolve.modules,
                    path.resolve('./')
                ]
            }
        }
    }
})
