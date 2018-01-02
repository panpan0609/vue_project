<template>
  <div class="box">
    <!-- 粒子插件 -->
    <div id="particles">
      <div class="particles-text">
        <h3>不仅仅是软件开发</h3>
        <p>天软农联-行业顶尖的技术团队</p>
        <button>了解详情</button>
      </div>
    </div>
    
     <el-container class="show_outbox">
      <el-main class="case">
      <h2 class="case_title">有效支持客户的业务战略</h2>
      <p class="case_title">天软农联服务于互联网在多平台的解决方案</p>
      <el-row class="show_case show_type animated">
        <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4"  v-for="(it,index) in lis" :key="index" class="item">       	
	          <el-col :xs="8" :sm="24" :md="24" :lg="24" :xl="24">
	            <img :src="it.src" alt="">
	          </el-col>
	           <el-col :xs="16" :sm="24" :md="24" :lg="24" :xl="24">
	            <h2>{{it.title}}</h2>
	            <p>{{it.subtitle}}</p>
	          </el-col>
        </el-col>
      </el-row>
      
      <el-row class="show_type animated">
	        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="show_item">
	            <h2>行业领先的技术水平</h2>
	            <p>我们的成员来自顶尖互联网公司和一流大学，有丰富的产品开发经验。基于合作双赢模式，为您打造优质产品。</p>
	        </el-col>
	        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="show_img">
	            <img src="/static/images/chengyuan-01.png" alt="">
	        </el-col>
      </el-row>
      <el-row class="show_type animated">
	        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="show_img">
	            <img src="/static/images/liucheng-01.png" alt="">
	        </el-col>
	        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="show_item">
	            <h2>专业流程化制作产品</h2>
	            <p>从用户需求调研到产品架构、研发、测试一系列专业、细致、严谨的内部研发流程，确保按时交付让用户满意的产品</p>
	        </el-col>
      </el-row>
      <el-row class="show_type animated">
	        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="show_item">
	            <h2>UI、UX设计</h2>
	            <p>从研究中发现体验价值，并将其转化为符合使用场景和用户真正需求的交互模型。为品牌与用户之间提供最有效的沟通方式及具有创新性和直觉性的信息组织方式。</p>
	        </el-col>
	        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="show_img">
	            <img src="/static/images/unknow-1-01.png" alt="">
	        </el-col>
      </el-row>
      <el-row class="show_type animated">
	        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="show_img">
	            <img src="/static/images/unknow-2-01.png" alt="">
	        </el-col>
	        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="show_item">
	            <h2>为客户带来真实有效的收益</h2>
	            <p>紧紧围绕产品做可落地的商业创新，并根据市场目标做切实可行的产品方案。TRNL关注用户体验做可运转的高质量产品。</p>
	        </el-col>
      </el-row>
      </el-main>
    </el-container>
    <el-container>
    	<el-main>
    		<!-- 案例展示 -->
        <h2 class="case_title">TRNL案例和方案展示</h2>
        <p class="case_title">我们更喜欢卷起衣袖，开始一个全新的项目。</p>
        <el-row class="show_list">
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" v-for="(item,index) in list" :key="index" @mouseenter.native="mouseenter(item)" @mouseleave.native="mouseleave(item)" class="show_item">
               <img :src="item.src" alt="" :class="{showScale:item.detailShow}">
                <div class="mask" v-show="item.detailShow">
                  <span>查看例子</span>
                </div>
          </el-col>
        </el-row>
    	</el-main>
    </el-container>
   
  </div>



</template>
<script>
import particles from 'particles.js';
export default {
  name: 'Index',
  data() {
    return{
      list:[{
        src: '/static/images/case1.png',
        detailShow: false
      },
      {
        src: '/static/images/case2.png',
        detailShow: false
      },
      {
        src: '/static/images/case3.png',
        detailShow: false
      },
      {
        src: '/static/images/case4.png',
        detailShow: false
      },
      {
        src: '/static/images/case5.png',
        detailShow: false
      },
      {
        src: '/static/images/case6.png',
        detailShow: false
      }],
      lis:[{
        src:'/static/images/app-01.png',
        title:'APP开发',
        subtitle:'基于iOS、Android平台帮助您开发各类APP，涵盖各领域'
      },
      {
        src:'/static/images/website-01.png',
        title:'网站&H5开发',
        subtitle:'从需求分析到前端设计开发，最后后期质保完整流程方案'
      },
      {
        src:'/static/images/weixin-01.png',
        title:'微信开发',
        subtitle:'基于微信平台实现订阅号、服务号、企业号和应用号开发产品'
      },
      {
        src:'/static/images/o2o-01.png',
        title:'O2O平台开发',
        subtitle:'敏锐观察行业需求和痛点，做可以落地实在的平台'
      },{
        src:'/static/images/ruanjian-01.png',
        title:'软件定制',
        subtitle:'根据企业个性化定制软件，让软件适应企业发展'
      }],
//    msg:''
    }
  },
//created:function(){
//		window.axios.get(window.HOST+'/home/index/index')
//			.then(response=>{
//			 console.log(response);
//			 this.msg=response.data.msg;
//			})
//			.catch(error=>{
//			  console.log(error);
//			  alert('网络错误，不能访问');
//			})
//	},
  mounted:function(){
    particlesJS.load('particles','../../static/particles.json');
		this.handleFun();
		this.handleScroll();
	  window.addEventListener("resize",this.handleFun);
	  window.addEventListener("scroll",this.handleScroll);
      
  },
  methods:{
	  handleFun(){
	    let orderHeight = document.body.clientHeight,
            orderWidth = document.body.clientWidth;
        document.getElementById("particles").style.height=orderHeight+'px'; 
        document.getElementById("particles").style.width=orderWidth+'px';   
	  },
	  handleScroll(){
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      let show_types = document.getElementsByClassName('show_type');
      for (let i=0,j=false;i<show_types.length;i++) {
        if(t+document.body.clientHeight>show_types[i].offsetTop+show_types[i].clientHeight/2){
          show_types[i].classList.add('fadeInUp');
          show_types[i].classList.remove('fadeOutDown');
        }else if (t<show_types[i].offsetTop+show_types[i].clientHeight/2){
          show_types[i].classList.add('fadeOutDown');
          show_types[i].classList.remove('fadeInUp');
        }
      }
    },
    mouseenter:function(item) {
      item.detailShow = true;
    },
    mouseleave:function(item) {
      item.detailShow = false;
    }
	},
	beforeDestroy(){
	  window.removeEventListener("resize",this.handleFun);
	  window.removeEventListener("scroll",this.handleScroll);
	}
  
}

