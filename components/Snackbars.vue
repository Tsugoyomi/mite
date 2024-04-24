<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      flag?: string
      text?: string
      show?: boolean
    }>(),
    {
      flag: 'success',
      text: 'Success',
      show: false
    },
  )
</script>

<template>
  <v-snackbar
    v-model="props.show"
    :color="props.flag"
    variant="outlined"
  >
    {{ props.text }}
  </v-snackbar>  
</template>
