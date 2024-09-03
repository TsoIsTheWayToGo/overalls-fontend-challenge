<template>
  <div class="p-2 md:p-4 lg:p-8 min-w-full mx-auto">
    <h1 class="text-2xl font-bold text-primary mb-6">Review Your Answers</h1>
    <ul class="space-y-6">
      <li v-for="category in categories" :key="category.id">
        <h2 class="text-xl font-semibold text-primary mb-4">{{ category.title }}</h2>
        <div class="bg-inputBg rounded-lg shadow-md border border-primary">
          <div v-for="question in category.questions" :key="question.id" class="p-4">
            <strong class="text-primary block mb-2">{{ question.label }}</strong>
            <span class="text-black">{{ formatAnswer(question, store.answers[question.id]) }}</span>
          </div>
        </div>
      </li>
    </ul>
    <CustomButton label="Retake" :onClick="retake" />
  </div>
</template>

<script>
import { useQuestionsStore } from '../stores/questionStore'
import { categories } from '../data/questions'
import { useRouter } from 'vue-router'
import CustomButton from '@/components/CustomButton.vue'

export default {
  components: { CustomButton },
  setup() {
    const store = useQuestionsStore()
    const router = useRouter()

    const formatAnswer = (question, answer) => {
      if (Array.isArray(answer)) {
        return answer.join(', ')
      }
      return answer || 'No answer provided'
    }

    const retake = () => {
      store.resetAnswers()
      router.push('/')
    }

    return {
      store,
      categories,
      formatAnswer,
      retake
    }
  }
}
</script>
