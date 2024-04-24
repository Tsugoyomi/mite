<script setup lang="ts">
  import draggable from 'vuedraggable';

  definePageMeta({
    middleware: defineNuxtRouteMiddleware((to, from) => {
      return navigateTo('/innocence');
    })
  })

  const drag = ref(false);
  const dragOptions = ref({
    animation: 250,
    group: 'people',
    disabled: false,
    ghostClass: 'ghost'
  });
  const board = ref([
    { title: 'Pending', list: [] },
    { title: 'In Progress', list: [] },
    { title: 'Ready For Testing', list: [] },
    { title: 'Testing', list: [] },
    { title: 'Review', list: [] },
    { title: 'Done', list: [] },
  ]);
  const dialogCard = ref(false);
  const tempCardId = ref(0);

  const addCard = (e: any) => {
    const idBoard = e.srcElement.id && e.srcElement.id !== '' ? e.srcElement.id : e.srcElement.offsetParent.id;
    const split = idBoard.split('-');
    tempCardId.value = parseInt(split[1]);
    dialogCard.value = true;
  }

  const reorder = (e: any) => {
  }

  const toCreateCard = (e: any) => {}
</script>

<template>
  <div class="containerz w-100 py-4" style="position: relative;">
    <v-row>
      <v-col cols="12" md="2" v-for="(item, i) in board" :key="i">
        <!-- Header -->
        <v-row class="bg-primary text-center">
          <v-col cols="12">
            <h5 class="mb-0">{{ item.title }}</h5>
          </v-col>
        </v-row>
        <!-- End Header -->
        <!-- Body -->
        <v-row>
          <v-col cols="12">
            <draggable :list="item.list" group="tsugoyomi" v-bind="dragOptions" item-key="title" @change="reorder">
              <template #item="{element}">
                <div>
                  <v-card class="elevation-6 card-board mb-2">
                    <v-card-text class="pt-3">
                      <h4 class="mb-1">{{ element.name }}</h4>
                      <div class="d-flex">
                        <div class="due-date-sign bg-success" v-if="element.dueDate">
                          <v-icon>mdi-clock-time-nine-outline</v-icon>
                          <span class="ml-1">May 26, 2024</span>
                        </div>
                        <div class="attachment-sign ml-1" v-if="element.attachment">
                          <v-icon>mdi-paperclip</v-icon>
                          <span>1</span>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                </div>
              </template>

              <template #footer>
                <v-btn block variant="outlined" :id="`add-${i}`" role="group" key="footer" color="primary" density="compact" class="mt-2" @click="addCard">
                  <v-icon>mdi-plus</v-icon>
                  Add a card
                </v-btn>
              </template>
            </draggable>
          </v-col>
        </v-row>
        <!-- End Body -->
      </v-col>
    </v-row>

    <!-- Modal Card -->
    <v-dialog
      v-model="dialogCard"
      transition="dialog-bottom-transition"
      width="70%"
    >
      <v-card>
        <v-card-title class="pl-2">
          <v-text-field
            density="compact"
            variant="outline"
            prepend-inner-icon="mdi-archive"
            single-line
            hide-details
            class="mt-3 text-primary"
          ></v-text-field>
        </v-card-title>
        <v-card-text>
          <v-form ref="formInput" @submit.prevent="toCreateCard()">
            <v-row>
              <v-col cols="9">
                <v-textarea
                  auto-grow
                  label="Description"
                  variant="outlined"
                  rows="4"
                  shaped
                ></v-textarea>
              </v-col>
              <v-col cols="3">
                <v-card class="elevation-4 mb-3">
                  <v-card-text class="py-2 d-flex card-side-items">
                    <v-icon class="mr-2">mdi-account-clock</v-icon> Due Date
                  </v-card-text>
                </v-card>
                <v-card class="elevation-4 mb-3">
                  <v-card-text class="py-2 d-flex card-side-items">
                    <v-icon class="mr-2">mdi-paperclip</v-icon> Attachments
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-divider class="mb-4"></v-divider>

            <div class="text-right">
              <v-btn
                color="warning"
                variant="outlined"
                class="mr-3"
                @click="dialogCard = false"
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
    <!-- End Modal Card -->
  </div>
</template>

<style scoped>
  .card-board {
    width: 100%;
    height: auto;
    padding: 0px;
    cursor: pointer;
  }

  .due-date-sign {
    padding: 2px 4px;
    font-size: 10px;
    border-radius: 4px;
    width: fit-content;
    display: flex;
    align-items: center;
  }

  .attachment-sign {
    font-size: 10px;
    display: flex;
    align-items: center;
  }

  :deep(.v-text-field input) {
    font-size: 20px !important;
  }

  .card-side-items {
    align-items: center;
    font-size: 12px;
    font-weight: bold;
  }
</style>
