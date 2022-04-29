// eslint-disable-next-line
// import { UserLayout } from '@/layouts'
const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view'),
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'zhuye',
    component: () => import('@/views/jindu/menhu/jindu1'),
  },
  {
    path: '/jindu2',
    name: 'jindu2',
    component: () => import('@/views/jindu/menhu/jindu2'),
  },

  // {
  //   path: '/menhu',
  //   name: 'menhu',
  //   component: () => import('@/views/jindu/menhu/menhu'),
  // },


  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
  },
]
