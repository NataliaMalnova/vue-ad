import fb from 'firebase'

class User {
    constructor (id) {
        this.id = id
    }
}

export default {
    state: {
        user: null
    },

    mutations: {
       setUser(state, payload) {
           state.user = payload

           console.log('user', state.user)
       }
    },

    actions: {
        async registerUser({commit}, {email, password}) {

            commit('clearError')
            commit('setLoading', true)

            try {
                const user = await fb.auth().createUserWithEmailAndPassword(email, password)
                commit('setUser', new User(user.uid))
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },

        async loginUser ({commit}, {email, password}) {
            commit('clearError')
            commit('setLoading', true)

            try {
                const user = await fb.auth().signInWithEmailAndPassword(email, password)
                commit('setUser', new User(user.uid))
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },

        async autoLoginUser ({commit}, payload) {
            
            console.log('payload = ', payload.uid)
            try {
                //const user = await new User(payload.uid)
                commit('setUser', await new User(payload.uid))
            } catch (error) {
                commit('setError', error.message)
                throw error
            }
        },

        logoutUser({commit}) {
            fb.auth().signOut()
            commit('setUser', null) 
        }
    },

    getters: {
        user(state) {
            return state.user
        },
        isUserLoggedIn (state) {
            return state.user !== null
        }
    }
}