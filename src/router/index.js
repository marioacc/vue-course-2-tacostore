/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import TacoView from '@/components/TacoView';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/tacos/1' },
    { path: '/tacos/:page', name: 'taco-view', component: TacoView },
  ],
});
