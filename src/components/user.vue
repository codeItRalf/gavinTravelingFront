<template>
    <div id="user">
        <h1>Welcome</h1>
        <p>{{user.firstName}} {{user.lastName}}</p>
         <router-link to="/login">Logout</router-link>
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
        }
        
        
    
    }
</script>

<style scoped></style>