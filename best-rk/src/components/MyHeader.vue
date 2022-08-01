<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      showHeader: true,
      headerList: [
        {
          icon: require('@/assets/img/1.svg'),
          text: 'Some text'
        },
        {
          icon: require('@/assets/img/2.svg'),
          text: 'Some text'
        },
        {
          icon: require('@/assets/img/3.svg'),
          text: 'Some text'
        },
        {
          icon: require('@/assets/img/1.svg'),
          text: 'Some text'
        },
        {
          icon: require('@/assets/img/2.svg'),
          text: 'Some text'
        },
        {
          icon: require('@/assets/img/3.svg'),
          text: 'Some text'
        }
      ]
    }
  },
  methods: {
    scrollFunc (event) {
      if (document.documentElement.scrollTop > 100) {
        if (event.deltaY < 0) {
          this.showHeader = true
        } else if (event.deltaY > 0) {
          this.showHeader = false
        }
      } else if (document.documentElement.scrollTop < 100 && !this.showHeader) {
        this.showHeader = true
      }
    }
  },
  mounted () {
    window.addEventListener('wheel', this.scrollFunc)
  }
}
</script>

<template>
  <header class="header">
    <div class="header__top">
      <input class="header__search" type="text"/>
      <button type="submit" class="header__btn" @click.prevent>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
             x="0px" y="0px" viewBox="0 0 487.95 487.95"
             xml:space="preserve" width="24" height="24px">
          <g><g><path d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1    c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4    c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"/></g></g></svg>
      </button>
    </div>
    <div class="header__list" v-if="showHeader">
      <div class="header__item" v-for="(item, index) in headerList" :key="index">
        <div class="header__icon"><img :src="item.icon" alt=""></div>
        <div class="header__text">{{ item.text }}</div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">

</style>
