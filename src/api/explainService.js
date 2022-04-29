import request from '@/utils/request'
const api = {
    service_explain: '/ZhyFuCon/serviceDapininfo',
}

var serviceApi = {
    service_explain(parameter) {
        return request({
            url: api.service_explain,
            method: 'post',
            data: parameter
        })
    },

}

export default serviceApi