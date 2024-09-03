<template>
  <div class="mb-6">
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="updateValue($event.target.value)"
      :placeholder="placeholder"
      class="w-full px-3 py-2 bg-inputBg text-black border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-300 ease-in-out"
      autocomplete="off"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    label: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    },
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
