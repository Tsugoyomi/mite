<script setup>
  import {
    ref,
    onMounted
  } from 'vue';
  import moment from 'moment';
  import io from 'socket.io-client';
  import axios from 'axios';

  definePageMeta({
    layoutTransition: true,
    middleware: defineNuxtRouteMiddleware((to, from) => {
      return navigateTo('/innocence');
    })
  });

  const socket = io('ws://127.0.0.1:8000', { transports: ['websocket', 'polling', 'long-polling'], secure: true, reconnection: true });
  const route = useRoute()
  const router = useRouter()

  const userId = ref(null);
  const username = ref('');
  const newMessage = ref('');
  const messages = ref([]);
  const typing = ref(false);
  const typingMessage = ref('Someone is typing...');
  const flagAlert = ref('');
  const textAlert = ref('');
  const showAlert = ref(false);

  const dataRoom = route.params.id?.split('$');
  const roomName = atob(dataRoom[0]);
  const room = ref({});
  const members = ref([]);
  const dialogMembers = ref(false);

  const sendMessage = () => {
    if (newMessage.value.trim() !== '') {
      messages.value.push({
        id: Date.now(),
        sender: username.value,
        text: newMessage.value,
        time: moment(new Date()).format('H:mm')
      });

      socket.emit('sendMessage', {
        roomCode: route.params.id,
        userId: userId.value,
        sender: username.value,
        message: newMessage.value
      })

      newMessage.value = '';

      setTimeout(() => {
        let out = document.getElementById('listChat');
        out.scrollTop = out.scrollHeight
      }, 50);
    }
  };
  
  const getExistingRoom = async () => {
    const payload = {
      code: route.params.id,
      type: 'GROUP',
      userId: userId.value
    }

    await axios.post('http://127.0.0.1:8000/room/detail', payload).then((res) => {
      room.value = res.data.data;
    }).catch((err) => {
      throw new Error(err);
    });
  }

  const getHistoryMessage = async () => {
    const payload = {
      roomCode: route.params.id,
      userId: userId.value
    }
    
    await axios.post(`http://127.0.0.1:8000/history-messages`, payload).then((res) => {
      const result = res.data.data
      for (let i = 0; i < result.length; i++) {
        messages.value.push({
          id: result[i].id,
          sender: result[i].username,
          text: result[i].text,
          time: moment(result[i].created_at).format('H:mm')
        });
      }

      setTimeout(() => {
        let out = document.getElementById('listChat');
        out.scrollTop = out.scrollHeight
      }, 50);
    }).catch((err) => {
      throw new Error(err);
    });
  }

  const toShowMembers = async () => {
    const payload = {
      code: route.params.id,
    }

    await axios.post('http://127.0.0.1:8000/room/members', payload).then((res) => {
      members.value = res.data.data;
    }).catch((err) => {
      throw new Error(err);
    }).finally(() => {
      dialogMembers.value = true;
    });
  }

  const toCopyCode = () => {
    navigator.clipboard.writeText(route.params.id).then(() => {
      flagAlert.value = 'success';
      textAlert.value = 'Success copied to clipboard';
      showAlert.value = true;

      setTimeout(() => {
        showAlert.value = false;
      }, 1000);
    })
  }

  onMounted(() => {
    const request = indexedDB.open('iris', 3);
    request.onsuccess = (event) => {
      const db = event.target.result;
      const objectStore = db
        .transaction("user", "readwrite")
        .objectStore("user");
  
      objectStore.getAll().onsuccess = (event) => {
        userId.value = event.target.result[0]?.user_id;
        username.value = event.target.result[0]?.username;
      };
    }

    setTimeout(async () => {
      await socket.connect();
  
      await socket.on('connect', () => {
        console.log('------SOCKET CONNECTION IS ESTABLISHED------');
  
        socket.on('disconnect', reason => {
          console.log(`------SOCKET CONNECTION IS DISCONNECT, ${reason}-------`);
        });
      });
  
      await socket.on('reconnect', () => {
        console.log(`------SOCKET CONNECTION IS SUCCESSFULLY RECONNECTED-------`);
      });
  
      await socket.on('reconnecting', attempt => {
        console.log(`------SOCKET CONNECTION IS ATTEMPTING TO RECONNECT-------`);
      });
  
      await socket.emit('joinRoom', {
        roomCode: route.params.id,
        roomName,
        roomType: 'GROUP',
        userId: userId.value
      });

      await getExistingRoom()
      await getHistoryMessage()
    }, 500);
  })

  socket.on('receivedMessage', data => {
    console.log('Receive Message => ', data);

    if (data.message.trim() !== '') {
      messages.value.push({
        id: Date.now(),
        sender: data.sender,
        text: data.message,
        time: moment(new Date()).format('H:mm')
      });

      setTimeout(() => {
        let out = document.getElementById('listChat');
        out.scrollTop = out.scrollHeight
      }, 50);
    }
  })
