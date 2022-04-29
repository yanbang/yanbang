import router from './router'
import store from './store'
import storage from 'store'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style
import notification from 'ant-design-vue/es/notification'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { i18nRender } from '@/locales'
import logService from './pagelog'
var watermark = require('@/utils/watermark');
NProgress.configure({ showSpinner: false }) // NProgress Configuration

const allowList = ['login', 'register', 'registerResult', 'recoverpass', 'authPage'] // no redirect allowList
const loginRoutePath = '/user/login'



router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(i18nRender(to.meta.title)))
        /* has token */
    if (to.name != 'authPage' && storage.get(ACCESS_TOKEN) && storage.get('userInfo')) {
        // 添加水印
        if (storage.get('userInfo').staffId) {
            watermark.load({ watermark_txt: storage.get('userInfo').staffId, watermark_angle: 30, watermark_color: '#fff', watermark_fontsize: '30px', watermark_alpha: 0.1, watermark_width: 300, watermark_height: 160, "watermark_y": 50 })
        };
        store.commit('set_userLevel', storage.get('userInfo').levelAreaLevel)
        if (to.path === loginRoutePath) {
            next()
            NProgress.done()
        } else {
            // check login user.roles is null
            if (store.getters.roles.length === 0) {
                // request login userInfo
                console.log(store.getters.userInfo)
                    // const staffId = store.getters.userInfo.user.staffId
                store
                    .dispatch('GetInfo')
                    // 后台获取权限放开
                    // .dispatch('GetInfo', { staffId })
                    .then(res => {
                        if (to.meta && to.meta.code && !to.meta.notj) {

                            var logparams = {
                                "title": to.meta.title,
                                 "pcode": to.meta.parentCode, //父类id
                                 "code": to.meta.code, //当前id
                                'type': '1',
                            }
                            logService(logparams)
                        }
                        const roles = res.result && res.result.role
                            // generate dynamic router
                        const redirect = decodeURIComponent(from.query.redirect || to.path)
                        if (to.path === redirect) {
                            // set the replace: true so the navigation will not leave a history record
                            next({...to, replace: true })
                        } else {
                            // 跳转到目的路由
                            next({ path: redirect })
                        }
                        // 动态路由不需要。。。。
                        // store.dispatch('GenerateRoutes', { roles }).then(() => {
                        //   // 根据roles权限生成可访问的路由表
                        //   // 动态添加可访问路由表
                        //   router.addRoutes(store.getters.addRouters)
                        //   // 请求带有 redirect 重定向时，登录自动重定向到该地址
                        //   const redirect = decodeURIComponent(from.query.redirect || to.path)
                        //   if (to.path === redirect) {
                        //     // set the replace: true so the navigation will not leave a history record
                        //     next({ ...to, replace: true })
                        //   } else {
                        //     // 跳转到目的路由
                        //     next({ path: redirect })
                        //   }
                        // })
                    })
                    .catch(() => {
                        notification.error({
                                message: '错误',
                                description: '请求用户信息失败，请重试'
                            })
                            // 失败时，获取用户信息失败时，调用登出，来清空历史保留信息
                        store.dispatch('Logout').then(() => {
                            next({ path: loginRoutePath, query: { redirect: to.fullPath } })
                        })
                    })
            } else {

                if (to.meta && to.meta.code && !to.meta.notj) {
                    var logparams = {
                        "title": to.meta.title,
                         "pcode": to.meta.parentCode, //父类id
                         "code": to.meta.code, //当前id
                        'type': '1',
                    }
                    logService(logparams)
                }
                next()
            }
        }
    } else {

        if (allowList.includes(to.name) || to.query.pageiframe) {
            // 在免登录名单，直接进入
            next()
        } else {
            next({ path: loginRoutePath, query: { redirect: to.fullPath } })
            NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
        }
    }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})