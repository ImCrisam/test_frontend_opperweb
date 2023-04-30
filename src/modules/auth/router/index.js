export default {
    name: "auth",
    children: [
        {
            path: '',
            name: 'login',
            component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue'),
        },
    ]
}