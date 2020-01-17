var layer;

layui.use("form","layer",function(){
	layer = layui.layer;	
});


/*登录*/
$(".btn-logins").click(function(){
	layer.open({
			type: 1,
			content: $("#login"),
			resize: false,
			title: "登录",
			area:["380px","400px"],
			move: false
		});
})
/*注册*/
$(".btn-registers").click(function(){
	layer.open({
			type: 1,
			content: $("#register"),
			resize: false,
			title: "注册",
			area:["380px","400px"],
			move: false,
		});
})
