<template>
  <v-container>
    <v-layout row v-if="!loading && myAds.length !== 0">
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ads</h1>
        <v-card
          v-for="ad in myAds" :key="ad.id"
          class="elevation-10 mb-3" >
          <v-row no-gutters>
            <v-flex xs4>
              <v-img
              :src="ad.imageSrc" 
                height="100%">
              </v-img>
              
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{ad.title}}</h2>
                <p>{{ad.describtion}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                 class="info"
                 :to="'/ad/' + ad.id">
                 Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-row>
        </v-card>

      </v-flex>
    </v-layout>
    <v-layout row v-else-if="!loading && myAds.length === 0">
      <v-flex xs12 sm6 offset-sm3>
          <h1 class="text--secondary mb-3">You have not ads</h1>
      </v-flex>
    </v-layout>
     <v-layout row v-else>
      <v-flex xs12 sm6 offset-sm3>
         <v-flex xs12 pt-5 class="text-center ">
            <v-progress-circular
            :size="100"
            color="primary"
            indeterminate
          ></v-progress-circular>
          </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
