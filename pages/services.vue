<template>
    <div>
      <div class="pages">
        <v-btn v-on:click="sortNames">Отсортировать услуги по Алфавиту</v-btn>
      </div>
      <v-btn v-if="!isFives" v-on:click="filterByCategory" >Отобразить только услуги с категорией 1</v-btn>
      <v-btn v-if="isFives" v-on:click="show" >Отобразить все услуги</v-btn>
        <ul>
          <Order v-bind:services="services" />
        </ul>
      <div class="pages">
        <v-btn v-on:click="prev" >Предыдущая</v-btn>
        <v-btn v-on:click="next" >След страница</v-btn> 
      </div>
      <v-btn v-on:click="drop">Сбросить сортировку и фильтр</v-btn>
    </div>
</template>

<script>
import Order from '@/components/Order'

export default {
  data() {
    return {
      isFives: false
    }
  },
  components: {Order},
  async fetch({store}) {
    if (store.getters['ser/services'].length === 0) {
      await store.dispatch('ser/fetch')
    }
  },
  computed: {
    services() {
        return this.$store.getters['ser/services'];
    }
  },
  methods: {
    async show() {
      this.isFives = !this.isFives
      await this.$store.dispatch('ser/fetch')
    },
    async filterByCategory() {
      this.isFives = !this.isFives
      await this.$store.dispatch('ser/filterByCategory', this.$store.getters['ser/services'])
    },
    async next() {
      const next = this.$store.getters['ser/next'];
      if (next) {
        this.$store.dispatch('ser/fetchNext', next);
      } else {
        alert('Следующей страницы нет')
      }
    },
    async prev() {
      const prev = this.$store.getters['ser/prev'];
      if (prev) {
        this.$store.dispatch('ser/fetchPrev', prev);
      } else {
        alert('Предыдущей страницы нет')
      }
    },
    async sortNames() {
      await this.$store.dispatch('ser/fetchAll');
      const services = this.$store.getters['ser/services'];
      await this.$store.dispatch('ser/sortByNames', services);
    },
    async drop() {
      this.isFives = false
      await this.$store.dispatch('ser/fetch')
    }
  }
}
</script>

<style>
  .pages {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>