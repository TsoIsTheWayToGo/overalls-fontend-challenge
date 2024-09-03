<template>
  <div class="mb-6">
    <div class="mt-2 space-y-4">
      <div v-for="option in options" :key="option.value" class="flex items-center">
        <input
          type="checkbox"
          :id="option.value"
          :value="option.value"
          v-model="internalValue"
          @change="updateValue"
          class="h-5 w-5 text-black bg-primary border-secondary rounded-lg focus:ring-primary focus:border-primary"
        />
        <span :for="option.value" class="ml-4 block text-sm text-black cursor-pointer">
          {{ option.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    options: Array,
    label: String,
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      internalValue: [...this.modelValue]
    }
  },
  methods: {
    updateValue() {
      this.$emit('update:modelValue', this.internalValue)
    }
  },
  watch: {
    modelValue(newValue) {
      this.internalValue = [...newValue]
    }
  }
}
</script>
