<template>
  <div class="max-w-3xl min-w-full mx-auto">
    <div class="mb-8">
      <div class="flex justify-between items-center mb-4"></div>
      <ProgressBar :progress="progress" />
    </div>

    <div v-if="currentCategory">
      <h1 class="text-2xl font-bold text-primary mb-6">{{ currentCategory.title }}</h1>
      <form @submit.prevent="handleNextCategory">
        <div v-for="question in currentCategory.questions" :key="question.id" class="mb-6 relative">
          <label :for="question.id" class="block text-sm font-medium text-gray-700 mb-2">
            {{ question.label }}
            <span v-if="question.required" class="text-red-500">*</span>
          </label>
          <component
            :is="getComponent(question.type)"
            v-model="answers[question.id]"
            :id="question.id"
            v-bind="question"
          />
          <p
            v-if="!answers[question.id] && question.required && showErrorState"
            class="text-errors text-sm mt-[-1.2rem]"
          >
            This field is required.
          </p>
        </div>
        <CustomButton
          :label="isLastCategory ? 'Finish' : 'Next'"
          type="button"
          :onClick="handleNextCategory"
        />
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useQuestionsStore } from '../stores/questionStore'
import { useRouter } from 'vue-router'
import { categories } from '../data/questions'
import TextInput from '../components/TextInput.vue'
import RadioGroup from '../components/RadioGroup.vue'
import CheckboxGroup from '../components/CheckboxGroup.vue'
import TextArea from '../components/TextArea.vue'
import ProgressBar from '../components/ProgressBar.vue'
import CustomButton from '../components/CustomButton.vue'

export default {
  components: {
    ProgressBar,
    CustomButton
  },
  setup() {
    const store = useQuestionsStore()
    const router = useRouter()

    const currentCategoryIndex = ref(0)
    const showErrorState = ref(false)

    const answers = ref({})

    const currentCategory = computed(() => categories[currentCategoryIndex.value])

    const progress = computed(() => ((currentCategoryIndex.value + 1) / categories.length) * 100)

    const isLastCategory = computed(() => currentCategoryIndex.value === categories.length - 1)

    const areAllRequiredQuestionsAnswered = computed(() => {
      return currentCategory.value.questions.every((question) => {
        if (question.required) {
          return answers.value[question.id] && answers.value[question.id].length > 0
        }
        return true
      })
    })

    const handleNextCategory = () => {
      if (!areAllRequiredQuestionsAnswered.value) {
        showErrorState.value = true
        return
      }

      showErrorState.value = false
      nextCategory()
    }

    const nextCategory = () => {
      if (currentCategoryIndex.value < categories.length - 1) {
        currentCategoryIndex.value += 1
      } else {
        store.saveAnswers(answers.value)
        router.push('/review')
      }
    }

    const getComponent = (type) => {
      switch (type) {
        case 'text':
        case 'date':
          return TextInput
        case 'textarea':
          return TextArea
        case 'radio':
          return RadioGroup
        case 'checkbox':
          return CheckboxGroup
        default:
          return null
      }
    }

    return {
      currentCategory,
      answers,
      progress,
      getComponent,
      handleNextCategory,
      nextCategory,
      isLastCategory,
      areAllRequiredQuestionsAnswered,
      showErrorState
    }
  }
}
</script>
