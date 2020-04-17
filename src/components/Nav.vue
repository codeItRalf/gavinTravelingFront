<template>
<nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Gavins Travelling</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#"><router-link to="/">Home</router-link></a>
      </li>      
      <li class="nav-item">
        <a class="nav-link" href="#"><router-link to="/search">Search</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><router-link to="/hotel">Hotel</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><router-link to="/booking">Booking</router-link></a>
      </li>
    </ul>

              <ul class="nav navbar-nav flex-row justify-content-between ml-auto">   

                
            
             
            
            <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/bli_kund">Bli Kund</router-link></a>
            </li><li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/login">Login</router-link></a>
            </li>
            </ul>
    
  </div>
</nav>
</template>

<script>



export default {
  name: "Nav",
   

    }
</script>