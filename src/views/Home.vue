<template>
  <div class="home">
    <header>
      <div id="carousel" class="carousel slide" data-ride="carousel">
        <div class="search_box">
          <form @submit="onSubmit">
            <div class="form-group">
              <label for="City">Stad</label>
              <select  id="City" class="form-control" name="City" v-model="City">                  
                 <option v-for="city in getCitiesArray" :key="city.id" @click="cityBtn">{{city.name | capitalize}}</option>                
              </select>
            </div>          
            <div class="form-group">
              <label>Från:</label>
              <input
                type="date"
                name="startDate"
                id="startDate"                
                v-model="inputStartDate"
                @input="sdateBtn" 
                max="3000-12-31"
                min="2020-01-01"
                class="form-control"
              />
            </div>            
            <div class="form-group">
              <label>Till:</label>
              <input
                type="date"
                name="endDate"
                id="enDate"
                v-model="inputEndDate"
                @input="endateBtn" 
                max="3000-12-31"
                min="2020-01-01"
                class="form-control"
              />
            </div>            
            <router-link :to="searchUrl" class="btn btn-primary" id="sök">Sök</router-link>
          </form>
        </div>
        <ol class="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div
            class="carousel-item active"
            style="background-image: url('https://besthqwallpapers.com/Uploads/31-3-2017/14914/stockholm-sunset-old-town-cityscapes-sweden.jpg')"
          ></div>
          <div
            class="carousel-item"
            style="background-image: url('https://www2.idrottonline.se/globalassets/uppsala-btk---bordtennis/bilder/uppsala.jpg')"
          ></div>
          <div
            class="carousel-item"
            style="background-image: url('https://www.kirunaaurora.com/images/s2dlogo.jpg')"
          ></div>
        </div>
      </div>
    </header>

    <LatestBookings></LatestBookings>
  </div>
</template>


<script>
import LatestBookings from "../components/LatestBookings.vue";
export default {   
  components: {
    LatestBookings
  },
  props: ["booking", "search", "hotel"], 
  data() {
    return {
      //lokalvariabel      
      City: "String",
      startDate: Date,    
      endDate: Date,

      adult: 1,
      child: 0,
      baby: 0,
      roomCount: 1,
     
    };
  }, mounted () {
    this.defaultValue()        
  }, 
  async created() {
    await this.$store.dispatch('getCities');     
  },
  
  methods: {
    onSubmit(evt) {
      this.preventDefault(evt);           
    },     
     sdateBtn: function(){
       this.$store.commit("setGlobalStartDate", this.startDate);      
    } ,  
    endateBtn: function(){
       this.$store.commit("setGlobalEndDate", this.endDate);      
    } , 
    cityBtn: function(){
       this.$store.commit("setGlobalCity", this.City)      
    } ,
    defaultValue: function(){
      this.City = 'Gagarin' ,        
       this.startDate =  new Date().toISOString().substr(0, 10),    
       this.endDate =  new Date(Date.now()+259200000).toISOString().substring(0,10)  
    } 
  },
   filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed: {
    inputCity:{
      get(){        
        return this.City;
      },
      set(value){        
        this.City = value;        
      }
    },
    getCitiesArray: {
      get() {
        return this.$store.state.search.inputCities;        
      }      
    },    
    searchUrl(){
      this.$store.commit("setGlobalCity", this.City)
      this.$store.commit("setGlobalStartDate", this.startDate);
      this.$store.commit("setGlobalEndDate", this.endDate); 
      this.$store.commit("updateRoomCount", this.roomCount); 
      this.$store.commit("updateBookingPartyAdults", this.adult); 
      this.$store.commit("updateBookingPartyChildren", this.child);
      this.$store.commit("updateBookingPartySmallChildren", this.baby);
      return `/search/${this.inputCity}/${this.inputStartDate}/${this.inputEndDate}`
    },    
    inputStartDate: {
      get() {       
        return this.startDate;
      },
      set(value) {
        this.startDate = value;       
      }
    },
    inputEndDate: {
      get() {
        return this.endDate;        
      },
      set(value) {
        this.endDate = value;        
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

.search_box {
  background: white;
  position: absolute;
  left: 200px;
  top: 150px;
  z-index: 500;
  padding: 2%;
  width: 25% !important;
}
@media screen and (max-width: 768px){
  .search_box {
  background: white;
  position: absolute;
  left: 70px;
  top: 50px;
  z-index: 500;
  padding: 2%;
    width: 75% !important;
  }
}
.search_box label {
  text-align: left;
  float: left;
}

h3 {
  text-align: left;
}
</style>