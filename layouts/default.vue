<script lang="ts" setup>
  import { ref, onMounted, computed } from 'vue'

  const route = useRoute()

  const drawer = ref(false);
  const username = ref('Tsu');

  const logout = () => {
    indexedDB.deleteDatabase('iris');
    location.href = '/login';
  }

  onMounted(() => {
    // if (route.path === '/innocence') drawer.value = false

    // const request = indexedDB.open('iris', 3);
    // request.onsuccess = (event: any) => {
    //   const db = event.target.result;
    //   const objectStore = db
    //     .transaction("user", "readwrite")
    //     .objectStore("user");
  
    //   objectStore.getAll().onsuccess = (event: any) => {
    //     username.value = event.target.result[0].username;
    //   };
    // }
  })
</script>

<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>えいが &nbsp; みて</v-toolbar-title>
      <!-- <v-btn icon @click="logout()">
        <v-icon>mdi-logout</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="light">
      <v-list>
        <!-- <v-list-item
            prepend-avatar="https://image.jpnn.com/resize/570x380-80/picture/normal/20130905_122458/122458_861712_Eir_Aoi.jpg"
            :title="username"
          ></v-list-item>
        <v-divider></v-divider>
        <v-list-item link :active="route.path === '/iris'" class="mt-2">
          <p class="text-primary">
            <NuxtLink to="/iris" style="text-decoration: none; color: inherit;">
              IRIS
            </NuxtLink>
          </p>
        </v-list-item>
        <v-list-item link :active="route.path === '/ignite'">
          <p class="text-primary">
            <NuxtLink to="/ignite" style="text-decoration: none; color: inherit;">
              IGNITE
            </NuxtLink>
          </p>
        </v-list-item> -->
        <v-list-item link :active="route.path === '/innocence'">
          <p class="text-primary">
            <NuxtLink to="/innocence" style="text-decoration: none; color: inherit;">
              INNOCENCE
            </NuxtLink>
          </p>
        </v-list-item>
        <v-list-item link :active="route.path === '/ryusei'">
          <p class="text-primary">
            <NuxtLink to="/ryusei" style="text-decoration: none; color: inherit;">
              RYUSEI
            </NuxtLink>
          </p>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="hidden-scroll" v-if="route.path !== '/innocence' && route.path !== '/ryusei'">
      <v-container class="chat-container">
        <slot />
      </v-container>
    </v-main>

    <v-main class="ml-10" v-else>
      <slot />
    </v-main>
  </v-app>
</template>

<style scoped>
  p {
    font-weight: bold;
  }

  .hidden-scroll {
    overflow: hidden;
  }
  
  .chat-container {
    height: calc(100vh - 64px) !important;
  }
</style>

<style>
  .containerz {
    height: calc(100vh - 96px);
  }
</style>