import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import AboutUs from './components/AboutUs';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About Us',
            component: AboutUs
        },
    ]
});

export default router;