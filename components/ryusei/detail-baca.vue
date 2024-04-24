<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      data: any
    }>(),
    {
      // data: {},
    },
  )

  const emits = defineEmits<{
    (e: 'back'): void,
    (e: 'changePage', val: any): void,
  }>()

  const toScrollUp = () => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const changePage = (data: string) => {
    emits('changePage', data);
  }
</script>

<template>
  <v-row class="w-100 mt-4 justify-center" v-if="data">
    <v-col cols="12" md="7">
      <v-row class="prevnext-sec">
        <v-col cols="6">
          <v-btn color="white" class="mb-2" rounded="lg" @click="changePage(data.prev)">Prev</v-btn>
        </v-col>
        <v-col cols="6" class="text-right">
          <v-btn color="white" class="mb-2" rounded="lg" @click="changePage(data.next)">Next</v-btn>
        </v-col>
      </v-row>
      <v-card class="elevation-3 card-group" v-bind="props" :ripple="false">
        <v-card-title class="headline text-primary">
          <v-icon color="primary" @click="emits('back')" class="mb-1 back-to-list">mdi-arrow-left-bold</v-icon> <b>{{ data.title }}</b>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <v-row>
            <v-col cols="12" v-for="(item, i) in data.list" :key="i">
              <img :src="item" width="100%" height="100%" alt="" lazy-load loading="lazy">
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-btn icon="mdi-arrow-up-bold" color="primary" class="btn-scroll-up" @click="toScrollUp()"></v-btn>
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

  .btn-scroll-up {
    position: sticky;
    position: -webkit-sticky;
    top: 120px;
  }

  .prevnext-sec {
    background: #1867C0;
    margin-left: 0px;
    margin-right: 0px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
</style>