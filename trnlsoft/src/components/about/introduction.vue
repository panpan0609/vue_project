<template>
  <div>
    <el-container class="show_outbox">
      <el-main class="show_box">
      	<h1 class="title">广东天软农联信息技术有限公司</h1>
	    <p class="subtitle">一次不经意的聚会，来自于中国知名互联网科技公司技术核心人员齐聚一堂<br/>
一个N年前共同的梦想开启了我们的创业之路，广东天软农联信息科技有限公司由此诞生。</p>
      	 <el-row class="show_content">
	        <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18" :offset="3" v-for="(it,index) in list" :key="index" class="show_item">
	          	<div class="img_box">
	          		<img :src="it.src" alt="">
	          	</div>
	    		<p class="title">{{it.title}}</p>
	    		<div>{{it.html}}</div>
	        </el-col>
	      </el-row>
      </el-main> 
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  data(){
    return{
      list:[
      	{
      		src:"/static/images/about/trnl-01.png",
      		title:"经营范围",
      		html:"广东天软农联信息科技有限公司专业从事于软件定制、APP、微信公众号深度开发、门户网站建设、物联网、云计算、大数据分析建设"
		},
      	{
      		src:"/static/images/about/trnl2-01.png",
      		title:"服务对象",
      		html:"广东天软农联致力于企、事业单位，政府部门的互联网信息化整体解决方案提供"
      	},
      	{
      		src:"/static/images/about/trnl3-01.png",
      		title:"总结",
      		html:"广东天软农联是一家集软件研发、产品研发、电商平台运营为一体的高科技信息化企业能够帮助您快速拓展业务争取利益最大化。"
      	}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.show_box{
	padding:50px 20px;
	h1.title{
		font-size: 0.24rem;
		line-height: 0.3rem;
		padding-bottom: 10px
	}
	p.subtitle{
		line-height: 0.26rem;
	    margin-bottom: 40px;
	    color: rgb(155, 163, 175);
	    font-size: 0.15rem;
	}
	.show_content{
		.show_item{
			padding:20px 0 40px;
			div{
				line-height: 0.20rem;
			    font-size: 0.16rem;
			    color: rgb(155, 163, 175);
			}
			p.title{
				line-height: 50px;
				font-size: 0.2rem;
			}
			.img_box{
				padding: 0 50px;
				img{
					width: 100%;
					display: block;
				}
			}
			@media only screen and (max-width: 767px){
				.img_box{
					padding: 0;
				}
			}
		}
	}
}

</style>
