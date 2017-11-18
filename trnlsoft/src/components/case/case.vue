<template>
  <div>
    <div class="index_banner case_banner">  		
  	</div>
  	   <h2 class="title case_title">提供优秀产品，帮客户创造价值</h2>
    	<p class="sub_title case_subtitle">--用事实说话！</p>
      <div class="server_box  hidden-xs-only">
      	<div class="show_outbox">
       		<div class="server_type">
	          <router-link :to="item.to" v-for="(item,index) in list" :key="index">{{item.html}}</router-link>
	        </div>
	      </div>
	    </div>
      <el-collapse  class="collspse_box" v-model="activeName" accordion>
        <el-collapse-item class="collspse_item" :xs="24" title="分类" name="1">
          <router-link  :to="item.to" v-for="(item,index) of list" :key="index" tag="li" class="li">
            {{item.html}}
          </router-link>
        </el-collapse-item>
      </el-collapse>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Case',
  data(){
  	return{
      list:[{
        name: 'Food',
        to: '/case',
        html: '美食APP'
      },
      {
        name: 'Vegetarian',
        to: '/case/vegetarian',
        html: '素食APP'
      },
      {
        name: 'Pineapple',
        to: '/case/pineapple',
        html: '菠萝油'
      },
      {
        name: 'Flow',
        to: '/case/flow',
        html: '流量无忧'
      }],
      activeName: '0'
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../../static/css/nav.less";
  @media only screen and (max-width: 767px){
    h2.title{
        font-size: 0.24rem;
        width: 300px;
        &.case_title{
	        left: 50%;
			    top: 50%;
			    width: 300px;
			    transform: translate(-50%,-50%);
	    	}
    }  
    p.sub_title{
        font-size: 0.16rem;
        &.case_subtitle{
	        left: 50%;
			    top: 55%;
			    width: 300px;
			    transform: translate(-50%,-50%);
	    	}
    }  
  }
</style>
