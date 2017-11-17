<template>
  <div>
  	<div class="index_banner server_banner">  		
  	</div>
    <h2 class="title server_title">拒绝模板 支持高端定制</h2>
    <p class="sub_title server_subtitle">--TRNL</p>   
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
    <router-view class="aaa"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Server',
  data(){
  	return{
      list:[{
        name: 'Website',
        to: '/server',
        html: '网站系统开发'
      },
      {
        name: 'Customization',
        to: '/server/customization',
        html: '软件定制服务'
      },
      {
        name: 'Platform',
        to: '/server/platform',
        html: '电商平台开发'
      },
      {
        name: 'Wechat',
        to: '/server/wechat',
        html: '微信公众号深度开发'
      },
      {
        name: 'Mobile',
        to: '/server/mobile',
        html: '移动APP开发'
      }],
      activeName: '0'
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../../static/css/nav.less";
  
</style>
