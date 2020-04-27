<template>
    <div id="user">
        <h1>Welcome</h1>
        <p>{{user.firstName}} {{user.lastName}}</p>
         <button @click="logOut()">Logout</button>
    </div>
</template>

<script>

    export default {
        data(){
            return{
             user: {}
            }    
        },
        mounted(){
           console.log('App mounted!');
         if (localStorage.getItem('user')) {
         this.user = JSON.parse(localStorage.getItem('user')); 
          console.log(this.user)
         }
        },        
        methods: {
      logOut(){      
      this.loggedIn = false;
      this.logOuTT();
    },
    logOuTT: function(){
       this.$store.commit("setGlobalInlogState", this.loggedIn);  
    }
        }
        
        
    
    }
</script>

<style scoped></style>