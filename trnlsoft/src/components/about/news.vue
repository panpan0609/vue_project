<template>
  <div>
    <el-container class="show_outbox">
      <el-main class="news_box">
      	<h2 class="title">新闻动态</h2>
      	 <el-row class="show_content">
	        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8"  v-for="(it,index) in list" :key="index" class="news_item"  @mouseenter.native="mouseenter(it)" @mouseleave.native="mouseleave(it)">
	          	<el-col class="item" :class="{showScale:it.detailShow}">
		          	<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="img_bg" :class="it.className">	  
		          		<div class="mask" v-show="it.detailShow">
		                  <span></span>
		                </div>          
			        	</el-col>
		           	<el-col :sm="24" :md="24" :lg="24" :xl="24" class="text hidden-xs-only">
			            <h2>{{it.title}}</h2>
			            <p class="subtitle">{{it.subtitle}}</p>
			            <p class="time">发布时间:{{it.time}}</p>
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
  name: 'News',
  data(){
    return{
    	list:[
    		{
    			className:"bg1",
    			title:"丁香园添加新成员-APP来问医生",
    			subtitle:"丁香园再添加新成员来问医生，最近已经上线微信平台和APP版本...",
    			time:"2016-07-16 10:00:05",
    			detailShow: false
    		},
    		{
    			className:"bg2",
    			title:"易到CEO周航致信马化腾",
    			subtitle:"昨天晚上，易到公司发布专车比价软件应用，但是该应用转发。...",
    			time:"2016-07-16 10:00:05",
    			detailShow: false
    		},
    		{
    			className:"bg3",
    			title:"微信-分答席卷朋友圈",
    			subtitle:"最近在一个付费语音问答平台低调上线，但是因各路名人爆出在...",
    			time:"2016-07-16 10:00:05",
    			detailShow: false
    		},
    		{
    			className:"bg4",
    			title:"易启嗨微信公众号上线",
    			subtitle:"校园快递外卖，服务到宿舍，新的易启嗨微信公众号改版上线了...",
    			time:"2016-07-16 10:00:05",
    			detailShow: false
    		},
    		{
    			className:"bg5",
    			title:"互联网家装",
    			subtitle:"2015年初，家装行业悄然登陆互联网行业。这个被业界认为不容易...",
    			time:"2016-07-16 10:00:05",
    			detailShow: false
    		},
    		{
    			className:"bg6",
    			title:"VR-HTC Vive风投成立子公司",
    			subtitle:"据外国媒体报道，HTC欲将和Value合作开发的HTC Vive打造成全...",
    			time:"2016-07-16 10:00:05",
    			detailShow: false
    		},
    		{
    			className:"bg7",
    			title:"WWDC2016-互联网企业的打击",
    			subtitle:"在最近的苹果WWDC2016发布会上，苹果跨出开放生态的第一步-提供原生...",
    			time:"2016-07-16 10:00:05",
    			detailShow: false
    		},
    		{
    			className:"bg8",
    			title:"高考资讯-您的好友分数线君已上线",
    			subtitle:"高考进程紧凑，前天各大考区的分数线已公布出来。广东省跟往年不同的是...",
    			time:"2016-07-16 10:00:05",
    			detailShow: false
    		},
    		{
    			className:"bg9",
    			title:"TRNLSOFT官方网站正式上线",
    			subtitle:"天软农联官方网站正式上线，我们整合了资源和业务成为新的时代引领者...",
    			time:"2016-07-16 10:00:05",
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
	    },
	    clickCallback:function(pageNum) {
	      console.log(pageNum);
	    }
	}
}
</script>

<style lang="less" scoped>
@import "../../../static/css/mixins.less";
.news_box{
	h2.title{
		font-size: 0.24rem;
		line-height: 0.3rem;
		padding-bottom: 10px;
	}
	.show_content{
		overflow: hidden;
		.news_item{
			padding: 20px;
			.showScale{
				box-shadow:0px 0px 5px #ccc;
	    	transform:scale(1.03);
	    	transition:transform 0.5s;
	    }
			.item{
				text-align: left;
				border: 1px solid #ededed;
				.text{
					padding:15px 10px;
					h2{
						font-size: 0.18rem;
						line-height: 0.3rem;
						padding-bottom: 10px;
						color: #1D8DFA;
						padding-bottom: 10px;
					}
					p{
						line-height: 0.26rem;
					    font-size: 0.15rem;
					    &.subtitle{
							color: rgb(102,102,102);
						}
						&.time{
							color: rgb(155, 163, 175);
						}
					}
					
				}
				.img_bg{
					position: relative;
					width: 100%;
					height: 220px;
					background-size: cover;
				  background-repeat: no-repeat;
			    &.bg1{
			        .bg-image('/static/images/about/1-160F112164R55.png');
			    }
			    &.bg2{
			        .bg-image('/static/images/about/1-160F51214450-L.png');
			    }
			    &.bg3{
			        .bg-image('/static/images/about/1-160FZ945060-L.png');
			    }
			    &.bg4{
			        .bg-image('/static/images/about/1-160G3214K50-L.png');
			    }
			    &.bg5{
			        .bg-image('/static/images/about/1-160G60944560-L.png');
			    }
			    &.bg6{
			        .bg-image('/static/images/about/1-16062G1231T24.jpg');
			    }
			    &.bg7{
			        .bg-image('/static/images/about/1-1606301051090-L.jpg');
			    }
			    &.bg8{
			        .bg-image('/static/images/about/1-1606251154290-L.png');
			    }
			    &.bg9{
			        .bg-image('/static/images/about/1-16062Z93F90-L.jpg');
			    }
			    .mask{
			    	text-align: center;
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
	}
}
.paginate-list{
  width: 159px;
  margin: 0 auto;
  text-align: left;
  li{
    display: block;
    &:before{
       content: 'o ';
       font-weight: bold;
       color: slategray;
    } 
   }
}
.paginate-links.items{
  user-select: none;
  a{
  	cursor: pointer;
  }
  li.active a{
  	 font-weight: bold;
  }
  li.next:before{
  	content: ' | ';
    margin-right: 13px;
    color: #ddd;
  }
  li.disabled a{
  	color: #ccc;
    cursor: no-drop;
  }
}
</style>
