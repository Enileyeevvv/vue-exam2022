<template>
    <!-- <div>
        <template  v-for="(service, index) of (services)" >
        <template> 
        <v-subheader
           :key="service.id"
        ></v-subheader>

        <v-divider
           :key="index"
        ></v-divider>

        <v-list-item
         :key="service.name"
        >
          <v-list-item-avatar>
            <v-img :src="require('@/static/task-icon.jpg')"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="'Название: ' + service.name"></v-list-item-title>
            <v-list-item-subtitle v-html="'Описание: ' + service.description"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="'Категория: ' + service.category"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        </template>
      </template>
    </div> -->
    <div style="display: flex; flex-wrap: wrap; margin-top: 15px">
      <v-card
      style="margin-bottom: 15px"
    class="mx-auto"
    max-width="344"
    outlined
     v-for="(service, index) of services"
     :key="index"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Описание: {{service.description}}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Название: {{service.name}}
        </v-list-item-title>
        <v-list-item-subtitle>Категория: {{service.category}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ><v-img max-width="80" :src="require('@/static/service-icon.jpg')" /></v-list-item-avatar>
    </v-list-item>
  </v-card>
    </div>
</template>

<script>
export default {
    props: ['services'],
    name: 'Order'
}
</script>