</script>

<template>
  <div class="containerz">

    <v-card class="elevation-12 chatbox">
      <v-card-title class="headline text-white bg-primary d-flex" style="align-items: center;">
        <v-icon class="icon-back" @click="router.back()">mdi-arrow-left-bold</v-icon>
        <img :src="room.img" alt="" class="room-img mr-2">
        <b style="flex: auto;">{{ room.name }}</b>

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-icon class="icon-menus" v-bind="props">mdi-dots-vertical</v-icon>
          </template>

          <v-list class="py-0">
            <v-list-item>
              <v-list-item-title>
                <v-btn text block @click.prevent="toShowMembers()">Members</v-btn>
              </v-list-item-title>
              <v-list-item-title>
                <v-btn text block @click.prevent="toCopyCode()">Invite</v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="body-chat" id="listChat">
        <v-list v-if="messages.length > 0">
          <v-list-item-group v-for="(message, index) in messages" :key="index">
            <v-list-item>
              <div class="bubble-chat" :class="{ 'float-end': message.sender === username }">
                <h5 className="mb-1">{{ message.sender }}</h5>
                <p className="bubble-chat-text">{{ message.text }}</p>
                <span className="bubble-chat-time">{{ message.time }}</span>
              </div>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <v-list-item v-if="typing">
          <v-list-item-content>
            <v-list-item-title class="caption">{{ typingMessage }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-text-field v-model="newMessage" label="Type a message..." hide-details @keydown.enter="sendMessage"></v-text-field>
        <v-btn @click="sendMessage" :disabled="newMessage.trim() === ''" icon>
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-dialog
      v-model="dialogMembers"
      transition="dialog-bottom-transition"
      width="20%"
    >
      <v-card>
        <v-toolbar
          color="primary"
          title="Member's List"
        ></v-toolbar>
        <v-card-text class="py-4">
          <ul>
            <li v-for="(item, i) in members" :key="i" class="ml-4">
              {{ item.username }}
            </li>
          </ul>
        </v-card-text>
        
        <v-card-actions>
          <v-btn
            color="warning"
            variant="outlined"
            class="mr-3"
            @click="dialogMembers = false"
          >Close</v-btn>
        </v-card-actions>
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
  .chatbox {
    height: calc(100vh - 94px);
  }

  .body-chat {
    height: calc(100% - 130px);
    overflow: auto;
  }

  .bubble-chat {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 8px;
    padding: 10px 16px 30px;
    background-color: aquamarine;
    position: relative;
    margin-bottom: 6px;
}

.bubble-chat-text {
    font-size: 14px;
}

.bubble-chat-time {
    font-size: 12px;
    position: absolute;
    bottom: 6px;
    right: 8px;
}

.float-end {
  float: inline-end;
  background-color: aqua;
}

.icon-back {
  font-size: 20px;
  margin-right: 12px;
  cursor: pointer;
}

.room-img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.icon-menus {
  font-size: 20px;
}
</style>