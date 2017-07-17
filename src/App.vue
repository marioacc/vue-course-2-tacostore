<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <h1 class="title">Taco Store</h1>
        <h1 class="cart-items">You have {{ items }} items on your cart
          <router-link to="/checkout">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </router-link>
        </h1>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
    </transition>
  </div>
</template>


<script>
/* eslint-disable */
import bus from './bus'

export default {
  name: 'app',
  data () {
    return {
      cart: []
    }
  },
  created () {
  },
  computed: {
    items () {
      return this.$store.getters.itemsOnCart || 0
    }
  }
};
</script>

<style lang="stylus">
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  background-color lighten(#eceef1, 30%)
  margin 0
  padding-top 55px
  color #34495e
  overflow-y scroll

a
  color #34495e
  text-decoration none

.header
  background-color #ff6600
  position fixed
  z-index 999
  height 55px
  top 0
  left 0
  right 0
  .inner
    max-width 800px
    box-sizing border-box
    margin 0px auto
    padding 15px 5px
  h1
    color rgba(255, 255, 255, .8)
    line-height 24px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    letter-spacing .075em
    margin-right 1.8em
    color #fff
    font-size 1.5em
    margin 0
  .cart-items
    font-size 1em
    position absolute
    right 40px
    i
      font-size: 2em;
      vertical-align: middle;
      color white
.logo
  width 24px
  margin-right 10px
  display inline-block
  vertical-align middle

.view
  max-width 800px
  margin 0 auto
  position relative

.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-active
  opacity 0

@media (max-width 860px)
  .header .inner
    padding 15px 30px

@media (max-width 600px)
  .header
    .inner
      padding 15px
    a
      margin-right 1em
    .title
      display none
</style>
