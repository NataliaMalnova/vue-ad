<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item v-for="(item) of promoAds" :key="item.id" style="background: #c0dcff42;">
            <img :src="item.imageSrc" style="background-size: contain; height: 100%; margin-left: auto; margin-right: auto; display: block;"/>
            <div class="car-link">
              <v-btn class="error" :to="'/ad/' + item.id"> {{ item.title }} </v-btn>
            </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3 v-for="ad of ads" :key="ad.id">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="ad.imageSrc"
              style="background-size: contain; height: 250px;">
              <v-card-title>{{ad.title}}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0"></v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ad.describtion}}</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :to="'/ad/' + ad.id"
                text>Open
              </v-btn>
              <app-buy-modal :ad="ad"></app-buy-modal>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <v-container >
      <v-layout row>
         <v-flex xs12 pt-5 class="text-center ">
            <v-progress-circular
            :size="100"
            color="primary"
            indeterminate
          ></v-progress-circular>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    computed: {
      promoAds () {
        return this.$store.getters.promoAds
      },
      ads () {
        return this.$store.getters.ads
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }

</script>

<style lang="scss" scoped>
  .car-link{
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .v-image__image--cover {
    background-size: contain;
}
</style>