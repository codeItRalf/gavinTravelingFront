<template>
  <div class="home">

    <header>
      
  <div id="carousel" class="carousel slide" data-ride="carousel">
    <div class="search_box w-25">        
      <form @submit="onSubmit" >       
        <div class="form-group">
          <label for="inputState">Stad</label>
          <select id="inputState" class="form-control" v-model="inputStates">
            <option selected>Välj</option>
            <option>Stockholm</option>
            <option>Malmö</option>
          </select>
        </div>
        <span>Selected: {{ inputStates }}</span>
        <div class="form-group">
        <label >Från:</label>
        <input type="date" name="sdate" id="sdate" v-model="sdates" max="3000-12-31" 
                min="2020-01-01" class="form-control">
        </div>
        <span>Selected: {{ sdates }}</span>
        <div class="form-group">
        <label >Till:</label>
        <input type="date" name="endate" id="endate" v-model="endates" max="3000-12-31" 
                min="2020-01-01" class="form-control">
        </div>
        <span>Selected: {{ endates }}</span>
        <div class="form-group">
          <label for="inputAdult">Vuxna</label>
          <select id="inputAdult" class="form-control" v-model="adults">  
            <option selected>Välj</option>
            <option>1</option>
            <option>2</option>  
            <option>3</option>
            <option>4</option>   
            <option>5</option>        
          </select>

          
        </div>
        <span>Selected: {{ adults }}</span>
        <div class="form-group">
          <label for="inputChild">Barn</label>
          <select id="inputChild" class="form-control" v-model="children">   
            <option selected>Välj</option>
            <option>1</option>
            <option>2</option>  
            <option>3</option>
            <option>4</option>   
            <option>5</option>          
          </select>
          
        </div>  
        <span>Selected: {{ children }}</span>      
          <button type="submit" class="btn btn-primary">Sök</button>
        </form>
      </div>
    <ol class="carousel-indicators">
      <li data-target="#carousel" data-slide-to="0" class="active"></li>
      <li data-target="#carousel" data-slide-to="1"></li>
      <li data-target="#carousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">      
      <div class="carousel-item active" style="background-image: url('https://besthqwallpapers.com/Uploads/31-3-2017/14914/stockholm-sunset-old-town-cityscapes-sweden.jpg')">        
      </div>      
      <div class="carousel-item" style="background-image: url('https://www2.idrottonline.se/globalassets/uppsala-btk---bordtennis/bilder/uppsala.jpg')">        
      </div>      
      <div class="carousel-item" style="background-image: url('https://www.kirunaaurora.com/images/s2dlogo.jpg')">        
      </div>
    </div>    
  </div>
</header>

  <LatestBookings></LatestBookings>
  


    
    
  </div>
</template>


<script>
import LatestBookings from "../components/LatestBookings.vue";
export default {
  props: ["search"],
  components: {
    LatestBookings
  },
  data() {
      return {        
        inputStates: ' ',        
        sdates: ' ',
        endates: ' ',
        adults: ' ',        
        children: ' ',      
                
    }
  },
  created() {
    this.$store.state.search;
     this.upDateSearch();   
  },
  methods: {
     onSubmit(evt) {
        evt.preventDefault()
        
        this.upDateSearch();          
      },
      upDateSearch: function(){
      this.$store.commit("updateSearchinputState", this.inputStates)
      this.$store.commit("updateSearchsdate", this.sdates);
      this.$store.commit("updateSearchendate", this.endates);
      this.$store.commit("updateSearchadults", this.adults);
      this.$store.commit("updateSearchchildren", this.children);
      console.log(this.inputStates);
    }
  },
   

computed: {
  updateSearchinputState: {
    get() {
      return this.$store.state.search.inputStates;
    },
    set(value){
      this.search.inputStates = value;
      this.$store.commit('updateSearchinputState', value)
    }
  },
  updateSearchsdate: {
    get() {
      return this.$store.state.search.sdates;
    },
    set(value){
      this.sdates = value;
      this.$store.commit('updateSearchsdate', value)
    }
  },
  updateSearchendate: {
    get() {
      return this.$store.state.search.endates;
    },
    set(value){
      this.endates = value;
      this.$store.commit('updateSearchendate', value)
    }
  },
  updateSearchadults: {
    get() {
      return this.$store.state.search.adults;
    },
    set(value){
      this.adults = value;
      this.$store.commit('updateSearchadults', value)
    }
  },
  updateSearchchildren: {
    get() {
      return this.$store.state.search.children;
    },
    set(value){
      this.sdates = value;
      this.$store.commit('updateSearchchildren', value)
    }
  }
}


  
};
  
</script>


<style scoped>
.carousel-item {
  height: 100vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.search_box{
  background:white;
  position: absolute;
  left: 200px;
  top: 150px;
  z-index: 500;
  padding: 2%;  
}

.search_box label{
  text-align: left;
  float: left;
}

h3{
text-align: left;
}

</style>
