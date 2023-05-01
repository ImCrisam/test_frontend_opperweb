export default {
    name: "dashboard",
    component: () => import( '../layout/Dashboard.vue'),
    children: [
      {
          path: '',
          name: 'user',
          component: () => import('../views/User.vue')
      }, {
          path: 'categories',
          name: 'categories',
          component: () => import('../views/Categories.vue')
      },{
          path: 'update/:id',
          name: 'update',
          component: () => import('../views/UpdateCategory.vue'),
          props: ( route ) => {
            return {
                id: route.params.id
            }
        }
      },{
          path: 'create',
          name: 'create',
          component: () => import('../views/CreateCategory.vue')
      },

  ]
}