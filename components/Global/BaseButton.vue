<template>
  <button class="button" :class="buttonStyle" type="button" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    buttonStyle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
