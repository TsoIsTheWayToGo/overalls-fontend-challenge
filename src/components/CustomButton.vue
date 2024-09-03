<template>
  <button
    :type="type"
    class="mt-8 w-full bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl focus:outline-none transition-all duration-300 ease-in-out"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'button'
    },
    onClick: {
      type: Function,
      default: null
    }
  },
  methods: {
    handleClick(event) {
      if (this.onClick) {
        this.onClick(event)
      }
    }
  }
}
</script>
