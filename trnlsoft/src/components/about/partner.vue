<template>
  <div class="partner_box">
    <el-container class="show_outbox">
      <el-main class="show_box">
      	<h2 class="title">合作伙伴</h2>
      	 <el-row class="show_content">
	        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="show_item" v-for="(it,index) in list" :key="index" @mouseenter.native="mouseenter(it)" @mouseleave.native="mouseleave(it)">	
		      	<el-col :class="{showScale:it.detailShow}">
		      		<el-col class="img_bg" :class="it.className">	
	          		<div class="mask" v-show="it.detailShow">
	                  <span></span>
	                </div>          
		        	</el-col>
		      	</el-col>
	        </el-col>
	      </el-row>
      </el-main> 
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Partner',
  data(){
    return{
      list:[
      	{
    			className:"partner1",
    			detailShow: false
    		},
    		{
    			className:"partner2",
    			detailShow: false
    		},
    		{
    			className:"partner3",
    			detailShow: false
    		},
    		{
    			className:"partner4",
    			detailShow: false
    		}
      ]
    }
  },
  methods:{
    mouseenter:function(item) {
      item.detailShow = true;
    },
    mouseleave:function(item) {
      item.detailShow = false;
    }
	}
}
</script>

<style lang="less" scoped>
@import "../../../static/css/mixins.less";
.partner_box{
	background: #FBFAFA;
	h2.title{
		font-size: 0.24rem;
		line-height: 0.3rem;
		padding-bottom: 10px;
	}
	.show_content{
		.show_item{
			padding:30px 10px;
			.showScale{
				box-shadow:0px 0px 5px #ccc;
	    	transform:scale(1.03);
	    	transition:transform 0.5s;
	    }
			.img_bg{
				position: relative;
				border: 1px solid #ededed;
				width: 100%;
				height: 250px;
				background-size: cover;
			  background-repeat: no-repeat;
			  background-position:center center;
			  &.partner1{
		        .bg-image('/static/images/about/eico-01.png');
		    }
		    &.partner2{
		        .bg-image('/static/images/about/lofter-01.png');
		    }
		    &.partner3{
		        .bg-image('/static/images/about/mvp01-01.png');
		    }
		    &.partner4{
		        .bg-image('/static/images/about/163-01.png');
		    }
		    .mask{
		    	text-align: center;
		    	cursor: pointer;
			    position: absolute;
			    left: 0;
			    right: 0;
			    top: 0;
			    bottom: 0;
			    background: rgba(0,0,0,.5);
			    transition:transform 0.5s;
			    span{
			        width: 100px;
			        height: 44px;
			        line-height: 44px;
			        position: absolute;
			        left: 50%;
			        top: 50%;
			        margin:-22px -50px;  
			        font-weight: bold;
			        color: #ffffff;
			        background-position: center;
			        background-repeat: no-repeat;
			        .bg-image('/static/images/about/hover-link.png');
			    }
		    }
			}
		}
	}
	@media only screen and (max-width: 767px){
		.show_content {
		    padding: 10px;
		    .show_item{
					padding: 10px;
					margin-bottom:10px;
					.img_bg{
						height: 200px;
					}
			}
		}
	}
}

</style>
