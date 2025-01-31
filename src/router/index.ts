import CharacterDetail from '@/components/CharacterDetail.vue'
import CharacterList from '@/components/CharacterList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: CharacterList },
  { path: '/character/:name', component: CharacterDetail, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
