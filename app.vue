<script setup lang="ts">
  const route = useRoute()
  const layout = route.path === '/login' ? 'auth' : 'default';

  onMounted(() => {
    // document.addEventListener('contextmenu', function(e) {
    //   e.preventDefault();
    // });

    // document.onkeydown = (e: any) => {
    //   if (e.key == 123) {
    //       e.preventDefault();
    //   }
    //   if (e.ctrlKey && e.shiftKey && e.key == 'I') {
    //       e.preventDefault();
    //   }
    //   if (e.ctrlKey && e.shiftKey && e.key == 'C') {
    //       e.preventDefault();
    //   }
    //   if (e.ctrlKey && e.shiftKey && e.key == 'J') {
    //       e.preventDefault();
    //   }
    //   if (e.ctrlKey && e.key == 'U') {
    //       e.preventDefault();
    //   }
    // };
  })
</script>

<template>
  <div>
    <NuxtLayout :name="layout">
      <v-app>
        <NuxtPage />
      </v-app>
    </NuxtLayout>
  </div>
</template>
