<template>
    <div class="taco-list-view">
        <div class="search-nav">
        </div>
        <div class="tacos-list-nav">
            <router-link v-if="page > 1" :to="'/tacos/' + (page - 1)">&lt; prev</router-link>
            <a v-else class="disabled">&lt; prev</a>
            <span>{{ page }}/{{ maxPage }}</span>
            <router-link v-if="hasMore" :to="'/tacos/' + (page + 1)">more &gt;</router-link>
            <a v-else class="disabled">more &gt;</a>
        </div>
        <div class="tacos-list" v-if="displayedPage > 0">
            <ul>
                <taco v-for="taco in displayedItems" :key="taco.id" :taco="taco">
                  <span class="buy">
                    <input type="checkbox" :id="taco.id" :name="taco.id"  :checked="isTacoInCart(taco.id)" @change="tacoChanged($event, taco)">
                    <label :for="taco.id"></label>
                  </span>
                </taco>
            </ul>
        </div>
        </transition>
    </div>
</template>

<script>
/* eslint-disable*/
import Taco from './Taco';

export default {
    name: 'taco-view',
    components: { Taco },
    data() {
        return {
            displayedPage: 1,
            displayedItems: this.$store.getters.activeTacos,
        };
    },
    computed: {
        page() {
            return Number(this.$route.params.page) || 1;
        },
        maxPage() {
            const { itemsPerPage, tacos } = this.$store.state
            return Math.ceil(Object.keys(tacos).length / itemsPerPage);
        },
        hasMore() {
            return this.page < this.maxPage;
        },
    },
    watch: {
      page (to, from) {
       this.loadItems(to, from)
      }
    },
    methods: {
      tacoChanged(event, taco) {
        if (event.target.checked) {
          this.$store.commit('ADD_TACO', { taco })
          return
        }
        this.$store.commit('REMOVE_TACO', { id: taco.id })
      },
      loadItems(to = this.page, from = -1) {
        this.$store.dispatch('fetchTacos')
        .then(() => {
          this.displayedItems = this.$store.getters.activeTacos
        })
      },
      isTacoInCart (id) {
        return this.$store.state.cart.some(item => item.id === id)
      }
    },
    created() {
      this.$store.dispatch('fetchTacos')
      .then(() => {

      })
    },
};
</script>

<style lang="stylus">
.tacos-list-view
  padding-top 45px

.tacos-list-nav, .tacos-list
  background-color #fff
  border-radius 2px

.search-nav
  display flex
  height 30px
  border-radius 2px
  margin-top 30px

.tacos-list-nav
  padding 15px 30px
  position fixed
  text-align center
  top 55px
  left 0
  right 0
  z-index 998
  box-shadow 0 1px 2px rgba(0,0,0,.1)
  a
    margin 0 1em
  .disabled
    color #ccc

.tacos-list
  position absolute
  margin 30px 0
  width 100%
  transition all .5s cubic-bezier(.55,0,.1,1)
  ul
    list-style-type none
    padding 0
    margin 0

.slide-left-enter, .slide-right-leave-to
  opacity 0
  transform translate(30px, 0)

.slide-left-leave-to, .slide-right-enter
  opacity 0
  transform translate(-30px, 0)

.item-move, .item-enter-active, .item-leave-active
  transition all .5s cubic-bezier(.55,0,.1,1)

.item-enter
  opacity 0
  transform translate(30px, 0)

.item-leave-active
  position absolute
  opacity 0
  transform translate(30px, 0)

.buy
  top 25%
  left 80%
  width 40px
  height 10px
  background #555
  margin 20px 80px
  position absolute
  border-radius 3px
  input[type=checkbox]
    visibility: hidden
  input[type="checkbox"]:checked + label
    left 27px
    background green
  label
    display block
    width 16px
    height 16px
    border-radius 50%
    transition all .5s ease
    cursor pointer
    position absolute
    top -3px
    left -3px
    background #ccc


@media (max-width 600px)
  .tacos-list
    margin 10px 0
</style>
