<template>
  <div class="out_box">
  	<el-container class="show_outbox">
      <el-main class="show_box">
      	<h1 class="title">企业网站</h1>
	    	<p class="subtitle">展示企业文化，宣传企业美好形象</p>
      	 <el-row class="show_content">
	        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"  v-for="(it,index) in list" :key="index" class="show_item">
	          <div class="website_icon" :class="it.icon"></div>
		    		<p class="title">{{it.title}}</p>
		    		<div>{{it.html}}</div>
	        </el-col>
	      </el-row>
	      <img src="../../../static/images/com123.jpg" class="banner" alt="">   
      </el-main> 
    </el-container>
    <div class="content_bg">
	    <el-container class="show_outbox">
	      <el-main class="show_box">
	      	<h1 class="title">行业门户网站</h1>
		    	<p class="subtitle">综合性互联网信息资源并提供有关信息服务的应用系统</p>
	      	 <el-row class="show_content">
		        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12"  v-for="(it,index) in list2" :key="index" class="show_item">
		          <div class="website_icon" :class="it.icon"></div>
			    		<p class="title">{{it.title}}</p>
			    		<div>{{it.html}}</div>
		        </el-col>
		      </el-row>
		      <img src="../../../static/images/menhu123.jpg" class="banner" alt="">
	      </el-main> 
	    </el-container>  
    </div>
    <el-container class="show_outbox">
      <el-main class="show_box">
      	<h1 class="title">政府政务平台</h1>
	    	<p class="subtitle">我们是致力于企、事业单位,政府部门的互联网信息化整体解决方案提供</p>
      	 <el-row class="show_content">
	        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8"  v-for="(it,index) in list3" :key="index" class="show_item">
	          <div class="website_icon" :class="it.icon"></div>
		    		<p class="title">{{it.title}}</p>
		    		<div>{{it.html}}</div>
	        </el-col>
	      </el-row>
	      <img src="../../../static/images/zhengfu123.jpg" class="banner" alt="">   
      </el-main> 
    </el-container>  	       
  </div>
</template>

<script>
export default {
  name: 'Website',
  data(){
  	return{
  		list:[
  			{
  				icon:"icon1",
  				title:"页面设计",
  				html:"从网站的主色调、副色调、边框风格到页头风格、导航、广告显示等信息全部可以自由设定，可以做到完全独一无二的网站。"
  			},
  			{
  				icon:"icon2",
  				title:"搜索排名",
  				html:"独立后台，自定义设置关键词。被各大搜索引擎收录，快速收录排名靠前。让企业网站站在聚光灯下，让更多的人观看到。"
  			},
  			{
  				icon:"icon3",
  				title:"响应式网页",
  				html:"让你的网站同时支持PC桌面级浏览，平板电脑，手机屏幕等各种屏幕，完美流畅浏览页面。"
  			}
  		],
  		list2:[
  			{
  				icon:"icon4",
  				title:"包含各类门户网站",
  				html:"包括综合性门户网站，地方生活门户，个人门户以及搜索引擎式门户网站。"
  			},
  			{
  				icon:"icon5",
  				title:"门户网站的作用",
  				html:"通过互联网来宣传企业、开拓市场，降低企业的管理成本、交易成本和售后服务成本，并通过开展一系列的电子商务活动获得更多利润。"
  			}
  		],
  		list3:[
  			{
  				icon:"icon6",
  				title:"报表",
  				html:"多维度的报表系统，您可以按时间段查询，并且可以按“月”、“周”、“日”等数据对比，查看走势。支持可视化统计图。"
  			},
  			{
  				icon:"icon7",
  				title:"无纸化",
  				html:"通过平台可实行无纸化政府平台运作，有效提高效率并减少政府办公经费，环保节能。"
  			},
  			{
  				icon:"icon8",
  				title:"电子政务",
  				html:"电子政务将政府工作更公开、更透明，并且为企业和居民提供更好的服务"
  			}
  		]
  	}
  }
}
</script>


<style lang="less" scoped>	
.show_box{
	padding:80px 0;
	h1.title{
		font-size: 0.36rem;
		line-height: 60px;
	}
	p.subtitle{
		font-size: 0.2rem;
		color: #999;
		line-height: 30px;
		padding-bottom: 20px;
	}
	.banner{
		width: 100%;
		height: 345px;
		display: block;
		margin-top: 30px;
	}
	.show_content{
		.show_item{
			padding:20px;
			div{
				line-height: 23px;
				font-size: 0.16rem;
				color: #999;
			}
			p.title{
				line-height: 50px;
				font-size: 0.2rem;
			}
			.website_icon{
				width: 48px;
				height: 48px;
				margin: 0 auto;
				&.icon1{
					background: url(../../../static/images/goodimg.png);
				}
				&.icon2{
					background: url(../../../static/images/goodimg.png) no-repeat;
					background-position: -49px 0;
				}
				&.icon3{
					background: url(../../../static/images/goodimg.png) no-repeat;
					background-position: -98px 0;
				}
				&.icon6{
					background: url(../../../static/images/goodimg.png) no-repeat;
					background-position: -281px -48px;
				}
				&.icon7{
					background: url(../../../static/images/goodimg.png) no-repeat;
					background-position: -405px -48px;
				}
				&.icon8{
					background: url(../../../static/images/goodimg.png) no-repeat;
					background-position: -320px -48px;
				}
				&.icon4{
					background: url(../../../static/images/goodimg.png) no-repeat;
					background-position: 0 -49px;
				}
				&.icon5{
					background: url(../../../static/images/goodimg.png) no-repeat;
					background-position: -147px 0;
				}
			}
			.website_icon2{
				width: 62px;
				height: 48px;
				margin: 0 auto;
			}
			.website_icon3{
				width: 39px;
				height: 48px;
				margin: 0 auto;
			}
			.website_icon4{
				width: 33px;
				height: 48px;
				margin: 0 auto;
			}
		}
	}
}
.content_bg{
	width: 100%;
	background: #f2f2f2;
}

</style>
