'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"', //开发环境
    API_HOST: "/api/"
})

module.exports = {
    NODE_ENV: '"production"', //生产环境
    API_HOST: '"http://10.216.103.132:3000"'
}