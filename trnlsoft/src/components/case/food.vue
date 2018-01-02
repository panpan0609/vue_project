<template>
  <div class="vegetarian-box show_outbox">
    <div class="box">
    	<h1 class="title">美食APP</h1>
    	<p class="date">日期:2017-07-01/人气:3809/来源:MLXG</p>
    </div>
		<p class="subtitle">设计来源于一个火锅跟香味，它能让客户能上传自己的美食，还能在里面寻找自己喜欢的美食视频，还能进行购物。很好用的以一个app。</p>
		<img src="/static/images/case/mei-app-1.jpg" class="banner"/>
		<img src="/static/images/case/mei-app-2.jpg" class="banner"/>
		<img src="/static/images/case/mei-app-3.jpg" class="banner"/>
		<img src="/static/images/case/mei-app-4.jpg" class="banner"/>
		<img src="/static/images/case/mei-app-5.jpg" class="banner"/>
		<img src="/static/images/case/mei-app-6.jpg" class="banner"/>
		<img src="/static/images/case/mei-app-7.jpg" class="banner"/>
  </div>
</template>

<script>
export default {
  name: 'Food',
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