</script>

<style lang="less" scoped>
.el-main {
  overflow: hidden;
}
#particles{
  width: 100%;
  height: 100%;
  background-color: #292E3D;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  .particles-text{
    position: absolute;
    top: 50%;
    left: 50%;
    color: #FFFFFF;
    transform:translate(-50%,-50%);
    letter-spacing: 0.8px;
    font-size: 0px;
    h3{
      font-size:0.6rem;
      margin: 20px 0 10px 0;
    }
    p{
      font-size:0.24rem;
      padding: 0.12rem 0;
    }
    button{
      color: #FFFFFF;
      background: transparent;
      border:1px solid rgba(255,255,255,.8);
      border-radius: 0.05rem;
      padding:10px 15px;
      font-size: 0.14rem;
    }
  }
}
@media only screen and (max-width: 767px){
	#particles{
		.particles-text{
	    h3{
	      font-size:0.24rem;
	      width: 300px;
	    }
	    p{
	      font-size:0.16rem;
	    }
	    button{
	      font-size: 0.14rem;
	    }
	  }
  }
}
.box{
	h2{
      font-size: 0.24rem;
    }
    h2.case_title{
      padding: 80px 0 20px;
    }
    p.case_title{
      padding-bottom: 20px;
      color: #999;
      font-size: 0.16rem;
    }
}
  .case{
    .show_case{
      padding-bottom: 50px;
      border-bottom: 1px solid #EEEEEE;
      .item{
        margin: 0 1.666%;
        padding: 0 10px;
        img{
          width: 50px;
        }
        h2{
          padding: 10px 0;
          font-size: 0.18rem;
        }
        p{
          font-size: 0.14rem;
          line-height:0.18rem;
          color: rgb(100, 106, 117);
        }
      }
    }
    .show_type{
      padding:0 20px 50px;
      border-bottom: 1px solid #EEEEEE;
      opacity: 0;
      .show_item{
        text-align: left;
        padding-left: 8.3333%;
        h2{
          margin-top: 90px;
          font-size: 0.24rem;
          padding-bottom: 11px;
        }
        p{
          width: 90%;
          line-height: 0.26rem;
          font-size: 0.16rem;
        }
      }
      .show_img{
        img{
          height: 300px;
        }
      }
    }
    @media only screen and (max-width: 767px){
    	.show_type{
	      padding:0;
	      .show_item{
	        text-align: center;
	        padding-left:0;
	        h2{
	          margin-top: 50px;
	          font-size: 0.24rem;
	          padding-bottom: 20px;
	        }
	        p{
	          width: 100%;
	          line-height: 0.26rem;
	          font-size: 0.16rem;
	        }
	      }
	      .show_img{
	        img{
	          width: 100%;
	          height: 100%;
	        }
	      }
	    }
    }
    .case_box,
    .case_box2{
    	margin: 0 40px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-bottom: 1px solid #eeeeee;
    }
  
    .case_box2 li{
      text-align: left;
      h2{
        font-size: 0.24rem;
        padding-bottom: 20px;
      }
      span{
        display: block;
        height: 0.2rem;
        font-size: 0.14rem;
      }
      img{
        display: block;
        width: 300px;
      }
    }
  }
  .show_list{
      .show_item{
        position: relative;
        overflow: hidden;
        .mask{
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          cursor: pointer;
          bottom: 0;
          background: rgba(0,0,0,.5);
          span{
            width: 100px;
            height: 30px;
            line-height: 30px;
            font-size:0.12rem;
            border: 2px solid #ffffff;
            position: absolute;
            left: 50%;
            top: 50%;
            margin:-15px -50px;  
            font-weight: bold;
            color: #ffffff;
          }
        }
        img{
          width: 100%;
          display: block;
        }
        .showScale{
        	transform:scale(2);
        	transition:transform 1s;
        }
      }
    }
  .slide-fade{
	  position: absolute;left:0;right: 0;
	}
	.slide-fade-enter-active {
	  transition: all 1.2s ease;
	}
	.slide-fade-leave-active {
	
	  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to{
	  left:0;right: 0;
	  transform: translateX(50px);
	  opacity: 0;
	}
</style>
