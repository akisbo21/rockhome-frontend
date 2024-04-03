import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

import ListPge from "../page/List";
import Show from "../page/Show";

const router = new VueRouter({
	mode: 'history',
	routes : [
        { path: '/ingatlan/lista', component: ListPge },
        { path: '/ingatlan/adatlap/:id', component: Show },
        { path: '/', redirect: '/ingatlan/lista', component: ListPge },
	]
})


export default router
