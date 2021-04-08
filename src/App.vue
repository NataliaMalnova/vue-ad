<template>
  <v-app>
   <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
          v-for = "link of links" :key="link.title">
          <v-list-item :to="link.url">
            <v-list-item-icon>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item>

         
        </v-list-item-group>
         <v-list-item @click="onLogout" v-if="isUserLoggedIn">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-navigation-drawer app temporary></v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Ad application</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn dark color="primary" depressed  v-for = "link of links" :key="link.title"  :to="link.url">
          <v-icon left dark >
            {{link.icon}}
          </v-icon>
          {{link.title}}
        </v-btn>
        <v-btn dark color="primary" depressed @click="onLogout" v-if="isUserLoggedIn">
          <v-icon left dark >
           mdi-account
          </v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
      
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
      <template v-if="error">
        <v-snackbar
          :timeout="5000"
          @input="closeError"
          :value="true"
          color="error">
          {{ error }}
            <v-btn
              dark
              text
              @click.native="closeError"
            > close</v-btn>
        
        </v-snackbar>
    </template>
  </v-app>
</template>

<script>

  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
    computed: {
      error () {
        return this.$store.getters.error
      },
      isUserLoggedIn () {
        return this.$store.getters.isUserLoggedIn
      },
      links () {
        if(this.isUserLoggedIn) {
          return [
            { title: 'Orders', icon: 'mdi-dialpad', url: '/orders'},
            { title: 'New ad', icon: 'mdi-pencil', url: '/new'},
            { title: 'My ads', icon: 'mdi-arrow-up-bold-box-outline', url: '/list'}
          ]
        }
        return [
          { title: 'Sign in', icon: 'mdi-account', url: '/login'}
        ]
      }
    },
    methods: {
      closeError () {
        this.$store.dispatch('clearError')
      },
      onLogout () {
        this.$store.dispatch('logoutUser')
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pointer{
    cursor: pointer;
  }
</style>
