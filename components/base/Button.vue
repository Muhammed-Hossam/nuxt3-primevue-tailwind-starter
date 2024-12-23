<template>
  <div class="base-button w-full">
    <Button class="w-full" :outlined="outlined" :class="outlined ? 'main-outline__btn' : 'main-btn'" :style="buttonStyle">
      <span class="font-bold" :class="fontSize" >{{ $t(text) }}</span>
    </Button>
  </div>
</template>

<script setup>
import Button from 'primevue/button';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  fontSize: {
    type: String,
    required: false,
    default: 'text-lg'
  },
  type: {
    type: String,
    required: false,
    default: 'button'
  },
  loading: {
    type: Boolean,
    required: false,
    default: true,
  },
  icon: {
    type: String,
    required: false
  },
  fontIcon: {
    type: String,
    required: false
  },
  color: {
    type: String,
    required: false
  },
  outlined: {
    type: Boolean,
    required: false,
    default: false
  },
  height: {
    type: String,
    required: false,
    default: '48px'
  }
})

const buttonStyle = computed(() => {
  return {
    height: props.height
  }
})
</script>

<style lang="scss" scoped>




</style>