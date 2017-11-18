<template>
  <div class="out_box">
  	<el-container class="show_outbox">
      <el-main class="customization">
      	<div class="website_icon icon1"></div>
				<h2 class="title">OA办公系统</h2>
				<div class="title">办公自动化（Office Automation,简称OA）是将现代化办公和计算机网络功能结合起来的一种新型的办公方式。办公自动化没有统一的定义，凡是在传统的办公室中采用各种新技术、新机器、新设备从事办公业务，都属于办公自动化的领域。在行政机关中，大多把办公自动化叫做电子政务，企业单位就都叫OA，即办公自动化。通过实现办公自动化，或者说实现数字化办公，可以优化现有的管理组织结构，调整管理体制，在提高效率的基础上，增加协同办公能力，强化决策的一致性，最后实现提高决策效能的目的。</div>
				<img src="/static/images/OA.jpg" class="banner" alt=""> 
	    	<div class="website_icon icon1"></div>
				<h2 class="title">内部管理系统</h2>
				<div class="title">企业管理系统，是指能够体现企业管理的大部分职能（包括决策、计划、组织、领导、监控、分析等等），能够提供实时、相关、准确、完整的数据，为管理者提供决策依据的一种软件。以模块划分，企业管理软件可分为企业文档管理、财务管理、车间管理、进销存管理（ERP）、资产管理、成本管理、设备管理、质量管理、分销资源计划管理、人力资源管理（HR）、供应链管理（SCM）、客户关系管理（CRM）等品种。</div>
				<img src="/static/images/OA.jpg" class="banner" alt="">
      </el-main> 
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Customization',
  data(){
  	return{}
  }
}
</script>

<style lang="less" scoped>
	.out_box{
		width: 100%;
		.customization{
			margin: 0 auto;
			padding: 80px 20px;
			.website_icon{
				width: 48px;
				height: 48px;
				margin: 0 auto;
			}
			.icon1{
				background: url('/static/images/goodimg.png');
			}
			h2.title{
				font-size: 0.4rem;
				line-height: 0.4rem;
				padding-top: 10px;
			}
			div.title{
				width: 600px;
				margin: 0 auto;
				padding:20px 0 60px 0;
				color: #999;
				font-size: 0.14rem;
				line-height: 0.24rem;
			}
			.banner{
				padding: 20px 0;
			}
		}
	}
@media only screen and (max-width: 767px){
	.out_box{
		.customization{
			padding: 40px 20px;
			h2.title{
				font-size: 0.24rem;
				line-height: 0.24rem;
			}
			div.title{
				width: 100%;
				padding: 20px 0;
			}
			.banner{
				width: 100%;
			}
		}
	}
}	
	
</style>
