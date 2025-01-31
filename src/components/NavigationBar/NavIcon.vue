<script>
export default {
  name: 'NavIcon',

  props: {
    width: {
      type: Number,
      default: 22,
    },
    height: {
      type: Number,
      default: 22,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
  },
}
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :fill="color"
    viewBox="0 0 16 16"
  >
    <slot></slot>
  </svg>
</template>
