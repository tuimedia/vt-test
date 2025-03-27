import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/transitions',
      name: 'transitions',
      component: () => import('../views/CrossPageTransitions.vue'),
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
      props: true,
    },
  ],
})

// Add view transitions navigation guard
router.beforeResolve((to, from) => {
  // Skip transitions for initial page load
  if (!from.name) return

  // Only use transitions if the browser supports it
  if (!document.startViewTransition) return
  
  // Use the view transitions API
  return new Promise(resolve => {
    // Start the transition
    document.startViewTransition(async () => {
      // Wait for the router to be ready to continue
      resolve()
      // Give the router time to update the DOM
      await new Promise(r => setTimeout(r, 0))
    })
  })
})

export default router
