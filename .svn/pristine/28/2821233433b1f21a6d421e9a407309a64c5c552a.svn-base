const path = require('path')
const webpack = require('webpack')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const GitRevision = new GitRevisionPlugin()
const buildDate = JSON.stringify(new Date().toLocaleString())
const createThemeColorReplacerPlugin = require('./config/plugin.config')

function resolve(dir) {
    return path.join(__dirname, dir)
}

// check Git
function getGitHash() {
    try {
        return GitRevision.version()
    } catch (e) {}
    return 'unknown'
}

const isProd = process.env.NODE_ENV === 'production'

// vue.config.js
const vueConfig = {
    publicPath: process.env.NODE_ENV === 'production' ? '././' : '/',
    outputDir: 'zjweb_dist',
    configureWebpack: {
        // webpack plugins
        plugins: [
            // Ignore all locale files of moment.js
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new webpack.DefinePlugin({
                APP_VERSION: `"${require('./package.json').version}"`,
                GIT_HASH: JSON.stringify(getGitHash()),
                BUILD_DATE: buildDate
            })
        ],
        // if prod, add externals
        // externals: isProd ? assetsCDN.externals : {}
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('./src'))

        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .oneOf('inline')
            .resourceQuery(/inline/)
            .use('vue-svg-icon-loader')
            .loader('vue-svg-icon-loader')
            .end()
            .end()
            .oneOf('external')
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: 'assets/[name].[hash:8].[ext]'
            })

        // if prod is on
        // assets require on cdn
        // if (isProd) {
        //   config.plugin('html').tap(args => {
        //     args[0].cdn = assetsCDN
        //     return args
        //   })
        // }
    },

    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    // less vars，customize ant design theme

                    // 'primary-color': '#F5222D',
                    // 'link-color': '#F5222D',
                    'border-radius-base': '2px'
                },
                // DO NOT REMOVE THIS LINE
                javascriptEnabled: true
            }
        }
    },

    devServer: {
        // development server port 8000
        port: 8080,
        // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
        // 后端登录需放开
        proxy: {
            '/iopsm': {//需要去联通9楼 连接 M-9
                target: 'http://cupn.unicom.local:8198',//接入大屏
                ws: false,
                changeOrigin: true
            },

            '/api': {//需要连接联通的网 AsiainfoDCN 或开联通VPN
                // target: 'http://134.32.116.239:9001/view/',
                //  target: 'http://134.33.27.15:9001/view/',
                // target: 'http://134.32.116.239:8090/view/',
                target: 'http://132.151.160.60:9527',
                // target: 'http://132.151.160.60:8080',
                //target: 'http://127.0.0.1:9527',
                ws: false,
                changeOrigin: true,
                
               
                onProxyReq: function(proxyReq, req, res) {
                    proxyReq.setHeader('connection', 'keep-alive');
                }
            },
            
        }
        
    },

    // disable source map in production
    productionSourceMap: false,
    lintOnSave: false,
    // babel-loader no-ignore node_modules/*
    transpileDependencies: []
}

//部署需要
if (isProd) {
    vueConfig.publicPath = './'
}

// preview.pro.loacg.com only do not use in your production;
if (process.env.VUE_APP_PREVIEW === 'true') {
    console.log('VUE_APP_PREVIEW', true)
        // add `ThemeColorReplacer` plugin to webpack plugins
    vueConfig.configureWebpack.plugins.push(createThemeColorReplacerPlugin())
}

module.exports = vueConfig