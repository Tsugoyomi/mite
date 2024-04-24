<script setup>
  import {
    ref,
    onMounted
  } from 'vue';
  import axios from 'axios';

  const username = ref('');
  const password = ref('');

  const login = () => {
    axios.post('http://127.0.0.1:8000/login', {
      username: username.value,
      password: password.value
    }).then((res) => {
      console.log('Login ==> ', res);
      if (res.data.statusCode === 200) {
        const request = indexedDB.open('iris', 3);
        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          const objectStore = db.createObjectStore('user', {
            keyPath: "user_id"
          });
          objectStore.createIndex("username", "username", {
            unique: true
          });
          objectStore.createIndex("token", "token", {
            unique: true
          });

          objectStore.transaction.oncomplete = async (event) => {
            // Store values in the newly created objectStore.
            const userObjectStore = db
              .transaction("user", "readwrite")
              .objectStore("user");

            await userObjectStore.add(res.data.data);
            location.href = '/';
          };
        };
      }
    }).catch((err) => {
      throw new Error(err);
    })
  }

  onMounted(() => {
    // const request = indexedDB.open('iris', 3);
    // request.onsuccess = (event) => {
    //   const db = event.target.result;
    //   const objectStore = db
    //     .transaction("user", "readwrite")
    //     .objectStore("user");
  
    //   objectStore.getAll().onsuccess = (event) => {
    //     console.log('asdads', event.target.result);
    //   };
    // }
  })
</script>

<template>
  <v-container fluid class="h-100 bg-cover">
    <v-row justify="center" align="center" class="h-100">
      <v-col cols="12" sm="8" md="4">
        <v-card class="bg-primary">
          <v-card-title class="headline">
            <h3 class="my-3 text-center">EIR AOI - Iris</h3>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field v-model="username" label="Username" variant="outlined" class="mb-2" required></v-text-field>
              <v-text-field v-model="password" label="Password" variant="outlined" type="password" required>
              </v-text-field>
              <v-btn type="submit" class="my-2" block="" color="success">GO</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .bg-cover {
    background: linear-gradient(rgba(255, 255, 255, .4), rgba(255, 255, 255, .4)), url('/bg-iris.png');
    background-size: cover;
    background-position: center;
  }
</style>