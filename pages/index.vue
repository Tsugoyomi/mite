<script setup lang="ts">
  definePageMeta({
    // middleware: defineNuxtRouteMiddleware((to, from) => {
    //   return navigateTo('/innocence');
    // })
  })
</script>

<template>
  <v-container class="welcome-page">
    <v-row align="center">
      <v-col>
        <v-card elevation="3">
          <v-card-title class="headline">Wecome to EIR AOI - Iris</v-card-title>
          <v-card-text>
            <p>
              Let's trying the Feature
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
  .welcome-page {
    padding: 20px;
  }

  .headline {
    font-size: 24px;
    font-weight: bold;
  }
</style>
