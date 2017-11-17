<template>
  <div>
    <div class="index_banner connect_banner">  		
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
  name: 'Connection',
  data(){
  	return{
      list:[{
        name: 'Company',
        to: '/connection',
        html: '广州总公司'
      },
      {
        name: 'Branch',
        to: '/connection/branch',
        html: '顺德办事处'
      }],
      activeName: '0'
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../../static/css/nav.less";
  
</style>
