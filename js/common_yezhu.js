// 弹出组件
var layer;
layui.use("layer", function () {
    layer = layui.layer;
});

// 加载层
var loading;
function ajaxForm(formId, url, success){
    $("#"+formId).ajaxForm({
        url: url,
        type: "post",
        dataType: "json",
        xhrFields: {withCredentials: true}, //默认情况下，标准的跨域请求是不会发送cookie的
        success: success,
        error: function (xhr) {
            layer.msg("请求失败"+xhr.status);
            console.log("请求失败"+xhr.status);
        },
        beforeSend: function () {
            loading = layer.load();
        },
        complete: function () {
            layer.close(loading);
        }
    });
};

function ajaxRequest(url, success) {
    $.ajax({
        url: url,
        type: "get",
        dataType: "json",
        xhrFields: {withCredentials: true}, //默认情况下，标准的跨域请求是不会发送cookie的
        success: success,
        error: function (xhr) {
            layer.msg("请求失败"+xhr.status);
            console.log("请求失败"+xhr.status);
        }
    });
};

function ajaxRequestByPost(url, success) {
    $.ajax({
        url: url,
        type: "post",
        dataType: "json",
        xhrFields: {withCredentials: true}, //默认情况下，标准的跨域请求是不会发送cookie的
        success: success,
        error: function (xhr) {
            layer.msg("请求失败"+xhr.status);
            console.log("请求失败"+xhr.status);
        }
    });
};

function ajaxWithData(url, data, success) {
    $.ajax({
        url: url,
        type: "get",
        data: data,
        dataType: "json",
        xhrFields: {withCredentials: true}, //默认情况下，标准的跨域请求是不会发送cookie的
        success: success,
        error: function (xhr) {
            layer.msg("请求失败"+xhr.status);
            console.log("请求失败"+xhr.status);
        }
    });
};

function ajaxWithDataByPost(url, data, success) {
    $.ajax({
        url: url,
        type: "post",
        data: data,
        dataType: "json",
        xhrFields: {withCredentials: true}, //默认情况下，标准的跨域请求是不会发送cookie的
        success: success,
        error: function (xhr) {
            layer.msg("请求失败"+xhr.status);
            console.log("请求失败"+xhr.status);
        }
    });
};

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
};