// with polyfills
import "@/assets/icons/iconfont.css"
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import dataV from '@jiaminghi/data-view'
import 'core-js/stable'
import Element from 'element-ui'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import Carousel3d from 'vue-carousel-3d'
import themePluginConfig from '../config/themePluginConfig'
import App from './App.vue'
import './assets/styles/element-variables.scss'
// global css
import './assets/styles/index.scss'
import watermark from './config/bigscreen/watermark'
// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
// 后端登录需注释
// import './mock'
import bootstrap from './core/bootstrap'
import './core/lazy_use' // use lazy load components
import './global.less' // global style
import i18n from './locales'
import Mixmin from './Mixin'
import router from './router'
import store from './store/'
// import './permission' // permission control
import './utils/filter' // global filter
import { VueAxios } from './utils/request'


Vue.use(Carousel3d);
Vue.use(dataV)
Vue.prototype.$watermark = watermark
Vue.filter('formatVal', function (val) {
    val || val === 0 || val === '0' ? val : val = '-';
    return val;
})
Vue.config.productionTip = false
// 表格自动滚动
Vue.prototype.$eltable_scrollAuto = function (id) {
    window[id + '_timer'] && clearTimeout(window[id + '_timer'])
    var parentDom = $('#' + id);
    var elem = parentDom.find('.el-table__body-wrapper');
    elem.scrollTop(0);
    var vheight = elem.height()
    var bheight = elem.find('.el-table__body').height();
    var hoverFlag = false;
    elem.hover(function () {
        hoverFlag = true;
    }, function () {
        hoverFlag = false;
    });

    if (bheight >= vheight + 62) {
        var isend = false;

        function scrollAuto() {
            if (!hoverFlag) {
                if (isend) {
                    elem.scrollTop(0)
                    isend = false;
                } else {
                    elem.scrollTop(elem.scrollTop() + 1.2);

                };
                if (elem.scrollTop() + elem.innerHeight() >= elem[0].scrollHeight) {
                    isend = true
                    elem.scrollTop(elem[0].scrollHeight)
                }
            };
            window[id + '_timer'] = window.setTimeout(function () {
                scrollAuto()
            }, 150)
        };
        scrollAuto()
    };
};


Vue.mixin(Mixmin)
// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
Vue.use(Element)
// use pro-layout components
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
Vue.component('page-header-wrapper', PageHeaderWrapper)

window.umi_plugin_ant_themeVar = themePluginConfig.theme

window.gis_iframeSrc = 'http://134.32.115.253:18080';
if (window.location.host == 'localhost:8000') {
    window.gis_iframeSrc = ''
}
Vue.prototype.$EventBus = new Vue()
//首页登录设置 
// import session from '@/utils/session'
// router.beforeEach((to, from, next) => {
//     if (to.path == '/') {
//         session.removeUser()
//         store.state.user.userLogin = {}
//         next({ path: '/', replace: true })
//     }
//     if (!session.isLogin() && to.path !== '/') {
//         session.removeUser()
//         store.state.user.userLogin = {}
//         next({ path: '/', replace: true })
//     }
// })

new Vue({
    router,
    store,
    i18n,
    // init localstorage, vuex
    created: bootstrap,
    render: h => h(App)
}).$mount('#app')