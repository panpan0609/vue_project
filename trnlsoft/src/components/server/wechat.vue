<template>
  <div class="out_box">
   	<div class="wechat_box">
   		<el-row>
		  	<el-col :span="24" class="item">
		  		<h2>微官网</h2>
		  		<p>企业微信公众账号是企业媒体发布平台、销售信息发布平台、危机公关平台、消费者互动平台、促销活动开展平台、新品展示平台、产品在线销售平台、网上支付平台、调研平台、公司企业文化传播平台、人才招聘平台等，一切企业关注的，企业需要的在企业微信公众账号都可以实现！</p>
		  		<img src="../../../static/images/1-160425201KH47.png" class="banner"  alt="">
			</el-col>
			<el-col :span="24" class="item">
		  		<h2>微商城</h2>
		  		<p>微信电商公众号有以下优势：互联网已经步入移动电商的时代，让您的产品在移动互联网销售中，抢占微信朋友圈微博等社交平台，还有来自PC端或电商平台移动端的转化。通过多平台销售和多种销售模式的建立，快速的提高交易额。公众号助力传统企业快速步入移动电商时代，解决行业痛点，助力传统电商快速转型，规范微商市场，建立微商新体系。</p>
		  		<img src="../../../static/images/comwebsite2-01.png" class="banner"  alt="">
			</el-col>
			<el-col :span="24" class="item">
		  		<h2>B2C微信电商平台</h2>
		  		<p>B2C是电子商务的一种模式，也就是通常说的直接面向消费者销售产品和服务商业零售模式。而B2C微信电商平台这种形式的电子商务一般以网络零售业为主，主要借助于微信开展在线销售活动。B2C即企业通过微信为消费者提供一个新型的购物环境——网上商店，消费者通过微信在网上购物，网上支付等消费行为。B2C微信电商平台为顾客提供在线购物场所的商场网站，负责为客户所购商品进行配送的配送系统，并且负责顾客身份的确认以及贷款结算的银行认证系统。B2C微信电商平台集品种齐全，一站购物，由于有客户评价机制，通常客服服务态度很好，是网上购物的首选。</p>
		  		<img src="../../../static/images/comwebsite4-01.png" class="banner"  alt="">
			</el-col>
		</el-row>
   	</div>
  </div>
</template>

<script>
export default {
  name: 'Wechat',
  data(){
  	return{}
  }
}
</script>

<style lang="less" scoped>
	.out_box{
		width: 100%;
		.wechat_box{
			margin: 0 auto;
			text-align: left;
			.item{
				padding: 20px 0 50px;
				h2{
					font-size: 0.24rem;
					line-height: 0.4rem;
				}
				p{
					color: #999;
					font-size: 0.12rem;
					line-height: 0.15rem;
					padding: 20px 0 40px;
				}
				img.banner{
					width: 100%;
					display: block;
				}
			}
		}
	}
</style>
