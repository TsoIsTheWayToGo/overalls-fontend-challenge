import { defineStore } from 'pinia'
import { categories } from '@/data/questions'

export const useQuestionsStore = defineStore('questionStore', {
  state: () => ({
    currentCategoryIndex: 0,
    answers: {}
  }),
  getters: {
    currentCategory(state) {
      return categories[state.currentCategoryIndex]
    },
    isLastCategory(state) {
      return state.currentCategoryIndex >= categories.length - 1
    }
  },
  actions: {
    saveAnswer(questionId, answer) {
      this.answers[questionId] = answer
    },
    nextCategory() {
      if (!this.isLastCategory) {
        this.currentCategoryIndex++
      }
    },
    saveAnswers(answers) {
      this.answers = { ...this.answers, ...answers }
    },
    resetAnswers() {
      this.answers = {}
      this.currentCategoryIndex = 0
    }
  }
})
