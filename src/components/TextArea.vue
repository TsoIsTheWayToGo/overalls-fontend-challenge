<template>
  <div class="mb-6">
    <textarea
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue($event.target.value)"
      class="w-full px-4 py-3 bg-inputBg text-black border border-primary rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-300 ease-in-out"
      rows="6"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    label: String,
    placeholder: String,
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
