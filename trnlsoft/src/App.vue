<template>
  <div id="app"> 
	 <div class="header" id="header" :style="{backgroundColor:header_bg}">
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" :offset="2" class="header-logo">
         <img src="./assets/phone-logo.png" class="white_logo"  alt="" v-show="imgWhiteshow">
         <img src="./assets/phone-blue.png" class="blue_logo"  alt="" v-show="imgBlueshow">
        </el-col>
     	<el-col  :sm="16" :md="16" :lg="16" :xl="16" :offset="1" class="header-nav hidden-xs-only">
         <router-link  :to="item.to" class="item" v-for="(item,index) of list" :key="index" :style="{color:item_text}">
        	{{item.html}}
      	</router-link>	
      </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" :offset="16" class="header-icon hidden-sm-and-up" @click.native="shownav = ! shownav">
      	<img src="./assets/icon.png"/>
      </el-col>
      <transition name="slide-fade">
			    <el-col :xs="24" class="toggle-nav hidden-sm-and-up" v-show="shownav">
	          	<router-link  :to="item.to" class="item" v-for="(item,index) of list" :key="index">
			        	{{item.html}}
			      	</router-link>	
          </el-col>
			  </transition>
  </div>
  <router-view/>
  <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from '@/components/footerNav'
export default {
  name: 'app',
  data(){
    return{
      list:[{
        name: 'Index',
        to: '/',
        html: '网站首页'
      },
      {
        name: 'Server',
        to: '/server',
        html: '服务项目'
      },
      {
        name: 'About',
        to: '/about',
        html: '关于我们'
      },
      {
        name: 'Case',
        to: '/case',
        html: '开发案例'
      },
      {
        name: 'Connection',
        to: '/connection',
        html: '联系我们'
      }],
      shownav:false,
      imgWhiteshow:true,
      imgBlueshow:false,
      header_bg:"rgba(255,255,255,0)",
      item_text:"#FFFFFF"
    }
  },
  components:{
    footerNav
  },
  methods:{
    tabScroll(){
      window.addEventListener("scroll",this.handleScroll);
    },
    handleScroll(){
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      if(t >= 150) { 
          this.imgBlueshow = true;
          this.imgWhiteshow = false;
          this.header_bg = "rgba(255,255,255,1)"; 
          this.item_text="rgb(100, 106, 117)";
      } else { 
          this.imgBlueshow = false;
          this.imgWhiteshow = true;
          this.header_bg = "rgba(255,255,255,0)"; 
          this.item_text="#FFFFFF";
      } 
    }
  },
  mounted:function(){
    this.tabScroll();
  }
}
</script>

<style lang="less">
@import "../static/css/mixins.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*公用样式*/
.show_outbox {
	margin-right: auto;
	margin-left: auto
}
@media (min-width:768px) {
	.show_outbox {
		width: 750px
	}
}
@media (min-width:992px) {
	.show_outbox {
		width: 970px
	}
}
@media (min-width:1200px) {
	.show_outbox {
		width: 1170px
	}
}
html,body{
  font-size:100px;
  width: 100%;
  height: 100%;
}
.header{
  width: 100%;
  top: -1px;
  position: fixed;
  z-index: 99;
  .shadow();
  .header-logo{
    line-height: 70px;
    .white_logo{
      width: 80px;
      padding: 10px 0;
    }
    .blue_logo{
      width: 90px;
      padding: 15px 0;
    }
  }
  .header-nav{
    justify-content: flex-end;
    display: flex;
    align-items: center;
    line-height: 70px;
    .item{
      padding: 0 0.15rem;
      font-size: 0.16rem;
      cursor: pointer;
    }
  }
  .header-icon{
  	display: none;
    line-height: 70px;
    text-align: right;
    img{
    	padding: 19px 0;
    }
  }
}
.toggle-nav{
	background: #e7e7e7;
	width: 100%;
	.item{
		text-align: left;
		display: block;
		padding: 10px 15px;
		line-height: 20px;
		font-size: 0.16rem;
    cursor: pointer;
    color: rgb(100, 106, 117);
	}
}
@media only screen and (max-width: 767px){
	.header-icon {
	    display: block!important;
	}
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
