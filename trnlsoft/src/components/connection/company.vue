<template>
  <div class="company_box">
    <el-container class="show_outbox">
      <el-main class="show_box">
      	<h2 class="title">广州总公司</h2>
      	<div class="text">
	      	<p class="time">&nbsp;&nbsp;&nbsp;&nbsp;全国服务电话：400-9918-302</p>
	      	<p class="subtitle">&nbsp;&nbsp;&nbsp;&nbsp;公司选取地址在广东省广州市白云区，我们的目标是为广大的商户实现他们的想法，做出能够落地实现有用的产品。创新易用的设计方案，有效提升产品体验和客户品牌价值。广州总公司主要负责大数据，信息化政务平台等大型项目，意在让中国企、事业单位，政府部门，无论何时何地轻松开展电子商务、移动办公、实现信息化管理。</p>
      	</div>
      	<el-row class="show_content">
	        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="show_item" v-for="(it,index) in list" :key="index">	
	        	<img :src="it.src" alt="" />
	        	<p class="title">{{it.html}}</p>
	        </el-col>
	      </el-row>
      </el-main> 
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Company',
  data(){
    return{
      list:[
      	{
      		src:"/static/images/connection/1-16051G00S0914.jpg",
      		html:"我们倡导自由，分享及汲取是其中的主题。"
      	},
      	{
      		src:"/static/images/connection/1-16042QGUH39.jpg",
      		html:"客户接待"
      	},
      	{
      		src:"/static/images/connection/1-16042QI243109.jpg",
      		html:"客户接待"
      	},
      	{
      		src:"/static/images/connection/1-16042P95623257.png",
      		html:"和谐环境"
      	}
      ]
    }
  }
}
</script>

<style lang="less" scoped="">
.company_box{
	h2.title{
		font-size: 0.32rem;
		line-height: 0.42rem;
		padding-bottom: 10px;
		color: rgb(100, 100, 100);
	}
	.text{
		text-align: left;
		p{
			color: #999999;
			&.time{
				font-size: 0.14rem;
				line-height: 0.2rem;
				padding: 10px 0;
			}
			&.subtitle{
				font-size: 0.14rem;
				line-height: 0.24rem;
			}
		}
	}
	.show_item{
		img{
			width: 100%;
			display: block;
			padding: 15px 0;
		}
		.title{
			font-size: 0.14rem;
			line-height: 0.2rem;
			color: #999;
			padding-left: 10px;
			text-align: left;
		}
	}
}
</style>
