<script setup lang="ts">
  import axios from 'axios';

  definePageMeta({
    layoutTransition: true,
  });

  const list = ref([]);
  const isDetail = ref(false);
  const isDetailManga = ref(false);
  const dataDetail = ref();
  const dataDetailManga = ref();
  const q = ref('');
  const selected = ref();
  const options = reactive({
    listSearchManga: []
  });
  const isLoading = reactive({
    search: false,
    data: false
  });
  const rtoSearch = ref();

  const getList = async () => {
    isLoading.data = true;
    await axios.get('http://127.0.0.1:8000/manga/list/new').then((res) => {
      list.value = res.data.data;
    }).catch((err) => {
      throw new Error(err);
    }).finally(() => {
      isLoading.data = false;
    })
  }

  const toDetailBaca = async (url: string) => {
    dataDetail.value = null;
    isLoading.data = true;
    await axios.post('http://127.0.0.1:8000/manga/detail/chapter', { url }).then((res) => {
      dataDetail.value = res.data.data;
      isDetailManga.value = false;
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
      await axios.post('http://127.0.0.1:8000/manga/search', { name: q.value }).then((res) => {
        list.value = res.data.data;
      }).catch((err) => {
        throw new Error(err);
      }).finally(() => {
        isLoading.data = false;
      })
    } else getList()
  }

  const onMangaSearch = (data: any) => {
    clearTimeout(rtoSearch.value);
    rtoSearch.value = setTimeout(async () => {
      isLoading.search = true;
      await axios.post('http://127.0.0.1:8000/manga/search', { name: q.value }).then((res) => {
        options.listSearchManga = res.data.data;
      }).catch((err) => {
        throw new Error(err);
      }).finally(() => {
        isLoading.search = false;
      })
    }, 500);
  } 

  const getMangaSearchDetail = async (data: any) => {
    isLoading.data = true;
    await axios.post('http://127.0.0.1:8000/manga/detail', { url: data ? data : selected.value }).then((res) => {
      dataDetailManga.value = res.data.data;
      isDetail.value = false;
      isDetailManga.value = true;
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
    <v-row class="w-100" v-if="!isDetail && !isDetailManga">
      <v-col cols="12" sm="6">
        <h1 class="text-red">New Release!!</h1>
      </v-col>
      <v-col cols="12" sm="6" style="align-content: center;">
        <v-autocomplete
          id="searchbox"
          v-model="selected"
          v-model:search="q"
          :items="options.listSearchManga"
          color="blue-grey-lighten-2"
          item-title="title"
          item-value="url"
          placeholder="Search..."
          density="compact"
          variant="outlined"
          prepend-inner-icon="mdi-magnify"
          single-line
          hide-details
          rounded
          clearable
          :loading="isLoading.search"
          @keypress="onMangaSearch"
          @keyup.enter="search"
        >
          <template v-slot:item="{ props, item }">
            <v-list-item
              v-bind="props"
              :prepend-avatar="item.img"
              :title="item.title"
              @click="getMangaSearchDetail(null)"
            ></v-list-item>
          </template>
        </v-autocomplete>
      </v-col>
    </v-row>
    <!-- End Header -->

    <!-- Listing Manga -->
    <v-row class="w-100" v-if="!isDetail && !isDetailManga">
      <v-col cols="12" sm="3" md="2" class="mb-4 list-group" v-for="(item, i) in list" :key="i">
        <v-tooltip
          location="top"
        >
          <template v-slot:activator="{ props }">
            <v-card class="elevation-3 card-group" v-bind="props" @click="getMangaSearchDetail(item.url)">
              <v-card-title class="headline text-primary pt-1 pb-0">
                <b>{{ item.title }}</b>
              </v-card-title>

              <v-divider></v-divider>

              <v-card-text class="img-banner" :style="`background-image: url(${item.img}); background-size: 100% 100%; background-position: center;`">
                <!-- <img :src="item.img" width="100%" alt=""> -->
              </v-card-text>
            </v-card>
          </template>
          <span>{{ item.title }}</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <!-- End Listing Manga -->

    <!-- Detail Manga -->
    <RyuseiDetailManga
      v-if="isDetailManga"
      :data="dataDetailManga"
      @back="isDetailManga = false; dataDetailManga = null"
      @toDetailChapter="toDetailBaca"
    />

    <RyuseiDetailBaca
      v-if="isDetail"
      :data="dataDetail"
      @changePage="toDetailBaca"
      @back="isDetail = false; dataDetail = null, dataDetailManga ? isDetailManga = true : isDetailManga = false"
    />
    <!-- End Detail Manga -->

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
    height: 280px;
  }

  @media (min-width: 1070px) {
    .img-banner {
      height: 290px !important;
    }
  }

  @media (max-width: 600px) {
    .img-banner {
      height: 100vw !important;
    }
  }
</style>