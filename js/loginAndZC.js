var layer;

layui.use("layer",function(){
	layer = layui.layer;
});


/*手机登录*/
$(".btn-logins").click(function(){
	layer.open({
			type: 1,
			content: $("#phone_login"),
			resize: false,
			title: ["手机快捷登录","font-size:18px;font-weight:800"],
			area:["390px","450px"],
			move: false
		});
})
/*注册*/
$(".btn-registers").click(function(){
	layer.open({
			type: 1,
			content: $("#register"),
			resize: false,
			title: ["注册","font-size:18px;font-weight:800"],
			area:["380px","450px"],
			move: false
		});
})

