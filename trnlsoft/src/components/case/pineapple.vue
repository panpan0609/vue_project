<template>
  <div class="vegetarian-box show_outbox">
    <div class="box">
    	<h1 class="title">美食APP</h1>
    	<p class="date">日期:2017-07-01/人气:3809/来源:boluoyou</p>
    </div>
		<p class="subtitle">菠萝油-旅游一站式解决 功能包含旅游航班查询，行程安排，热门主题旅游选择，快捷签证，团体旅游，团体旅游自定义路线 让你旅游无忧，无忧旅游</p>
		<img src="/static/images/case/bo-app.png" class="banner"/>
  </div>
</template>

<script>
export default {
  name: 'Pineapple',
  data(){
    return{}
  }
}
</script>

<style lang="less" scoped> 
	.vegetarian-box{
		.box{
			padding: 0.4rem 0 0.3rem 0;
			border-bottom: 1px solid #eee;
			.title{
				font-size: 0.24rem;
				padding: 0.1rem 0;
			}
			.date{
				font-size: 0.18rem;
				padding: 0.1rem 0;
				color: #999;
			}
			@media only screen and (max-width: 767px){
				.title{
					font-size: 0.20rem;
					padding: 0.05rem 0;
				}
				.date{
					font-size: 0.14rem;
					padding: 0.05rem 0;
					color: #999;
				}
			}
		}
		@media only screen and (max-width: 767px){
			.box{
				padding: 0.1rem 0;
			}
		}
		.subtitle{
			font-size: 0.16rem;
			line-height: 0.2rem;
			color: #999;
			padding: 0.4rem 0 0.2rem 0;
		}
		@media only screen and (max-width: 767px){
			.subtitle{
				font-size: 0.14rem;
				line-height: 0.25rem;
				padding: 0.2rem 0 0.1rem 0;
			}
		}
		.banner{
			width: 100%;
		}
	}
</style>