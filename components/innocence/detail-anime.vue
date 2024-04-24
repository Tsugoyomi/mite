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
    (e: 'back'): void,
    (e: 'toDetailEps', val: any): void
  }>()

  const toDetailTonton = (data: any) => {
    emits('toDetailEps', data.url);
  }
</script>

<template>
  <v-row class="w-100 mt-4">
    <v-card class="elevation-3 card-group" v-bind="props" :ripple="false">
      <v-card-title>
        <v-row>
          <v-col cols="12" sm="10" class="headline text-primary pb-2 limit-text">
            <v-icon color="primary" @click="emits('back')" class="mb-1 back-to-list">mdi-arrow-left-bold</v-icon> <b>{{ data.title }}</b>
          </v-col>
          <v-col cols="12" sm="2" class="pb-2">
            <div class="d-flex rating-point">
              <v-icon class="mr-1">mdi-star</v-icon>
              <span>{{ data.rate }}</span>
            </div>
          </v-col>
        </v-row>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <v-row>
          <v-col cols="12" sm="3">
            <img :src="data.img" alt="" width="100%">
          </v-col>
          <v-col cols="12" sm="9">
            <v-row>
              <v-col cols="12" sm="6" v-for="(item, i) in data.etc" :key="i">
                <p>{{ item }}</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="mt-4 elevation-3 card-group">
      <v-card-text>
        <div class="d-flex mb-4">
          <div v-for="item in data.tags" :key="item" class="badge-tags mr-2">
            {{ item }}
          </div>
        </div>

        <h3 class="mb-3">Sinopsis :</h3>
        <p>{{ data.sinopsis }}</p>
      </v-card-text>
    </v-card>

    <v-card class="mt-4 mb-2 elevation-3 card-episode">
      <v-card-text class="py-0 px-3">
        <div class="w-100">
          <v-row class="bg-primary header-episode mb-1">
            <v-col cols="2">Eps</v-col>
            <v-col cols="5">Judul</v-col>
            <v-col cols="5">Tanggal Rilis</v-col>
          </v-row>

          <v-row v-for="(item, i) in data.listEps" :key="i" :class="i % 2 === 0 ? 'eps-genap' : 'eps-ganjil'" @click="toDetailTonton(item)">
            <v-col cols="2">{{ item.eps }}</v-col>
            <v-col cols="5">{{ item.epsTitle }}</v-col>
            <v-col cols="5">{{ item.date }}</v-col>
          </v-row>
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
    position: relative;
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

  .rating-point {
    align-items: center;
    justify-content: right;
  }

  .rating-point > i {
    font-size: 20px;
    margin-bottom: 3px;
  }

  .rating-point > span {
    font-size: 12px;
  }

  .card-episode {
    height: 100%;
    max-height: 400px;
    min-height: 150px;
    overflow: auto;
    width: 100%;
    border-radius: 12px;
    cursor: default;
    position: relative;
    /* pointer-events: none; */
  }

  .header-episode {
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .eps-genap {
    background-color: #f7f7f7f7;
    cursor: pointer;
  }

  .eps-ganjil {
    background-color: #fff;
    cursor: pointer;
  }

  .eps-genap:hover, .eps-ganjil:hover {
    background-color: #0F2957;
    color: white;
  }

  .limit-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>