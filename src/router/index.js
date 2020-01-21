import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import User from '../views/User'
import Topic from '../views/Topic'
import Notice from '../views/Notice'
import SubmitNotice from '../views/SubmitNotice'

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/user',
                name: 'user',
                component: User
            },
            {
                path: '/notice',
                name: 'notice',
                component: Notice
            },
            {
                path: '/topic',
                name: 'topic',
                component: Topic
            },
            {
                path: '/toSubmitNotice',
                name: 'submitNotice',
                component: SubmitNotice
            },
        ]
    },
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
});

//全局守卫路由
router.beforeEach((to, from, next) => {
    const LOGINURL = '/login';
    let url, user;
    url = to.path;
    user = sessionStorage.getItem('user');

    if (url === LOGINURL) {
        sessionStorage.removeItem('user');
    }

    //判断是否登录
    if (!user && url != LOGINURL) {
        next({path: LOGINURL});
    } else {
        next();
    }

});

export default router
