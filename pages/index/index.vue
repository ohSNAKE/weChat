<template>
	<view class="container">
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item, index) in bannerList" :key="index">
				<image :mode="item.mode" :src="item.imageUrl"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
    import { banner } from '@/service/song'
	export default {
		data() {
			return {
				bannerList: [],
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500
			}
		},
		mounted() {
		  this.getData()
		},
		methods: {
			getData() {
				banner().then(res => {
					this.bannerList = res.banners
				})
			},
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		
		.swiper{
			border-radius: 4px;
			
			.uni-swiper-item{
				height: 140px !important;
				
				.uni-image{
					width: 100%;
					height: 140px;
				}
			}
		}
	}
</style>
