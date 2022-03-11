import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 只有後臺，所以先導線登入頁面
  { path: '/', redirect: { name: 'login' } },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminPage.vue'),
    children: [
      {
        path: 'products',
        name: 'admin-products',
        component: () => import('../views/AdminProducts.vue')
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('../views/AdminOrders.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active'
})

export default router
