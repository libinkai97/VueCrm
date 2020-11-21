import Home from "../views/Home";
import Crm from "../components/crm/index"
import Org from "../components/org/index"

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect:"/crm",
        children:[
            {
                path:"crm",
                name:"crm",
                component:Crm,
                meta:{needLogin:true},
                children:[
                    {path:"customList",name:"customList",component: () => import(/* webpackChunkName: "about" */ '../components/crm/custom/List')},
                    {path:"customAdd",name:"customAdd",component: () => import(/* webpackChunkName: "about" */ '../components/crm/custom/Add')},
                    {path:"upload",name:"customAdd",component: () => import(/* webpackChunkName: "about" */ '../components/crm/custom/Upload')},
                ]
            },
            {
                path:"org",
                name:"org",
                component:Org,
                meta:{needLogin:true},
                children:[
                    {path:"depList",name:"depList",component: () => import(/* webpackChunkName: "about" */ '../components/org/dep/List')},
                    {path:"depAdd",name:"depAdd",component: () => import(/* webpackChunkName: "about" */ '../components/org/dep/Add')},
                    {path:"jobList",name:"jobList",component: () => import(/* webpackChunkName: "about" */ '../components/org/job/List')},
                    {path:"jobAdd",name:"jobAdd",component: () => import(/* webpackChunkName: "about" */ '../components/org/job/Add')},
                    {path:"userList",name:"userList",component: () => import(/* webpackChunkName: "about" */ '../components/org/user/List')},
                    {path:"userAdd",name:"userAdd",component: () => import(/* webpackChunkName: "about" */ '../components/org/user/Add')},
                ]
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    }
]


