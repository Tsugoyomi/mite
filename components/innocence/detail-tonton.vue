<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      data: any
    }>(),
    {
      data: {},
    },
  )

  const emits = defineEmits<{
    (e: 'back'): void
  }>()
</script>

<template>
  <v-row class="w-100 mt-4">
    <v-card class="elevation-3 card-group" v-bind="props" :ripple="false">
      <v-card-title class="headline text-primary">
        <v-icon color="primary" @click="emits('back')" class="mb-1 back-to-list">mdi-arrow-left-bold</v-icon> <b>{{ data.title }}</b>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <div class="w-100 text-center mb-4">
          <iframe :src="data.embedUrl" width="70%" height="450" allowfullscreen data-rocket-lazyload="fitvidscompatible" :data-lazy-src="data.embedUrl"></iframe>
        </div>
        <div class="d-flex mb-4">
          <div v-for="item in data.tags" :key="item" class="badge-tags mr-2">
            {{ item }}
          </div>
        </div>
        <div>
          <b>Description :</b>
          <p>{{ data.desc }}</p>
        </div>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<style scoped>
  .card-group {
    height: 100%;
    width: 100%;
    border-radius: 12px;
    cursor: default;
    /* pointer-events: none; */
  }

  .badge-tags {
    padding: 6px 12px;
    border-radius: 12px;
    color: white;
    background-color: #0F2957;
    font-size: 10px;
    font-weight: bolder;
  }

  .back-to-list {
    cursor: pointer;
  }
</style>