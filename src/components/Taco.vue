<template>
    <li class="taco-item">
        <span class="price">${{ taco.price }}</span>
        <span class="title">
            <template v-if="taco.url">
                <a :href="taco.url" target="_blank" rel="noopener">{{ taco.title }}</a>
                <span class="host"> ({{ taco.url }})</span>
            </template>
            <template v-else>
                <router-link :to="'/taco/' + taco.id">{{ taco.title }}</router-link>
            </template>
        </span>
        <br>
        <span class="meta">
            <span class="by">
                by
                {{ taco.by }}
            </span>
            <span class="time">
                {{ taco.time }} ago
            </span>
        </span>
        <span class="type" >{{ taco.type }}</span>
    </li>
</template>

<script>
/* eslint-disable*/

export default {
    name: 'taco',
    props: ['taco'],
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .taco-item
    background-color #fff
    padding 20px 30px 20px 80px
    border-bottom 1px solid #eee
    position relative
    line-height 20px
    .price
      color #ff6600
      font-size 1.1em
      font-weight 700
      position absolute
      top 50%
      left 0
      width 80px
      text-align center
      margin-top -10px
    .type
      color green
      font-size 1.1em
      font-weight 700
      position absolute
      top 50%
      left 50%
      width 80px
      text-align center
      margin-top -10px
    .meta, .host
      font-size .85em
      color #828282
      a
        color #828282
        text-decoration underline
        &:hover
          color #ff6600
</style>

