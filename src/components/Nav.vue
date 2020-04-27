<template>
  <nav id="nav" class="navbar navbar-expand-md navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand">Gavins Travelling</a>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>        
        <li class="nav-item">
          <router-link class="nav-link" to="/hotel/1">Hotel</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/booking/1">Booking</router-link>
        </li>
      </ul>

      <ul v-if="loggedIn" class="nav navbar-nav flex-row justify-content-between ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/user">{{user.firstName | capitalize}} {{user.lastName | capitalize}}</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="logOut()">Logga Ut</a>
        </li>
      </ul> 
      <ul v-else class="nav navbar-nav flex-row justify-content-between ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Bli Kund</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
      </ul> 
    </div>
  </nav>
</template>

<script>
import Vue from 'vue';
Vue.forceUpdate();
export default {
  name: "Nav",
  data() {
    return {
      loggedIn: this.$store.state.loggedin,
      user: {}
    }
  },    
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  computed:{
   loggingIn() {
          return this.$store.state.authentication.status.loggingIn
        }, 
  },
   methods: {
      logOut(){      
      this.loggedIn = false;
      this.logOuTT();
    },
    logOuTT: function(){
       this.$store.commit("setGlobalInlogState", this.loggedIn);  
       this.forceUpdate();
    },
    ForcesUpdate() {
     
      this.$forceUpdate();  
      
    }

   },
  mounted(){
           console.log('App mounted!');
         if (localStorage.getItem('user')) {
         this.user = JSON.parse(localStorage.getItem('user')); 
          console.log(this.user)
         }
        }
};
</script>