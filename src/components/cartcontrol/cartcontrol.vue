<!--
** descripition:[desc]
** author perry
** date 16/12/24
-->
<template>
	<div class="cartcontrol">
		<transition name="move">
			<div class="cart-decrease" v-show="food.count > 0"
					 @click="decreaseCart">
					<i class="icon-remove_circle_outline"></i>
			</div>
		</transition>
		<div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
		<div class="cart-add" @click="addCart">
			<i class="icon-add_circle"></i>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import Vue from 'vue';
	import eventHub from '../../eventhub';

	export default {
		props: {
			food: {
				type: Object
			}
		},
		methods: {
			addCart (event) {
				if (!event._constructed) {
					return;
				}
				if (!this.food.count) {
					Vue.set(this.food, 'count', 1)
					this.food.count = 1;
				} else {
					this.food.count++;
				}
				eventHub.$emit('cart.add', event.target);
			},
			decreaseCart (event) {
				if (!event._constructed) {
					return;
				}

				if (this.food.count) {
					this.food.count--;
				}
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size 0
		.move-enter-active, .move-leave-active
			transition all 0.4s linear
			transform translate3d(0, 0, 0) rotate(0)
		.move-enter, .move-leave-active
			opacity 0
			transform translate3d(24px, 0 , 0) rotate(180deg)
		.cart-decrease
			display inline-block
			padding 6px
			line-height 24px
			font-size 24px
			color rgb(0, 120, 220)
		.cart-count
			display inline-block
			vertical-align top
			width 12px
			padding-top 6px
			line-height 24px
			text-align center
			font-size 10px
			color rgb(147, 153, 159)
		.cart-add
			display inline-block
			padding 6px
			line-height 24px
			font-size 24px
			color rgb(0, 120, 220)
</style>
