import axios from "axios";

//禁止使用
axios.defaults.withCredentials = true;
axios.interceptors.request.use(
  function (config) {    
    config.timeout = 30000;    
    return config;
  },
  function (error) {    
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err && err.response) {
      console.log(err);
      switch (err.response.status) {
        case 400:
          err.message = "错误请求";
          break;
        case 401:
          
          break;
        case 403:
          err.message = "拒绝访问";
          break;
        case 404:
          err.message = "请求错误,未找到该资源";
          break;
        case 405:
          err.message = "请求方法未允许";
          break;
        case 408:
          err.message = "请求超时";
          break;
        case 500:
          err.message = "服务器端出错";
          break;
        case 501:
          err.message = "网络未实现";
          break;
        case 502:
          err.message = "网络错误";
          break;
        case 503:
          err.message = "服务不可用";
          break;
        case 504:
          err.message = "网络超时";
          break;
        case 505:
          err.message = "http版本不支持该请求";
          break;
        default:
          err.message = `连接错误${err.response.status}`;
      }
      if (err.response.status != 401) {
        alert(err.message);
      }
    } else if (err && err.code) {
      switch (err.code) {
        case "ECONNABORTED":
          alert("服务异常请稍候重试");
          break;
      }
    }
    return Promise.resolve(err.response);
  }
);

export default axios;
