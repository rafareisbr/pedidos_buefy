<template>
  <div>
    <input
      class="input"
      :class="extraClasses"
      :value="value"
      v-bind="$attrs"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    extraClasses: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
