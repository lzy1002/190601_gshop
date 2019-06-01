/*
* 包含n个接口请求的函数模块
* 函数的返回值 ：promise对象
* */

// export : 导出多个时使用

//引入发送ajax请求的模块
import ajax from "./ajax.js";

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`);
// 2、获取食品分类列表
export const reqFoodTypes = () => ajax(`/index_category`);
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax("/shops", {longitude: longitude, latitude: latitude});
// 4、根据经纬度和关键字搜索商铺列表
export const reqa1 = (keyword, geohash) => ajax({keyword: keyword, geohash: geohash});
// 5、获取一次性验证码
export const reqa2 = () => ajax("/captcha");
// 6、用户名密码登陆
export const reqa3 = (name, pwd, captcha) => ajax("/login_pwd", {name: name, pwd: pwd, captcha: captcha}, "POST");
// 7、发送短信验证码
export const reqa4 = (phone) => ajax("/sendcode", {phone: phone});
// 8、手机号验证码登陆
export const reqa5 = (phone, code) => ajax("/login_sms", {phone: phone, code: code}, "POST");
// 9、根据会话获取用户信息
export const reqa6 = () => ajax("/userinfo");
// 10、用户登出
export const reqa7 = () => ajax("/logout");
/*
* 使用axios发送ajax请求的过程(自己的思路)
* 创建一个 专门用来发送ajax请求的模块
* 创建一个 处理接口请求的函数模块
* 当需要请求数据的时候
* 调用处理接口请求的函数模块中的函数 并传入 发送请求是需要传入的数据
* 函数内部调用 ajax请求模块返回的函数 并把 发送请求是需要传入的数据 传入
* ajax请求模块 内部使用prosime把请求成功的数据挂载到了resolve 这个成功的回调函数中 并且把promise对象返回
* 处理接口请求的函数中 又把调用ajax请求模块的导出的函数 给 返回了
* 所以在调用 处理接口请求的函数的时候 就有一个返回值  返回值是 ajax请求模块内部返回的包含请求到的数据的promise对象
*
* */

