<script setup lang="ts">
  import axios from 'axios';

  definePageMeta({
    layoutTransition: true,
    middleware: defineNuxtRouteMiddleware((to, from) => {
      return navigateTo('/innocence');
    })
  });

  const userId = ref(null);
  const room = ref([])
  const dialogCreate = ref(false)
  const formInput = ref();
  const form = reactive({
    name: '',
    img: '',
    type: 'GROUP',
  })
  const formJoin = reactive({
    code: ''
  })
  const rules = ref([
    (value: any) => {
      if (value) return true
      return 'Requred.'
    },
  ])
  const flagAlert = ref('')
  const textAlert = ref('')
  const showAlert = ref(false)
  const toggleCreate = ref(1)

  const getListRoom = async () => {
    const payload = {
      userId: userId.value
    }

    await axios.post('http://127.0.0.1:8000/room/list', payload).then((res) => {
      room.value = res.data.data;
    }).catch((err) => {
      throw new Error(err);
    });
  }

  const toCreateGroup = async (type: number) => {
    const check = await formInput.value?.validate();
    
    if (check.valid)
      if (type === 1) {
        const gen1 = btoa(form.name);
        const gen2 = btoa('--EIR AOI--')
        const gen3 = btoa(form.type);
        const payload = {
          ...form,
          code: `${gen1}$${gen2}$${gen3}`,
          userId: userId.value
        }
    
        await axios.post('http://127.0.0.1:8000/room/create', payload).then((res) => {
          flagAlert.value = res.data.statusCode === 200 ? 'success' : 'red';
          textAlert.value = res.data.message;
          showAlert.value = true;
        }).catch((err) => {
          throw new Error(err);
        }).finally(() => {
          dialogCreate.value = false;
          getListRoom();
          form.name = '';
          form.img = '';
          setTimeout(() => {
            showAlert.value = false;
          }, 1000);
        })
      } else {
        const payload = {
          ...formJoin,
          type: 'GROUP',
          userId: userId.value
        }

        await axios.post('http://127.0.0.1:8000/room/join', payload).then((res) => {
          flagAlert.value = res.data.statusCode === 200 ? 'success' : 'red';
          textAlert.value = res.data.message;
          showAlert.value = true;
        }).catch((err) => {
          throw new Error(err);
        }).finally(() => {
          dialogCreate.value = false;
          getListRoom();
          formJoin.code = '';
          setTimeout(() => {
            showAlert.value = false;
          }, 1000);
        })
      }
  }

  const toEnterGroup = (code: string) => {
    location.href = `/iris/${code}`;
  }

  const toLeaveGroup = async (data: any) => {
    const payload = {
      name: data.name,
      code: data.code,
      type: data.type,
      userId: data.user_id
    }

    await axios.post('http://127.0.0.1:8000/room/leave', payload).then((res) => {
      flagAlert.value = res.data.statusCode === 200 ? 'success' : 'red';
      textAlert.value = res.data.message;
      showAlert.value = true;
    }).catch((err) => {
      throw new Error(err);
    }).finally(() => {
      getListRoom();
    })
  }

  onMounted(() => {
    const request = indexedDB.open('iris', 3);
    request.onsuccess = (event: any) => {
      const db = event.target.result;
      const objectStore = db
        .transaction("user", "readwrite")
        .objectStore("user");
  
      objectStore.getAll().onsuccess = (event: any) => {
        userId.value = event.target.result[0].user_id;
      };
    }

    setTimeout(() => {
      getListRoom()
    }, 500);
  })
</script>

<template>
  <div class="containerz w-100 py-4" style="position: relative;">
    <v-row class="w-100">
      <v-col cols="3" v-for="(item, i) in room" :key="i" class="mb-3 list-group">
        <v-card class="elevation-3 card-group">
          <v-card-title class="headline text-primary">
            <b>{{ item.name }}</b>
            <v-tooltip
              location="top"
            >
              <template v-slot:activator="{ props }">
                <v-icon class="icon-exit" v-bind="props" @click.prevent="toLeaveGroup(item)">mdi-exit-run</v-icon>
              </template>
              <span>Exit</span>
            </v-tooltip>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <img :src="item.img" width="100%" alt="">
            <v-btn class="mt-2" block variant="outlined" color="primary" @click="toEnterGroup(item.code)">Enter</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-tooltip
      location="top"
    >
      <template v-slot:activator="{ props }">
        <v-btn color="success" class="icon-add" v-bind="props" icon="mdi-plus" @click="dialogCreate = true"></v-btn>
      </template>
      <span>Create Group</span>
    </v-tooltip>

    <v-dialog
      v-model="dialogCreate"
      transition="dialog-bottom-transition"
      width="30%"
    >
      <v-card>
        <v-toolbar
          color="primary"
          :title="toggleCreate === 1 ? 'Create Group' : 'Join Group'"
        ></v-toolbar>
        <v-card-text>
          <v-btn-toggle
            v-model="toggleCreate"
            color="primary"
            mandatory
            density="compact"
            class="mb-4"
          >
            <v-btn :value="1">Create</v-btn>
            <v-btn :value="2">Join</v-btn>
          </v-btn-toggle>

          <v-form ref="formInput" @submit.prevent="toCreateGroup(toggleCreate)">
            <!-- Create Group -->
            <template v-if="toggleCreate === 1">
              <v-text-field
                v-model="form.name"
                :rules="rules"
                label="Group name"
                variant="outlined"
                density="compact"
                class="mb-6"
                hide-details
              ></v-text-field>
              
              <v-text-field
                v-model="form.img"
                :rules="rules"
                label="Group image"
                variant="outlined"
                density="compact"
                class="mb-8"
                hide-details
              ></v-text-field>
            </template>
            <!-- End Create Group -->

            <!-- Join Group -->
            <v-text-field
              v-else
              v-model="formJoin.code"
              :rules="rules"
              label="Group code"
              variant="outlined"
              density="compact"
              class="mb-6"
              hide-details
            ></v-text-field>
            <!-- End Join Group -->

            <v-divider class="mb-4"></v-divider>

            <div class="text-right">
              <v-btn
                color="warning"
                variant="outlined"
                class="mr-3"
                @click="dialogCreate = false"
              >Close</v-btn>
              <v-btn
                color="success"
                variant="outlined"
                type="submit"
              >Submit</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <Snackbars
      :flag="flagAlert"
      :text="textAlert"
      v-model="showAlert"
    />
  </div>
</template>

<style scoped>
  .list-group {
    width: 300px;
    height: 280px;
  }

  .card-group {
    border-radius: 12px;
  }

  .icon-exit {
    color: rgb(197, 94, 94);
    font-size: 20px;
    float: right;
    margin-top: 6px;
    cursor: pointer;
  }

  .icon-add {
    position: absolute;
    bottom: 12px;
    right: 0px;
  }
</style>
