<template>
  <div class="platform">
  	<el-container class="show_outbox">
      <el-main class="show_box">
      	<h2 class="title">B2C电商解决方案</h2>
    		<p class="subtitle">B2C是商家对客户的一种电子商务模式，<br/>天软农联致力于解决企业相关行业的电子商务应用的难点痛点，规划出系统的解决方案</p>
    		<el-row class="show_content" >
	        <el-col  :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
	        	<div  v-for="(it,index) in list" :key="index" class="show_item">
	        		<img :src="it.src" alt="" class="icon" />
			    		<div class="text">
			    			<h2>{{it.title}}</h2>
			    			<p>{{it.html}}</p>
			    		</div>
	        	</div>
	        </el-col>
	        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
	         	<img src="/static/images/B2C-01.png" class="img" alt="">
	        </el-col>
      	</el-row>
      </el-main> 
  	</el-container>
	  <div class="box">
	  	<el-container class="show_outbox">
		      <el-main class="show_box">
		      	<h2 class="title">B2C电商解决方案</h2>
		    		<p class="subtitle">B2B是商家与商家之间的交易活动，它也是电子商务的一种主要形式<br />
			企业须根据自身的发展情况，选择所需的功能，组成属于自己的电子商务网站。</p>
		    		<el-row class="show_content" >
		    			<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
			         	<img src="/static/images/dianshangpeitu-01.png" class="img" alt="">
			        </el-col>
			        <el-col  :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
			        	<div  v-for="(it,index) in list2" :key="index" class="show_item">
			        		<img :src="it.src" alt="" class="icon" />
					    		<div class="text">
					    			<h2>{{it.title}}</h2>
					    			<p>{{it.html}}</p>
					    		</div>
			        	</div>
			        </el-col>
		      	</el-row>
		      </el-main> 
		  </el-container>  	
	  </div>    
	  <el-container class="show_outbox">
		  <el-main class="case_box">
		  	<h2 class="title">全行业电商解决方案</h2>
				<p class="subtitle">我们拥有各行业的电商平台的开发经验</p>
				<el-row class="show_content" >
		        <el-col  :xs="12" :sm="6" :md="6" :lg="6" :xl="6"  v-for="(it,index) in list3" :key="index" class="case_item">
		        		<img :src="it.src" alt=""/>
			    			<h2>{{it.title}}</h2>
			    			<p>{{it.html}}</p>
		        </el-col>
		  	</el-row>
	  </el-main> 
	</el-container>
  </div>
</template>

<script>
export default {
  name: 'Platform',
  data(){
  	return{
  		list:[
  			{
  				src:"/static/images/show-01.png",
  				title:"商品分类与展示",
  				html:"这是企业最重要的地方，用图片和文字的方式展示企业所有产品供客户查询。"
  			},
  			{
  				src:"/static/images/huiyuan-01.png",
  				title:"会员注册",
  				html:"用户可以进行在线注册，免费成为会员"
  			},
  			{
  				src:"/static/images/gift-01.png",
  				title:"积分系统",
  				html:"按照客户的要求制定游戏规则，让用户获得奖赏"
  			},
  			{
  				src:"/static/images/xiadan-01.png",
  				title:"线上线下订购服务",
  				html:"线上线下订购服务 完整的订购流程，使用招商银行，银联或者其他银行支付系统进行支付操作，提供与银行之间的服务接口"
  			},
  			{
  				src:"/static/images/daibiao-01.png",
  				title:"电商代表",
  				html:"淘宝、天猫、京东"
  			}
  		],
  		list2:[
  			{
  				src:"/static/images/show-01.png",
  				title:"企业列表",
  				html:"这里主要是展示网站里的会员企业，可以查询更多关于企业的详细信息"
  			},
  			{
  				src:"/static/images/huiyuan-01.png",
  				title:"会员企业",
  				html:"企业注册会员，形成自己的个人网站，可以自行管理亦可以在网站内发布信息"
  			},
  			{
  				src:"/static/images/gift-01.png",
  				title:"供求信息",
  				html:"会员企业可以在后台发布供求信息"
  			},
  			{
  				src:"/static/images/xiadan-01.png",
  				title:"新闻系统",
  				html:"企业可以在网站内公布有关新闻事件和新的注意事项"
  			},
  			{
  				src:"/static/images/daibiao-01.png",
  				title:"电商代表",
  				html:"阿里巴巴、慧聪"
  			}
  		],
  		list3:[
  			{
  				src:"/static/images/kuaidi-01.png",
  				title:"外卖快送",
  				html:"专为餐饮外卖行业设计的模板，粉丝进店消费或者送货上门"
  			},
  			{
  				src:"/static/images/dabao-01.png",
  				title:"食品电商",
  				html:"适合酒水、特产、零食、茶饮类电商应用，快递快速发货"
  			},
  			{
  				src:"/static/images/waimai-01.png",
  				title:"生鲜水果",
  				html:"同城且需要极速配送的生鲜类产品，可同城配送或配送点自提"
  			},
  			{
  				src:"/static/images/shangdian-01.png",
  				title:"O2O商城",
  				html:"多门店管理，LBS自动定位最近门店，可上门自提或到店消费"
  			},
  			{
  				src:"/static/images/meirong-01.png",
  				title:"美妆洗护",
  				html:"粉丝线上下单，卖家快递发货，适用于化妆品、美容产品和洗护类产品"
  			},
  			{
  				src:"/static/images/goumai-01.png",
  				title:"生活日用",
  				html:"高频消费的日用品，可同城配送或多自提点自提，未来商超必然趋势"
  			},
  			{
  				src:"/static/images/paisong-01.png",
  				title:"生活消费",
  				html:"同城且需要极速配送的水果、蔬菜、海鲜类产品，可同城配送或配送点自提"
  			},
  			{
  				src:"/static/images/gift-01.png",
  				title:"礼物礼品",
  				html:"同城且需礼品类电商指定送给朋友，附写留言，指定送达时间或者上门自提"
  			}
  		]
  	}
  }
}
</script>

<style lang="less" scoped>
.platform{
	padding: 30px 0 20px;
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
}
.box{
	width: 100%;
	padding: 50px 0 30px;
	background: #F2F7FC;
}
.show_content{
	.show_item{
		display: flex;
		text-align: left;
		img.icon{
			width: 50px;
			height: 50px;
			padding-right: 20px; 
		}
		h2{
			font-size: 0.18rem;
    	color: rgb(61, 68, 79);
			margin-bottom: 11px;
		}
		p{
			font-size: 14px;
	    line-height: 23px;
	    color: rgb(100, 106, 117);
	    margin-bottom: 30px;
	    margin-top: 0;
		}
	}
	.img{
		width: 100%;
		display: block;
	}
}
.case_box {
	.case_item{
		padding: 25px;
		text-align: left;
		img{
			width: 60px;
			height: 60px;
		}
		h2{
			text-align: left;
	    font-size: 18px;
	    color: rgb(61, 68, 79);
	    margin:0 0 11px 0;
		}
		 p{
			font-size: 14px;
	    line-height: 23px;
	    color: rgb(100, 106, 117);
	    margin:0 0 30px 0;
		}	
	}
}
</style>
