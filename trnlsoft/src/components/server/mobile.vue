<template>
  <div class="outbox">
  	<el-container class="show_outbox">
      <el-main class="mobile_box">
      	<h2 class="title">移动APP开发</h2>
		<p class="subtitle">天软农联积累了大量移动应用APP开发经验</p>
    	<el-row class="show_content" >
	        <el-col  :xs="24" :sm="8" :md="8" :lg="8" :xl="8" v-for="(it,index) in list" :key="index" class="show_item">	        
    			<img :src="it.src" alt="" class="icon" />
    			<h2>{{it.title}}</h2>
    			<p>{{it.html}}</p>
	        </el-col>
      	</el-row>
      </el-main> 
  	</el-container>
  	<div class="item_bg">
  		<el-container class="show_outbox">
	      <el-main class="el-item">
	      	<el-row>
	      		<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(it,index) in list2" :key="index">     			
			        <el-col  :xs="24" :sm="12" :md="12" :lg="12" :xl="12"  class="show_item">	        			    			
		    			<h2>{{it.title}}</h2>
		    			<p>{{it.html}}</p>
			        </el-col>
			        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
		      			<img :src="it.src" alt="" class="banner" />
		      		</el-col>
	      		</el-col>
      		</el-row>
	      </el-main> 
  		</el-container>
  	</div>
  	<el-container class="show_outbox">
	    <el-main class="el-item">
	    	<el-row>
	      		<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(it,index) in list3" :key="index">
	      			<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
		      			<img :src="it.src" alt="" class="banner" />
		      		</el-col>
			        <el-col  :xs="24" :sm="12" :md="12" :lg="12" :xl="12"  class="show_item">	        			    			
		    			<h2>{{it.title}}</h2>
		    			<p>{{it.html}}</p>
			        </el-col>
	      		</el-col>
	      	</el-row>
	 	</el-main> 
  	</el-container>
  </div>
</template>

<script>
export default {
  name: 'Mobile',
  data(){
  	return{
  		list:[
  			{
  				src:"/static/images/quanpingtai-01.png",
  				title:"全平台",
  				html:"拥有一流技术人才，全面涉及的平台包括iPhone、iPad、Android手机和Android平板"
  			},
  			{
  				src:"/static/images/shili-01.png",
  				title:"开发实例",
  				html:"涵盖资讯、社交、电商、视频、音乐、本地服务、企业服务、互联网金融等各个领域"
  			},
  			{
  				src:"/static/images/kuozhanxing-01.png",
  				title:"可扩展",
  				html:"系统具有方便扩展功能，能快速开定制开发新功能并适应用户的不同需求"
  			}
  		],
  		list2:[
  			{
  				src:"/static/images/liuchengtu.png",
  				title:"项目开发过程",
  				html:"需求分析、交互设计、UI设计、客户端开发、后台API开发 后台业务管理开发、项目测试验收、项目部署、后期质保。"
  			}
  		],
  		list3:[
  			{
  				src:"/static/images/xiangmukongzhi-01.png",
  				title:"项目监控和验收",
  				html:"整个项目过程都可以通过本平台的项目管理系统进行跟踪 开发到Beta版内测阶段，直接可以在平台下载内测版App 进行安装直接体验开发成果。"
  			}
  		]
  	}
  }
}
</script>

<style lang="less" scoped>
.outbox{
	width: 100%;
	.mobile_box{
		padding-top: 50px;
		h2.title{
			font-size: 0.24rem;
			margin: 30px 0 20px;
		}
		p.subtitle{
			line-height: 26px;
	    margin-bottom: 40px;
	    color: rgb(155, 163, 175);
	    font-size: 16px;
		}
		.show_item{
			padding: 30px 0;
			p{
				color: #6f7c82;
				font-size: 0.14rem;
				line-height: 0.20rem;
		    max-width: 200px;
		    margin: 0 auto;
		    text-align: center;
			}
			h2{
				font-size: 0.2rem;
				line-height: 0.4rem;
			}
			.icon{
				width: 80px;
				height: 80px;
			}
		}
		@media only screen and (max-width: 767px){
			p.subtitle{
				 margin-bottom: 20px;
			}
			.show_item{
				padding: 10px 0;
			}
		}
	}
	@media only screen and (max-width: 767px){
		.mobile_box{
			padding-top: 20px;
			h2.title{
				font-size: 0.24rem;
				margin: 10px 0 20px;
			}
		}
	}
}
.item_bg{
	background: #F2F7FC;
}
.el-item{
	text-align: left;
	.show_item{
		padding: 100px 0 100px 70px;
		h2{
			font-size: 0.24rem;
			padding-bottom: 35px;
		}
		p{
			line-height: 0.24rem;
	    font-size: 0.14rem;
	    color: rgb(81,81,81);
	    margin-left: inherit;
	    margin-right: inherit;
		}
	}
	@media only screen and (max-width: 767px){
		.show_item{
			padding: 0;
			text-align: center;
		}
	}
	.banner{
		width: 100%;
		display: block;
	}
}
</style>
