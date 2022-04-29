import axios from 'axios'
import store from 'store'
export default function logService(parameter) {

    let params = {        
        "title":  parameter.title,
         "pcode":  parameter.pcode, //父类id
         "code":   parameter.code, //当前id
         "staffid":  store.get('userInfo').staffId, //当前用户id
        'type':  parameter.type || '2',
    }

    axios.post('/view/log/insertLogInfo ', params, {
            headers: { 'Content-Type': 'application/json;charset=UTF-8', 'token': store.get('userInfo').token, 'staffId': store.get('userInfo').staffId },
            withCredentials: true
        }).then(function(response) {
            let result = response.data
            if (result.rspCode == '0000') {
                console.log('页面访问日志；' + params.title)
            } else {
                console.warn('页面访问日志服务错误')
            }
        })
        .catch(function(error) {
            console.warn('页面访问日志服务错误')
        });
}