<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Pass your values...",
    },
  },
};
</script>
