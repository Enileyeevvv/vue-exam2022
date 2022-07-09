export const state = () => ({
    services: [],
    next: null,
    prev: null
  })
  
  export const mutations = {
    setServices(state, services) {
      state.services = services
    },
    setNext(state, next) {
      state.next = next
    },
    setPrevious(state, prev) {
      state.prev = prev
    },
  }
  
  export const actions = {
    async fetch({commit}) {
      const services = await this.$axios.$get('/api/services/?limit=3')
      commit('setServices', services.results);
      commit('setNext', services.next)
      commit('setPrevious', services.previous);
    },
    async filterByCategory({commit}, services) {
      const filteredServices = [...services].filter(service => service.category === 1);
      commit('setServices', filteredServices)
    },
    async fetchAll({commit}) {
      const services = await this.$axios.$get('/api/services/')
      commit('setServices', services.results)
      commit('setNext', services.next);
      commit('setPrevious', services.previous);
    },
    sortByNames({commit}, services) {
      const sortedServices = [...services].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

      commit('setServices', sortedServices);
    },
    async fetchNext({commit}, nextLink) {
      const services = await this.$axios.$get('/api/' + nextLink.split('/api/')[1]); 
      commit('setServices', services.results);
      commit('setNext', services.next);
      commit('setPrevious', services.previous);
    },
    async fetchPrev({commit}, prevLink) {
      const services = await this.$axios.$get('/api/' + prevLink.split('/api/')[1]); 
      commit('setServices', services.results);
      commit('setNext', services.next);
      commit('setPrevious', services.previous);
    },
  }
  
  export const getters = {
    services: s => {
      console.log('got data')
      return s.services
    },
    next: s => s.next,
    prev: s => s.prev
  }
  