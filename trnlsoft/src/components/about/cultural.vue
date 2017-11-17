<template>
  <div>
     <div class="cultural cultural-gray">
     	<el-container class="show_outbox">
	      <el-main class="show_box">
	      	 <el-row class="show_content show_contant">
		        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="show_item">	
			      	<h2 class="title">公司文化</h2>
				    <p class="subtitle">团结 拼搏 求实 创新</p>
		          	<div class="img_box">
		          		<img src="/static/images/about/comshit0-01.png"  alt="">
		          	</div>
		        </el-col>
		      </el-row>
	      </el-main> 
	    </el-container>
    </div>
    <div class="cultural cultuarl-black">
		<el-container class="show_outbox">
	      <el-main>
	      	 <el-row class="show_content cultural_content" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
	        	<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="img">
	          		<img src="/static/images/about/comshit2-01.png"  alt="">
	          	</el-col>
	          	<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="cultural_item aglin">
	          		<h2 class="title">企业使命</h2>
			    	<p class="subtitle">通过信息化建设与运营，打造智慧型中国企业、智慧型政府信息化平台。 不断追求技术的创新，致力于为客户提供基于互联网应用的技术领先、高效易用的软件产品，不断帮助客户提升竞争力，协助客户完成信息化的转型。</p>
	          	</el-col>
		      </el-row>
	      </el-main> 
	    </el-container>
	</div>
	<div class="cultural cultural-gray">
     	<el-container class="show_outbox">
	      <el-main class="show_box">
	      	 <el-row class="show_content cultural_content">
		        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="show_item">	
			      	<h2 class="title">企业价值</h2>
				    <p class="subtitle">提供优质的互联网软件产品，帮助客户改进经营，提升生产力，节约成本，创造效益<br/>
让中国企、事业单位，政府部门，无论何时何地轻松开展电子商务、移动办公、实现信息化管理</p>
		          	<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">	
						<el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"  v-for="(it,index) in list" :key="index" >
							<img :src="it.src" alt="" class="icon">
							<p class="text">{{it.html}}</p>
						</el-col>
		          	</el-col>
		        </el-col>
		      </el-row>
	      </el-main> 
	    </el-container>
    </div>
    <div class="cultural cultural-background">
     	<el-container class="show_outbox">
	      <el-main class="show_box">
	      	 <el-row class="show_content cultural_content">
		        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="cultural_item">	
		        	<div class="img_box">
		          		<img src="/static/images/about/manofshit-01.png" alt="">
		          	</div>
			        <h2 class="title">服务宗旨</h2>
				    <p class="subtitle">用心服务 共创价值</p>
		        </el-col>
		      </el-row>
	      </el-main> 
	    </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cultural',
  data(){
    return{
    	list:[
    		{
    			src:"/static/images/about/ren-01.png",
    			html:"以人为本"
    		},
    		{
    			src:"/static/images/about/cheng-01.png",
    			html:"诚信经营"
    		},
    		{
    			src:"/static/images/about/ying-01.png",
    			html:"勇于担当"
    		},
    		{
    			src:"/static/images/about/yong-01.png",
    			html:"互助共赢"
    		}
    	]
    }
  }
}
</script>

<style lang="less" scoped>
.cultural-gray{
	background: rgb(242,244,246);
}
.cultuarl-black{
	background: rgb(43,51,59);
}
.cultural-background{
	background: url('/static/images/about/ee.jpg');
	background-size: cover;
}
.show_contant{
	padding-top: 100px;
}
.cultural_content{
	padding: 100px 0;
}
@media only screen and (max-width: 767px){
	.show_contant{
		padding-top: 50px;
	}
	.cultural_content{
		padding: 50px 0;
	}
}
.aglin{
	text-align: left;
}
.cultural{
	width: 100%;
	.show_box{
		padding-bottom: 0; 
	}
	.img_box{
		width: 640px;
		margin: 0 auto;
		img{
			width: 100%;
			display: block;
		}
	}
	@media only screen and (max-width: 767px){
		.img_box{
			width: 100%;
		}
		.icon{
			width: 70%;
		}
	}
	.show_content{
		.show_item{
			h2.title{
				font-size: 0.24rem;
				line-height: 0.3rem;
				padding-bottom: 10px;
			}
			p.subtitle{
				line-height: 0.26rem;
			    margin-bottom: 40px;
			    color: rgb(155, 163, 175);
			    font-size: 0.15rem;
			}
			p.text{
				line-height: 0.26rem;
			    color: rgb(155, 163, 175);
			    font-size: 0.15rem;
			}
		}
		
	}
	.cultural_content{
		.img{
			img{
				width: 100%;
			}
		}
		.cultural_item{
			h2.title{
				margin-top: 30px;
				font-size: 0.24rem;
				line-height: 0.3rem;
				padding-bottom: 10px;
				color: #FFFFFF;
			}
			p.subtitle{
				line-height: 0.26rem;
			    margin-bottom: 40px;
			    color: #FFFFFF;
			    font-size: 0.15rem;
			}
		}
	}
}
</style>
