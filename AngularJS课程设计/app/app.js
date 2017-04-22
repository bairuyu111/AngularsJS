
var app=angular.module("myapp",['ngRoute']);
function routeConfig($routeProvider){
	$routeProvider
	.when('/index',{
		controller:'IndexController',
		templateUrl:'index.html'
	})
	.when('/resume',{
		controller:'ResumeController',
		templateUrl:'resume.html'
	})
	.when('/news',{
		controller:'NewsController',
		templateUrl:'news.html'
	})
	.otherwise({
		redirectTo:'/index'
	})
}
app.config(routeConfig); 



app.controller("IndexController",function($scope,$location){
	$scope.news = news;
	$scope.addcon ='';
	$scope.add = function(){
		var div = document.createElement("div");
		var h = document.createElement("h4");
		var hr = document.createElement("hr");
		div.innerHTML = $scope.addcon;
		h.innerHTML = "过去多啦不在A梦。";
		h.style.color="blue";
		document.getElementById("con").append(hr);
		document.getElementById("con").append(h);
		document.getElementById("con").append(div);
        $location.path('index');
	}

});

app.controller("ResumeController",function($scope){
	
});

var peoples = [
{
	id:1,
	name:'军中铁',
	content:'『自古英雄多好色,未必好色尽英雄,我虽并非英雄汉,惟有好色似英雄』引用张学良先生的诗阐述我对“色”字的理解？！同事们都说我是个工作狂,但是玩的时候又特疯狂的那种。喜好旅游的我走遍了大半个中国,喜欢了解各地民族文化的同时、更喜欢吃各地的风味小吃。喜欢交朋友,以同朋友聊天换取生活的心得为乐。我更有一个直率的嘴巴,容易得罪人,属于标准的“刀子口,善良心”的男人。说完我就忘了......受过我刺激及伤害的人请不要记在心上,同我交上心后,你会感觉我还是个不错的或者优秀的朋友,一个值得你们此生交往的人'
},
{
	id:2,
	name:'薰衣草',
	content:'四季万物皆有各自的运行路径；个人、家庭、组织的兴衰路径是什么,一直是现代人类着迷的课题，可《易经》早以系统回答了这个问题。正在纵横中文网连载的通俗版“易经与治世”深刻揭示其奥妙。面对新一轮腐败生死轮回我们的出路在那里？有民主概念输入那么简单吗？阅读改变思维并决定命运!'
},
{
	id:3,
	name:'大风刮过',
	content:'MongoDB是由C++语言所编写的一种面向文档的非关系型数据库（是一种NoSql数据库实现），也是介于关系型数据库和非关系型数据库之间的数据存储产品，其提供了高性能、高可用、高可拓展及基于分布式存储的数据库，是非关系型数据库中功能最丰富，最类似关系型数据库的一种集合、文档格式的数据库。'
},
]
app.controller("NewsController",function($scope){
	$scope.peoples = peoples;
});

app.controller("topCtrl",function($scope){
	$scope.fans = [
	{
		id:1,
		name:'李晓明',
		job:'艺术总监，电影编辑'
	},
	{
		id:2,
		name:'小王',
		job:'设计师，博客'
	},
	{
		id:3,
		name:'赵大城',
		job:'音乐家，运动员'
	},
	{
		id:4,
		name:'张琳',
		job:'作家，杂志编辑'
	},
	]
})

var news = {
	id:1,
	name:'曾经蜡笔没有小新',
	content:'    这世界上的很多事，有时候和我们眼睛看到的不一样。很多时候要我们慢慢地体会才会知道。我们不能急着看结果，就像种下一棵小花，你要耐心地等它破土发芽，慢慢长大，才能看到它开出美丽的花。尘世间的事也一样，要在时间里发酵，岁月里沉香，人生那些百思不得其解的事情，到后来时间会一一给你答案。岁月有时候特别用心良苦，它时常会给你很多磨难，其实它是想让你变得更好。'
}

