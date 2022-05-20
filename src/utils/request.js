import axios from 'axios'
import {Message} from 'element-ui';

//后置过滤器
axios.interceptors.response.use(success => {
    return success.data;
}, error => {
    if (error.response.status === 500 || error.response.status === 404) {
        Message.error({message: '服务器被吃了( ╯□╰ )'})
    } else if (error.response.status === 401) {
        Message.error({message: '权限不足，请联系管理员'})
    } else {
        if (error.response.data.msg) {
            Message.error({message: error.response.data.msg})
        } else {
            Message.error({message: '未知错误!'})
        }
    }
    return error;
})

//请求前缀
let base = 'http://localhost:9000';
//基本请求方法的封装
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params
    })
}
export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params
    })
}
export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        params: params
    })
}
export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        params: params
    })
}