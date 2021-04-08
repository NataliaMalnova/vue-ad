<template>
    <v-dialog
        v-model="modal"
        width="400px"
        >
        <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="warning"
          v-bind="attrs"
          v-on="on">
         Eddit
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
         Edit Ad
        </v-card-title>

        <v-card-text>
            <v-text-field name="title" v-model="editedTitle" label="title"></v-text-field>
            <v-text-field name="describtion" v-model="editedDescribtion" label="describtion"></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="onSave"> Save </v-btn>
          <v-btn color="primary" @click="onCancel"> Cancel </v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
    
</template>

<script>
export default {
    props: ['ad'],
    data () {
        return {
            modal: false,
            editedTitle: this.ad.title,
            editedDescribtion: this.ad.describtion
        }
    },
    methods: {
        onSave () {
            if(this.editedDescribtion !== '' && this.editedTitle !== ''){
                this.$store.dispatch('updateAd', {
                    title: this.editedTitle,
                    describtion: this.editedDescribtion,
                    id: this.ad.id
                })
                this.modal = false

            }
        },
        onCancel(){
            this.editedDescribtion = this.ad.describtion
            this.editedTitle = this.ad.title
            this.modal = false
        }
    }
}
</script>

<style>

</style>