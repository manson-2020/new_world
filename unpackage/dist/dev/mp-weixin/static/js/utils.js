global.REQUEST_URL = "http://xj.shdong.cn";

global.apiRequest = (url, params = {}) => {
    params.url = REQUEST_URL + url;
    params.method = params.method || "POST";
    params.data = params.data || {};
    params.data.token = uni.getStorageSync("accountInfo") ? uni.getStorageSync("accountInfo").token : "";
    params.fail = res => uni.showToast({
        title: "服务器异常",
        icon: "none",
        complete: _ => console.log(res)
    });
    uni.request({ ...params });
};

global.showToast = (code, params) => {
    let { title, msg, mask, duration, success, fail, complete } = params;
    uni.showToast({
        icon: code === 200 ? "success" : "none",
        title: code === 200 ? title : msg,
        success: _ => code === 200 && success(),
        mask, duration, fail, complete
    })
};

global.isPhoneNumber = str =>
    /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(str);

global.isEmail = str =>
    /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);

global.isIdCard = str =>
    /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);


