<template>
  <div class="slider">

    <h2>Новый блок</h2>
    <swiper
      :slides-per-view="1"
      :space-between="20"
    >
      <swiper-slide v-for="(item,index) in slideList" :key="index">
        <div class="slide__item">
          <span>{{ item }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    slideList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
