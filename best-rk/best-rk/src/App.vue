<template>
  <my-header />
  <main>
    <my-slider :slide-list="slideList"/>
    <my-slider :slide-list="slideList"/>
    <my-slider :slide-list="slideList"/>
    <my-slider :slide-list="slideList"/>
  </main>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MySlider from '@/components/MySlider'

export default {
  name: 'App',
  components: {
    MyHeader, MySlider
  },
  data () {
    return {
      slideList: [
        'Здесь будет содержание этого слайда',
        'Здесь будет содержание этого слайда', 'Здесь будет содержание этого слайда', 'Здесь будет содержание этого слайда'
      ]
    }
  }

}
</script>

<style lang="scss">
@import "@/assets/main.scss";
</style>
