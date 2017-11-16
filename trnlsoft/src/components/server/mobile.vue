<template>
  <div class="outbox">
  	<div class="mobile_box">
	  	<el-row>
		  <el-col :span="24">
		  	<el-col :span="24" class="el-title">
			  		<h2>移动APP开发</h2>
			  		<p>天软农联积累了大量移动应用APP开发经验</p>
			  </el-col>
			  <el-col :span="8" class="el-item">
			  		<img src="../../../static/images/quanpingtai-01.png" alt="">
		    		<p class="title">全平台</p>
		    		<div class="subtitle">拥有一流技术人才，全面涉及的平台包括iPhone、iPad、Android手机和Android平板</div>
			  </el-col>
			   <el-col :span="8" class="el-item">
			  		<img src="../../../static/images/shili-01.png" alt="">
		    		<p class="title">开发实例</p>
		    		<div class="subtitle">涵盖资讯、社交、电商、视频、音乐、本地服务、企业服务、互联网金融等各个领域</div>
			  </el-col>
			   <el-col :span="8" class="el-item">
			  		<img src="../../../static/images/kuozhanxing-01.png" class="" alt="">
		    		<p class="title">可扩展</p>
		    		<div class="subtitle">系统具有方便扩展功能，能快速开定制开发新功能并适应用户的不同需求</div>
			  </el-col>
		  </el-col>
		  <el-col :span="24" class="item_bg">
		  	<el-col :span="10" :offset="2" class="el-title2 el-title">
		    		<h2>项目开发过程</h2>
		    		<p>需求分析、交互设计、UI设计、客户端开发、后台API开发 后台业务管理开发、项目测试验收、项目部署、后期质保。</p>
			  </el-col>
			  <el-col :span="8">
			  		<img src="../../../static/images/liuchengtu.png" class="banner" alt="">
			  </el-col>
		  </el-col>
		  <el-col :span="24">
			  <el-col :span="8" :offset="2">
			  		<img src="../../../static/images/xiangmukongzhi-01.png" class="banner" alt="">
			  </el-col>
			  <el-col :span="10" class="el-title2 el-title">
		    		<h2>项目开发过程</h2>
		    		<p>需求分析、交互设计、UI设计、客户端开发、后台API开发 后台业务管理开发、项目测试验收、项目部署、后期质保。</p>
			  </el-col>
		  </el-col>
		</el-row>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'Mobile',
  data(){
  	return{}
  }
}
</script>

<style lang="less" scoped>
	.outbox{
		width: 100%;
		.mobile_box{
			padding-top: 50px;
			.el-title{
				h2{
					font-size: 0.24rem;
					line-height: 0.4rem;
				}
				p{
					color: #999;
					font-size:0.12rem;
				}
			}
			.el-item{
				padding: 30px 0;
				p{
					font-size: 0.12rem;
					line-height: 0.2rem;
				}
				.subtitle{
					width: 50%;
					margin: 0 auto;
					font-size: 0.1rem;
					line-height: 0.14rem;
					color: #999;
				}
				.website_icon{
					width: 80px;
					height: 80px;
					display: block;
				}
			}
			.item_bg{
				background: #F2F7FC;
			}
			.el-title2{
				text-align: left;
				padding: 50px 0 0 50px;
				p{
					width: 80%;
					padding-top: 20px;
					line-height: 0.2rem;
					color: #666;
					font-size: 0.1rem;
				}
				h2{
					position: relative;
					&:after{
						position: absolute;
					    left: 0;
					    bottom: 0;
					    width: 25%;
					    height: 1px;
					    content: '';
					    border-bottom: 2px solid #377FC3;
					}
				}
				
			}
			.banner{
				width: 100%;
				display: block;
			}
			
		}
	}
</style>
