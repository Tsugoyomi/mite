<script setup lang="ts">
  import axios from 'axios';

  definePageMeta({
    layoutTransition: true,
  });

  const list = ref([]);
  const isDetail = ref(false);
  const isDetailAnime = ref(false);
  const dataDetail = ref();
  const dataDetailAnime = ref();
  const q = ref('');
  const selected = ref();
  const options = reactive({
    listSearchAnime: []
  });
  const isLoading = reactive({
    search: false,
    data: false
  });
  const rtoSearch = ref();

  const getList = async () => {
    isLoading.data = true;
    await axios.get('http://127.0.0.1:8000/anime/list/common').then((res) => {
      list.value = res.data.data;
    }).catch((err) => {
      throw new Error(err);
    }).finally(() => {
      isLoading.data = false;
    })
  }

  const toDetailTonton = async (url: string) => {
    isLoading.data = true;
    await axios.post('http://127.0.0.1:8000/anime/detail/episode', { url }).then((res) => {
      dataDetail.value = res.data.data;
      isDetailAnime.value = false;
      isDetail.value = true;
    }).catch((err) => {
      throw new Error(err);
    }).finally(() => {
      isLoading.data = false;
    })
  }

  const search = async () => {
    isLoading.data = true;
    document.getElementById('searchbox')?.blur();
    if (q.value && q.value.length > 0) {
      await axios.post('http://127.0.0.1:8000/anime/search', { name: q.value }).then((res) => {
        list.value = res.data.data;
      }).catch((err) => {
        throw new Error(err);
      }).finally(() => {
        isLoading.data = false;
      })
    } else getList()
  }

  const onAnimeSearch = (data: any) => {
    clearTimeout(rtoSearch.value);
    rtoSearch.value = setTimeout(async () => {
      isLoading.search = true;
      await axios.post('http://127.0.0.1:8000/anime/search/query', { name: q.value }).then((res) => {
        const data = res.data.data;
        isLoading.search = false;
        options.listSearchAnime = data.anime ? data.anime[0].all : [];
      }).catch((err) => {
        throw new Error(err);
      })
    }, 500);
  } 

  const getAnimeSearchDetail = async (data: any) => {
    isLoading.data = true;
    await axios.post('http://127.0.0.1:8000/anime/detail', { url: data ? data : selected.value }).then((res) => {
      dataDetailAnime.value = res.data.data;
      isDetail.value = false;
      isDetailAnime.value = true;
    }).catch((err) => {
      throw new Error(err);
    }).finally(() => {
      isLoading.data = false;
    })
  }

  onMounted(() => {
    getList();
  })
</script>

<template>
  <div class="w-100 py-4">
    <!-- Header -->
    <v-row class="w-100" v-if="!isDetail && !isDetailAnime">
      <v-col cols="12" sm="6">
        <h1 class="text-red">Hot Anime!!</h1>
      </v-col>
      <v-col cols="12" sm="6" style="align-content: center;">
        <v-autocomplete
          id="searchbox"
          v-model="selected"
          v-model:search="q"
          :items="options.listSearchAnime"
          color="blue-grey-lighten-2"
          item-title="post_title"
          item-value="post_link"
          placeholder="Search..."
          density="compact"
          variant="outlined"
          prepend-inner-icon="mdi-magnify"
          single-line
          hide-details
          rounded
          clearable
          :loading="isLoading.search"
          @keypress="onAnimeSearch"
          @keyup.enter="search"
        >
          <template v-slot:item="{ props, item }">
            <v-list-item
              v-bind="props"
              :prepend-avatar="item.raw.post_image"
              :subtitle="item.raw.post_type"
              :title="item.raw.post_title"
              @click="getAnimeSearchDetail(null)"
            ></v-list-item>
          </template>
        </v-autocomplete>
      </v-col>
    </v-row>
    <!-- End Header -->

    <!-- Listing Anime -->
    <v-row class="w-100" v-if="!isDetail && !isDetailAnime">
      <v-col cols="12" sm="4" md="3" xl="2" class="mb-4 list-group" v-for="(item, i) in list" :key="i">
        <v-tooltip
          location="top"
        >
          <template v-slot:activator="{ props }">
            <v-card class="elevation-3 card-group" v-bind="props" @click="item.type === 'L' ? toDetailTonton(item.url) : getAnimeSearchDetail(item.url)">
              <v-card-title class="headline text-primary pt-1 pb-0">
                <b>{{ item.title }}</b>
              </v-card-title>

              <v-divider></v-divider>

              <v-card-text class="img-banner" :style="`background-image: url(${item.img}); background-size: 100% 100%; background-position: center;`">
                <!-- <img :src="item.img" width="100%" alt=""> -->
              </v-card-text>
            </v-card>
          </template>
          <span>{{ item.subTitle }}</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <!-- End Listing Anime -->

    <!-- Detail Anime -->
    <InnocenceDetailAnime
      v-if="isDetailAnime"
      :data="dataDetailAnime"
      @back="isDetailAnime = false; dataDetailAnime = null"
      @toDetailEps="toDetailTonton"
    />

    <InnocenceDetailTonton
      v-if="isDetail"
      :data="dataDetail"
      @back="isDetail = false; dataDetail = null, dataDetailAnime ? isDetailAnime = true : isDetailAnime = false"
    />
    <!-- End Detail Anime -->

    <v-overlay v-model="isLoading.data" class="align-center justify-center" persistent>
      <v-progress-circular
        color="primary"
        size="64"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<style scoped>
  .headline {
    font-size: 12px;
  }

  .list-group {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  .card-group {
    height: 100%;
    width: 100%;
    border-radius: 12px;
  }

  .img-banner {
    height: 300px;
  }

  @media (min-width: 1070px) {
    .img-banner {
      height: 320px !important;
    }
  }

  @media (max-width: 600px) {
    .img-banner {
      height: 100vw !important;
    }
  }
</style>