<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3 mt-4>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form ref="form" v-model="valid" validation>
          <v-row>
            <v-col cols="12">
                <v-text-field v-model="title" type="text" :rules="[v=> !!v || 'Title is required']" label="Title" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea 
                  v-model="describtion" 
                  type="text" 
                  :rules="[v=> !!v || 'Describtion is required']" 
                  name="Describtion" 
                  label="Describtion"
                ></v-textarea>
              </v-col>
          </v-row>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout row column class="d-flex" cols="12" sm="3" xsm="12" align-start mt-3>
      <v-flex xs12 sm6 offset-sm3 mt-4>
        <v-col cols="12">
          <v-btn class="primary" @click="triggerUpload">
            Upload
            <v-icon right dark>mdi-cloud-upload</v-icon>
          </v-btn>
          <input ref="fileInput" type="file" style="display: none;" accept="image/*" @change="onFileChange">
        </v-col>
            <v-col cols="12">
          <img v-if="image" :src="imageSrc" height="100" alt="">
        </v-col>
        <v-col>
          <v-switch
          v-model="promo"
          label="Ad to promo?"
        ></v-switch>
      </v-col>
      </v-flex>
    </v-layout>
    <v-layout row mt-3>
      <v-flex xs12 sm6 offset-sm3 mt-4>
        <v-spacer></v-spacer>
          <v-btn
          :loading="loading"
          :disabled="!valid || !image || loading"
          color="success"
          @click="createAd"
        >Create ad
      </v-btn>
      </v-flex>
    </v-layout>
 
 
  </v-container>
</template>


<script>
export default {
  data: () => ({
    title: "",
    describtion: "",
    valid: true,
    promo: false,
    image: null,
    imageSrc: ''
  }),
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate() && this.image) {
        const ad = {
          title: this.title,
          describtion: this.describtion,
          promo: this.promo,
          imageSrc: this.image
        }
        
        this.$store.dispatch('createAd', ad)
        .then (() => {
          this.$router.push('/list')
        })
        .catch(() => {})
      }
    },
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]

      const reader = new FileReader()
      reader.onload = () => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    }
  }
}
</script>
