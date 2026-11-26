const routes = [
  {
    path:     '/',
    redirect: '/player',
  },

  {
    path:     '/player',
    children: [
      { path: '', component: () => import('@/pages/IndexPage.vue') },
    ],
  },

  {
    path:     '/tv',
    children: [
      { path: '', component: () => import('@/pages/IndexPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path:      '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  }
]

export default routes
