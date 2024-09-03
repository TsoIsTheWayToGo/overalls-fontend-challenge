import { createRouter, createWebHistory } from 'vue-router'
import QuestionPage from '../views/Questions.vue'
import ReviewPage from '../views/Review.vue'

const routes = [
  { path: '/', component: QuestionPage },
  { path: '/review', component: ReviewPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
