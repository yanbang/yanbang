import storage from 'store'
Date.prototype.myformat = function (format = 'yyyyMMdd') {
  var o = {
    "M+": this.getMonth() + 1, //month
    "d+": this.getDate(), //day
    "h+": this.getHours(), //hour
    "m+": this.getMinutes(), //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
    "S": this.getMilliseconds() //millisecond
  }
  if (/(y+)/.test(format))
    format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(format))
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  return format;
};
function GetDateStr(AddDayCount) { 

   var dd = new Date();

   dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期

   var y = dd.getFullYear(); 

   var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0

   var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0

   return y+""+m+""+d; 

}

 var initDate = GetDateStr(-2)

 if (window.sessionStorage.getItem('selectTime')){
  let y = window.sessionStorage.getItem('selectTime').substring(0,4)
  let m = window.sessionStorage.getItem('selectTime').substring(4,6)
  let d = window.sessionStorage.getItem('selectTime').substring(6)
  initDate = y + '' + m + '' + d
}

const resource = {
  namespaced: true,
  state: {
    searchDate: window.sessionStorage.getItem('selectTime') || initDate,
    gisparams: {
      sceneid: 2,
      gis_sceneid: '1',
      level: 1,
      area_id: '',
      poi_city_id: '',
    }
  },
  mutations: {
    set_searchDate(state, data) {
      
      state.searchDate = data
    }
  },
  actions: {

  }
}

export default resource
