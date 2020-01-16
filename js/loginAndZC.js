var layer;

layui.use("form","layer",function(){
	layer = layui.layer;	
});


/*登录*/
$(".btn-login").click(function(){
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
$(".btn-register").click(function(){
	layer.open({
			type: 1,
			content: $("#register"),
			resize: false,
			title: "注册",
			area:["380px","400px"],
			move: false,
		});
})
