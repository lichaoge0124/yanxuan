import { createRouter, createWebHashHistory } from "vue-router";

const asyncRoutes = [
    {
        path: "/",
        redirect:"/home"
    },
    {
        path: "/home",
        component: () => import('../views/Home/Home.vue'),
        meta: {
            isshow:true
        }
    },
    {
        path: "/cart",
        component: () => import('../views/Cart/Cart.vue'),
        meta: {
            isshow: true
        }
    },
    {
        path: "/category",
        component: () => import('../views/Category/Category.vue'),
        meta: {
            isshow: true
        }
    },
    {
        path: "/user",
        component: () => import('../views/User/User.vue'),
        meta: {
            isshow: true
        }
    },
    {
        path: "/login",
        component: () => import('../views/Login/Login.vue'),
        meta: {
            isshow: false
        }
    },
    
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...asyncRoutes,
        {path:"/:pathMatch(.*)",redirect:"/"}
    ]
})
router.beforeEach((to, from, next) => {
    next();
})
export default router;