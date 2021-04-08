import fb from "firebase";

import Vue from 'vue'
import App from './App.vue'


import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'

import BuyModalComponent from '@/components/BuyModal'

Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyDYq92SseJMQjeEtY22lvoT8FsNsvnvy1I",
      authDomain: "itc-ads-55588.firebaseapp.com",
      projectId: "itc-ads-55588",
      storageBucket: "itc-ads-55588.appspot.com",
      messagingSenderId: "586019214343",
      appId: "1:586019214343:web:daa91bb12e0a9ef75486a2"
    }),
    
    fb.auth().onAuthStateChanged(user => {
      if (user) {
          this.$store.dispatch('autoLoginUser', user)
      } else {
        if(this.$router.history.current.path != '/') {
          this.$router.push('/')
        } 
      }
    })

    this.$store.dispatch('fetchAds')
  },
  render: h => h(App),
 
}).$mount('#app')
