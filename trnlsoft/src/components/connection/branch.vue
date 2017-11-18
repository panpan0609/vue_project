<template>
  <div class="branch_box">
    <el-container class="show_outbox">
      <el-main class="show_box">
      	<h2 class="title">顺德分公司</h2>
      	<div class="text">
	      	<p class="time">&nbsp;&nbsp;&nbsp;&nbsp;全国服务电话：400-9918-302</p>
	      	<p class="subtitle">&nbsp;&nbsp;&nbsp;&nbsp;我们怀揣着一个多年的想法，并且思寻一块能让思想种子生根发芽的大地。顺德处在广东省南部，珠江三角洲的平原中部，是佛山市与广州市联系的重要核心区域，而且四周临近中山澳门，深圳香港等地区。经济发达创业机会潜力大，在顺德落下办事处是一小步，是我们前进的一大步。</p>
      	</div>
      	<el-row class="show_content">
	        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="show_item">	
	        	<img src="/static/images/connection/1-16042Q0445BZ.jpg" alt="" />
	        	<p class="title"> 顺德办事处也沿用总公司思想，寻求自由，各种想法激情碰撞。</p>
	        	<img src="/static/images/connection/1-16042Q1020ID.jpg" alt="" />
	        </el-col>
	      </el-row>
      </el-main> 
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Branch',
  data(){
    return{
      msg:'我是'
    }
  }
}
</script>

<style lang="less" scoped="">
.branch_box{
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
