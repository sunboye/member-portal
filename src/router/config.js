const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/LoginPage.vue')
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../components/WelcomePage.vue'),
    },
    {
        path: '/users',
        name: 'users',
        component: () => import('../components/Users/UserManage.vue')
    },
    {
        path: '/recycle',
        name: 'recycle',
        component: () => import('../components/Users/RecyclePage.vue')
    }
]

export default routes
