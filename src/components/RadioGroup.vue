<template>
  <div class="mb-6">
    <div class="mt-2 space-y-4">
      <div v-for="option in options" :key="option.value" class="flex items-center">
        <input
          type="radio"
          :id="option.value"
          :name="name"
          :value="option.value"
          :checked="modelValue === option.value"
          @change="updateValue(option.value)"
          class="h-5 w-5 text-black bg-primary border-secondary rounded-full focus:ring-primary focus:border-primary"
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
    modelValue: String,
    options: Array,
    label: String,
    name: String,
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value)
    }
  }
}
</script>
