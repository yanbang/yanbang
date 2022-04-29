import request from '@/utils/request'

const userApi = {
  // 后端登录需放开
  // Login: '/login',
  Login: '/auth/login',
  Logout: '/auth/logout',
  ForgePassword: '/auth/forge-password',
  Register: '/auth/register',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  // UserInfo: '/user/info',
  UserInfo: '/auth/info',
  UserMenu: '/user/nav',
  changePwd: '/auth/changePwd',
  getUrlConfig: '/auth/getUrlConfig',
  checkAuth: '/auth/checkAuth',
  getOaconfig: '/uac/config'
}

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */

export function getOaconfig (parameter) {
  return request({
    url: userApi.getOaconfig,
    method: 'get',
    data: parameter
  })
}
export function login (parameter) {
  return request({
    url: userApi.Login,
    method: 'post',
    data: parameter
  })
}

export function getSmsCaptcha (parameter) {
  return request({
    url: userApi.SendSms,
    method: 'post',
    data: parameter
  })
}
 export function getInfo () {
  return request({
    url: userApi.UserInfo,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
// 后台获取权限放开
// export function getInfo (parameter) {
//   return request({
//     url: userApi.UserInfo,
//     method: 'post',
//     data: parameter
//   })
// } 

export function getCurrentUserNav () {
  return request({
    url: userApi.UserMenu,
    method: 'get'
  })
}

export function logout () {
  return request({
    url: userApi.Logout,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}


export function changePwd (parameter) {
  return request({
    url: userApi.changePwd,
    method: 'post',
    data: parameter
  })
}

export function getUrlConfig (parameter) {
  return request({
    url: userApi.getUrlConfig,
    method: 'post',
    data: parameter
  })
}


export function checkAuth (parameter) {
  return request({
    url: userApi.checkAuth,
    method: 'post',
    data: parameter
  })
}
/**
 * get user 2step code open?
 * @param parameter {*}
 */
export function get2step (parameter) {
  return request({
    url: userApi.twoStepCode,
    method: 'post',
    data: parameter
  })
}



