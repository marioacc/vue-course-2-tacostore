<template>
  <div class="checkout-view">
    <div class="tacos-list" v-if="cart.length">
    <ul>
      <taco v-for="taco in cart" :key="taco.id" :taco="taco">
        <span class="remove-item">
          <button class="button" @click="removeItem(taco)">Remove Item</button>
        </span>
      </taco>
     </ul>
      <div class="totals">
        <p class="total-amount">Amount: ${{ totalAmount }}</p>
        <p>Types:</p>
        <p class="type" v-for="type in types" :key="type">{{ type }}</p>
        <button class="button" @click="emptyCart()">Buy</button>
      </div>
    </div>
    <router-link v-else to="/tacos/1">No more items <br> <- Go back to the store</router-link>
  </div>
</template>

<script>
import Taco from './Taco'

export default {
  name: 'checkout',
  components: {
    Taco
  },
  data () {
    return {

    }
  },
  computed: {
    cart () {
      return this.$store.state.cart
    },
    totalAmount () {
      return this.cart.length && this.cart.map((item) => item.price).reduce((prev, current) => prev + current)
    },
    types () {
      return [...new Set(this.cart.map(item => item.type))]
    }
  },
  methods: {
    removeItem (taco) {
      this.$store.commit('REMOVE_TACO', { id: taco.id })
    },
    emptyCart () {
      this.$store.commit('EMPTY_CART')
    }
  }
}
</script>

<style lang="stylus">

  .remove-item
    position: absolute;
    right: 20px;
    top: 40%;

  .totals
    background-color #fff
    border-bottom 1px solid #eee
    position relative
    padding 20px
    line-height 20px
    p
      display inline
      margin-left 20px
      font-size 1.1em
      font-weight 700
    .total-amount
      color #ff6600
    .type
      border-left 2px solid goldenrod
      padding-left 10px
      font-weight 500

  .tacos-list
    position relative

  .button
    background-color green
    border none
    border 2px solid green
    color white

</style>
