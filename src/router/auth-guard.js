import store from '../store/'



export default  function (to, from, next) {
    
    //console.log('store.getters.user', store.getters.user)


    console.log('auth')
        if(store.getters.user) {
            next()
        } else {
           next('/login?loginError=true')
        }
  

    
}
