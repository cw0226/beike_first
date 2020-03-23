// 弹出组件
var layer;
layui.use("layer", function () {
    layer = layui.layer;
});

// 加载层
var loading;

function ajaxForm(formId, url, success) {
    $("#" + formId).ajaxForm({
        url: url,
        type: "post",
        dataType: "json",
        headers:{"token":localStorage.token},
        success: success,
        error: function (xhr) {
            layer.msg("请求失败" + xhr.status);
            console.log("请求失败" + xhr.status);
        },
        beforeSend: function () {
            loading = layer.load();
        },
        complete: function () {
            layer.close(loading);
        }
    });
}

function myAjax(url, success) {
    $.ajax({
        url: url,
        type: "get",
        dataType: "json",
        headers:{"token":localStorage.token},
        success: success,
        error: function (xhr) {
            layer.msg("请求失败" + xhr.status);
            console.log("请求失败" + xhr.status);
        }
    });
}

function myAjaxByPost(url, success) {
    $.ajax({
        url: url,
        type: "post",
        dataType: "json",
        headers:{"token":localStorage.token},
        success: success,
        error: function (xhr) {
            layer.msg("请求失败" + xhr.status);
            console.log("请求失败" + xhr.status);
        }
    });
}

function myAjaxWithData(url, data, success) {
    $.ajax({
        url: url,
        type: "get",
        data: data,
        dataType: "json",
        headers:{"token":localStorage.token},
        success: success,
        error: function (xhr) {
            layer.msg("请求失败" + xhr.status);
            console.log("请求失败" + xhr.status);
        }
    });
}

function myAjaxWithDataByPost(url, data, success) {
    $.ajax({
        url: url,
        type: "post",
        data: data,
        dataType: "json",
        headers:{"token":localStorage.token},
        success: success,
        error: function (xhr) {
            layer.msg("请求失败" + xhr.status);
            console.log("请求失败" + xhr.status);
        }
    });
}

//带参ajax请求
function ajaxRequest(url, type, param, success) {
    $.ajax({
        url: url,
        type: type,
        data: param,
        dataType: "json",
        headers:{"token":localStorage.token},
        success: success,
        error: function (xhr) {
            layer.msg("请求错误：" + xhr.status);
        }
    });
}

// 获取url中的属性值
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}

var userId;

//是否登录
function loding_user(){
    ajaxRequest("http://localhost/beike/view/getUserOfLogin","get",null,
        function (result){
            if(result.code === 100){
                var username;
                if(result.data.userName == null){
                    username = result.data.userPhone;
                    //对手机号进行隐藏
                    var prefix; //前缀
                    var suffix; //后缀
                    prefix = username.slice(0,3);
                    suffix = username.slice(8);
                    username = prefix+"****"+suffix;
                }else{
                    username = result.data.userName;
                }
                $("#createUserId").val(result.data.id);
                //修改html
                $("#welcome").html("<a class='btn-logins' style='margin: 0px' href='/beike_first/user/personal.html?id="+result.data.id+"'><span class='reg'>"+username+"</span></a>&nbsp;&nbsp;/&nbsp;&nbsp;<a class='btn-registers' href='javascript:logout();'><span class='log'>退出</span></a>")
            }else if(result.code === 101){ //发生异常
                result.msg(result.message);
            }
        });
}
//退出
function logout(){
    ajaxRequest("http://localhost/beike/view/logOut","get",null,
        function (result){
            layer.msg(result.message);
            //删除token令牌
            localStorage.removeItem("token");
            //刷新当前页
            location.reload();
        });
}

/**
 * [open 打开弹出层]
 * @param  {[type]}  title [弹出层标题]
 * @param  {[type]}  url   [弹出层地址]
 * @param  {[type]}  w     [宽]
 * @param  {[type]}  h     [高]
 * @param  {Boolean} full  [全屏]
 * @return {[type]}        [description]
 */
function open(title, url, w, h, full) {
    if (title == null || title === '') {
        var title = false;
    }
    if (url == null || url === '') {
        var url = "404.html";
    }
    if (w == null || w === '') {
        var w = ($(window).width() * 0.9);
    }
    if (h == null || h === '') {
        var h = ($(window).height() - 50);
    }
    var index = layer.open({
        type: 2,
        area: [w + 'px', h + 'px'],
        fix: false, //不固定
        maxmin: true,
        shadeClose: true,
        shade: 0.4,
        title: title,
        content: url
    });
    if (full) {
        layer.full(index);
    }
}