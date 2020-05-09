import Vue from 'vue'

export let store = Vue.observable({count: 0, name: 'li'})
export let mutations = {
  setCount (count) {
    store.count = count
  },
  changeName (name) {
    store.name = name
  }
}
