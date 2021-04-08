<template>
    <v-dialog v-model="modal" width="400px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary ml-2" v-bind="attrs" v-on="on" > Buy </v-btn>
        </template>
        <v-card>
            <v-card-title class="headline grey lighten-2">
            Do you wan`t to buy it?
            </v-card-title>

            <v-card-text>
                <v-text-field name="name" v-model="name" label="Your name" type="text"></v-text-field>
                <v-text-field name="phone" v-model="phone" label="Your phone" type="text"></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="onSave" :disabled="localLoading" :loading="localLoading"> Buy it! </v-btn>
                <v-btn color="primary" @click="onCancel" :disabled="localLoading"> Close </v-btn>
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
            name: '',
            phone: '',
            localLoading: false
        }
    },
    methods: {
        onSave () {
            if(this.name !== '' && this.phone !== ''){
                this.localLoading = true
                this.$store.dispatch('createOrder', {
                    name: this.name,
                    phone: this.phone,
                    adId: this.ad.id,
                    ownerId: this.ad.ownerId
                })
                .finally(() => {
                    this.name = ''
                    this.phone = ''
                    this.localLoading = false
                    this.modal = false
                })
            }
        },
        onCancel(){
            this.name = ''
            this.phone = ''
            this.modal = false
        }
    }
}
</script>

<style>

</style>