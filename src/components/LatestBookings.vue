<template>
<div class="container p-5" >
  <h3>Senaste bokningar:</h3>
  
  <div class="row">
    <div class="col-4" v-for="latbook in latbooks" :key="latbook.hotelID">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://www2.idrottonline.se/globalassets/uppsala-btk---bordtennis/bilder/uppsala.jpg" alt="Card image cap">
        <div class="card-body">          
          <h5 class="card-title">{{latbook.city}}</h5>
          <p class="card-text">{{latbook.hotelname}}</p>
          <a href="#" class="btn btn-primary">Boka Nu</a>
        </div>
      </div>
    </div>
    </div>
  
</div>
</template>
<script>
export default {
  name : 'LatestBookings',
  data(){
    return{
      latbooks:[]        
    }      
  },

  mounted() {
        this.getlatestbooking();
    },

    

  methods:{
    getlatestbooking: async function() {
      const url = "https://7e717951-d702-4bc1-844b-939b6bde7cb5.mock.pstmn.io/getlatestbooking";
      const result = await fetch(url);
      this.latbooks = await result.json();
    },
    
  }
};
</script>