import request from './request'

const api = {
    login: async (username, password) => {return request({url: '/login', method: 'post', data: {username, password}})},// 登陆
    isLogin: async (token) => {return request({url: '/isLogin', method: 'post', data: {token: token}})},// 检验是否登陆，同时会返回用户信息
    exit: async (token) => {return request({url: '/exit', method: 'post', data: {token: token}})},// 退出登陆
    add: async (data, token) => {return request({url: '/add?t='+token, method: 'post', data: data})},// 上传
    remove: async (delArr, token) => {return request({url: '/remove', method: 'post', data: { delArr: delArr, token: token}})},// 发送一个编号数组，删除对应数据
    getTable: async (data) => {return request({url: '/export_table', method: 'post', data: data})},// 导出数据到execl表
    getList: async (cod) => {return request({url: '/getList', method: 'post', data: cod})},// 获取数据
    getSum: async () => {return request({url: '/getSum', method: 'post'})},// 获取总数和今日数量
    searchList: async (cod) => {return request({url: '/searchList', method: 'get', params: cod})},// 通过搜索框获取数据
    getOne: async (number) => {return request({url: '/getOne', method: 'get', params: {number: number}})},// 通过编码获取单条数据
};
export default api;
