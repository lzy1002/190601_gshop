/*
* ajax请求模块
* */

import axios from "axios";

//导出一个 专门用来处理ajax请求的函数
export default function ajax(url = '', data = {}, type = 'GET') {
  //把promise对象返回
  return new Promise(function (resolve, reject) {
    //创建一个名叫promise的变量
    let promise;
    if (type === 'GET') {
      // 准备 url query 参数数据
      let dataStr = ''; //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      });
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr
      }
      // 发送 get 请求
      //使用axios获取的数据放在promise这个变量里
      promise = axios.get(url)
    } else {
      // 发送 post 请求
      //使用axios获取的数据放在promise这个变量里
      promise = axios.post(url, data)
    }
    //使用axios获取到的数据 会被放在response中
    promise.then(function (response) {
      //获取数据成功了 将获取到的数据挂载到成功的回调函数中
      resolve(response.data);
    }).catch(function (error) {
      //获取失败了 将失败信息挂载到 失败的回调函数中
      reject(error);
    })
  })

}
