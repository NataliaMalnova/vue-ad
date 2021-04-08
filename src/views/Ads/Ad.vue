<template>
  <v-container>
    <v-layout row mt-3>
      <v-flex xs12>
        <v-card v-if="!loading" class="elevation-10 mb-3" >
              <img
                :src="ad.imageSrc" 
                 style="background-size: contain; height: 500px; margin-left: auto; margin-right: auto; display: block;"
                 />
              
              <v-card-text>
                <h1 class="text--primary">{{ad.title}}</h1>
                <p>{{ad.describtion}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <addEditAdd :ad="ad" v-if="isOwner"></addEditAdd>
                <app-buy-modal :ad="ad"></app-buy-modal>
              </v-card-actions>
        </v-card>
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
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import EditAdModal from '@/components/EditAdModal'
export default {
  props: ['id'],
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    },
    loading () {
      return this.$store.getters.loading
    },
    isOwner () {
      
      if(this.$store.getters.user !== null)  {
        return this.ad.ownerId === this.$store.getters.user.id
      } else {
        return false
      }

    }
  },
  components: {
    addEditAdd: EditAdModal
  }
}
</script>
