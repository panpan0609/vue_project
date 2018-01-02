<template>
  <div class="vegetarian-box show_outbox">
    <div class="box">
    	<h1 class="title">美食APP</h1>
    	<p class="date">日期:2017-07-01/人气:3809/来源:未知</p>
    </div>
		<p class="subtitle">流量无忧，帮你节省流量、通过任务领取大量流量流量无忧，帮你节省流量、微信端更方便迅速解决流量问题，让你再不用担心流量问题，丰富活动让你赚钱流量。</p>
		<img src="/static/images/case/liu-app-1.jpg" class="banner"/>
		<img src="/static/images/case/liu-app-2.jpg" class="banner"/>
		<img src="/static/images/case/liu-app-3.jpg" class="banner"/>
  </div>
</template>

<script>
export default {
  name: 'Flow',
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
