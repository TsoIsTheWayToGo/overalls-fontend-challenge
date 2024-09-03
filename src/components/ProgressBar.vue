<template>
  <div class="w-full bg-white border border-primary rounded-full overflow-hidden">
    <div
      class="bg-primary h-2.5 rounded-full transition-all duration-300 ease-in-out"
      :style="{ width: `${progress}%` }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true
    }
  }
}
</script>
