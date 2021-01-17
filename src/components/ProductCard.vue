<template>
  <div class="product-card" >
    <img
        :src="imgUrl"
        :alt="title"
        class="w300"
    >
    <div class="product-card__info">
      <h2>{{ title }}</h2>
      <p class="price">{{ price }}руб.</p>
      <p class="count">Доступно для доставки {{ count }}шт.</p>
      <button type="button" @click="addToBasket">Добавить в корзину</button>

    </div>

    <div :isCuisine="isCuisine" class="mt20">
      нужно только это передать
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    isCuisine: {
      type: Boolean,
    },

    title: {
      type: String,
      validator(value) {
        return value.length < 50
      }
    },
    price: {
      type: Number,
      required: true
    },
    imgUrl: {
      type: String,
      default: 'https://tsum.by/images/no-photo.png'
    },
    count: {
      type: Number,
      default: 0
    }
  },

  methods: {
    addToBasket() {
      this.$emit('addToBasket')
    }
  }
}
</script>

<style lang="scss">
.w300 {
  width: 300px;
}

.product-card {
  border: 1px solid rgb(211, 211, 211);
  padding: 20px 15px;

  &__info {
    margin-top: 20px;

    h2, .price {
      font-weight: 500;
    }

    .count {
      color: rgb(143, 143, 143);
    }

    button {
      background-color: rgb(221, 56, 56);
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 8px 14px;
      display: block;
      cursor: pointer;
      margin-top: 20px;
    }
  }
}

</style>
