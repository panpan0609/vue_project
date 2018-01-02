<template>
  <div class="vegetarian-box show_outbox">
    <div class="box">
    	<h1 class="title">素食APP</h1>
    	<p class="date">日期:2017-07-01/人气:3809/来源:TRNL</p>
    </div>
		<p class="subtitle">集合多方所有素食资讯，美食菜谱，及全国各地素食餐厅、有机素食、素食交友的贴心平台。</p>
		<img src="/static/images/case/su-app.jpg" class="banner"/>
  </div>
</template>

<script>
export default {
  name: 'Vegetarian',
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
