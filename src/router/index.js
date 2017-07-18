/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import TacoView from '@/components/TacoView';
import SingleTacoView from '@/components/SingleTacoView';
import CheckoutView from '@/components/CheckoutView';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/tacos/1' },
    { path: '/tacos/:page', name: 'taco-view', component: TacoView },
    { path: '/taco/:id', name: 'taco', component: SingleTacoView },
    { path: '/checkout', name: 'checkout', component: CheckoutView }
  ],
});
