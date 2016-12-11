// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from 'components/goods/goods'
import seller from 'components/seller/seller'
import ratings from 'components/ratings/ratings'

import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
	{path: '/goods', component: goods, name: 'goods'},
	{path: '/ratings', component: ratings},
	{path: '/seller', component: seller}
]

const router = new VueRouter({
	linkActiveClass: 'active',
	routes
})

/* eslint-disable no-new */
new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app')

router.push('goods')