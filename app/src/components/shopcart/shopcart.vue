<template>
  <div class="shopcart">
    <div class="content">
    	<div class="content-left">
	    	<div class="logo-wrapper">
	    		<div class="logo">
	    			<i class="icon-shopping_cart"></i>
	    		</div>
	    	</div>
	    	<div class="price">
	    		0元
	    	</div>
	    	<div class="desc">另需配送费￥12元</div>
	    </div>
	    <div class="content-right">
	    	<div class="pay">20</div>
	    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shopcart',
  props: {
    deliveryPrice: {
        type: Number,
        default: 0
    },
    minPrice: {
        type: Number,
        default: 0
    }
  }
}
</script>

<style lang="less" scoped>
	.shopcart{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 50;
		width: 100%;
		height: 48px;
		.content{
			display: flex;
			font-size: 0;
			background: #141d27;
			color: rgba(255,225,225,0.4);
			.content-left{
				flex:1;
				.logo-wrapper,.price,.desc{
					display: inline-block;
					vertical-align: top;
				}
				.logo-wrapper{
					top: -10px;
					position: relative;
					margin: 0 12px;
					padding: 6px;
					width: 56px;
					height: 56px;
					box-sizing: border-box;
					border-radius: 50%;
					background: #141d27;
					.logo {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        background: #2b343c;
                        text-align: center;
                        .icon-shopping_cart {
                            font-size: 24px;
                            line-height: 44px;
                            color: #80858a;
                        }
                    }
				}
				.price{
                    display: inline-block;
                    line-height: 24px;
                    margin-top: 12px;
                    padding-right: 12px;
                    box-sizing: border-box;
                    border-right: 1px solid rgba(255, 255, 255, .1);
                    font-size: 16px;
                    font-weight: 700;
				}
				.desc{
                    line-height: 24px;
                    margin: 12px 0 0 12px;
                    font-size: 10px;
				}
			}
			.content-right{
				flex:0 0 105px;
				width: 105px;
				background: #2b333b;
                .pay {
                    height: 48px;
                    line-height: 48px;
                    text-align: center;
                    font-size: 12px;
                    font-weight: bold;
                }
			}
		}
	}
</style>