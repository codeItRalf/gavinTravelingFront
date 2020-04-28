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
      </ul>

      <ul v-if="authenticated" class="nav navbar-nav flex-row justify-content-between ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" v:model="UserWatcher" to="/user">{{user.firstName | capitalize}} {{user.lastName | capitalize}}</router-link>
        </li>
        <li class="nav-item">
          <button  class="nav-link btn btn-primary"  @click="logout()">Logga Ut</button>
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

export default {
  name: "Nav",
  data() {
    return {       
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
  methods:{
    logout: function(){           
      this.$store.dispatch('authentication/logout');  
    },

  },
  computed: {
     authenticated: function(){
      return this.$store.state.authentication.status.loggedIn;
    },
    UserWatcher: function(){
      
      return this.user.firstName && this.user.lastName
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