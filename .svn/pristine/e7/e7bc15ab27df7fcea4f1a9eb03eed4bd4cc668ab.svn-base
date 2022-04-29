import request from '@/utils/request';


const api = {

    servicejkdDpzb: '/ZhyJkdCon/servicejkdDpzb', // 网络能力大屏指标
    servicejkdKjzyXq: '/ZhyJkdCon/servicejkdKjzyXq', // 空间资源详情
    servicejkdWxwXq: '/ZhyJkdCon/servicejkdWxwXq', // 无线网详情
    servicejkdCswXq: '/ZhyJkdCon/servicejkdCswXq', // 传输网详情

    servicejkdGxwXq: '/ZhyJkdCon/servicejkdGxwXq', // 管线网详情
    servicejkdYjtxXq: '/ZhyJkdCon/servicejkdYjtxXq', // 应急通讯详情
    servicejkdSjwXq: '/ZhyJkdCon/servicejkdSjwXq', // 数据网指标
    servicejkdYzy: '/ZhyJkdCon/servicejkdYzy', // 云资源信息查询接口
    servicejkdTc: '/ZhyJkdCon/servicejkdTc', // 云资源信息查询接口
    // servicejkdsTc:'/ZhyJkdCon/servicejkdsTc',//地市智慧眼
    servicejkdsTc: 'ZhyJkdCon/servicejkdTc2', //地市智慧眼
    servicejkdWgyfbqr: 'ZhyJkdCon/servicejkdWgyfbqr', //网格营服包区人数量

}

var serviceApi = {}
Object.keys(api).forEach(key => {
    serviceApi[key] = function(parameter) {
        return request({
            url: api[key],
            method: 'post',
            data: parameter
        })
    }
})

export default serviceApi