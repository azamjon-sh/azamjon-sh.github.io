<template>
  <Header/>
  <div class="main">
    <aside class="aside">
      <div class="aside__text">Выберите продукцию</div>
      <select class="aside__select" name="products_list" id="products">
        <option v-for="(item,index) in products" :value="item.id">
          {{ item.title }}
        </option>
      </select>
      <div class="aside__text">Введите количество</div>
      <input type="number" v-model="product_count" class="aside__input">
      <button class="aside__btn">Добавить</button>
    </aside>
    <section class="section">
      <table class="section__table">
        <tr class="section__tr">
          <th class="section__th">
            Название товара
          </th>
          <th class="section__th">
            Количество
          </th>
          <th class="section__th">
            Стоимость
          </th>
        </tr>
      </table>
    </section>
  </div>
  <Footer/>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import axios from 'axios';

export default {
  name: "App",
  data: () => ({
    products: [],
    product_count: 1,
  }),
  components: {
    Header, Footer
  },

  created() {
    axios.get('https://dev-su.eda1.ru/test_task/products.php')
        .then(response => {
          this.products = response.data.products
        })
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}

.aside {
  padding: 0 50px 0 26px;
  max-width: 470px;
}

.aside__select, .aside__input {
  width: 100%;
  height: 40px;
  cursor: pointer;
  color: #0170AE;
  background-color: #EEF8FF;
  padding-left: 16px;
  outline: none;
  border: none;
  border-bottom: 1px solid #2FA6EA;
}

.aside__text {
  margin-top: 40px;
  font-size: 24px;
  line-height: 28px;
  color: #222;
  margin-bottom: 20px;
}

.aside__btn {
  font-size: 24px;
  line-height: 28px;
  color: #fff;
  background: #2FA6EA;
  border-radius: 4px;
  outline: none;
  border: none;
  display: block;
  width: 100%;
  height: 52px;
  margin-top: 48px;
}

.main {
  display: flex;
  align-items: flex-start;

  > * {
    flex-grow: 1;
  }
}

.section {
  padding-top: 90px;
}

.section__table {
  width: 100%;

  .section__th {
    font-size: 24px;
    line-height: 28px;
    color: #0170AE;
    font-weight: 300;
    width: 20%;
    text-align: left;

    &:first-child {
      width: 60%;
    }
  }
}
</style>
