// import { RSAencrypt, RSAdecrypt } from './common'

const setItem = (key, value) => sessionStorage.setItem(key, JSON.stringify(value))
const getItem = key => JSON.parse(sessionStorage.getItem(key))
const removeItem = key => sessionStorage.removeItem(key)
const clear = () => sessionStorage.clear()

const __U__ = 'userDetail'

const setUser = function(value) {
  if (!value) {
    setCookie(__U__, '')
  }
  setCookie(__U__, value)
}

const getUser = function() {
  return !getCookie(__U__) ? {} : getCookie(__U__)
}

const removeUser = function() {
  delCookie(__U__)
}

const isLogin = () => !!getUser().token

// 设置cookie
function setCookie(cName, value, expire) {
  var date = new Date()
  date.setSeconds(date.getSeconds() + expire)
  let str = null
  str = JSON.stringify(value)
  // str = window.btoa(str)
  document.cookie = cName + '=' + str + '; expires=' + date.toGMTString()
}
// 获取cookie
function getCookie(cName) {
  let cookieStr = null
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(cName + '=')
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1
      let cEnd = document.cookie.indexOf(';', cStart)
      if (cEnd === -1) cEnd = document.cookie.length
      cookieStr = document.cookie.substring(cStart, cEnd)
      // cookieStr = window.atob(cookieStr)
      try {
        cookieStr = JSON.parse(cookieStr)
      } catch (error) {
        // console.error(error)
        cookieStr = {}
      }
      return cookieStr

    }
  }
  return null
}

/* 删除cookie */
function delCookie(cName) {
  setCookie(cName, '', -1)
}

export default {
  setItem,
  getItem,
  removeItem,
  clear,
  setUser,
  getUser,
  isLogin,
  removeUser
}
