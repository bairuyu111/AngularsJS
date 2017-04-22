# AngularsJS
AngularJS课程设计功能说明
1、实现的功能：双向数据功能、导航条、数据排序、视图和路由4个效果。
2、网页实现从控制器读取数据，用户评论回复的文本域实现双向数据绑定，用户的昵称，用户发表的文本，粉丝的信息，头像和简介实现功能已实现双向数据绑定。在控制器设置数据信息，在视图中应用数据，实现双向数据绑定。
3、导航条使用bootstrap实现。
<ul class="dropdown-menu" role="menu">
   <li><a href="#">设置栏目</a></li>
   <li><a href="#">更多设置</a></li>
   <li class="divider"></li>
   <li><a href="#">分割线</a></li>
   </ul>			
4、数据排序功能已实现，使用过滤器实现功能。
<div class="col-md-2 column ys4 h text-center" style="padding:0px;margin:0px;" ng-controller="topCtrl">
<h4>我的粉丝</h4>
<ul ng-repeat="fan in fans | orderBy:'id'">
<li><a herf=""><img src="images/a{{fan.id}}.jpg" class="img-circle"></a>
<div>
<div><a href="">{{fan.name}}</a>
</div>{{fan.job}}</div>
</li> 
</ul>
</div>
5、实现“最新动态”“简介”“消息”单页面应用，使用视图和路由。
在view文件夹中：index.html  resume.html news.html
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
