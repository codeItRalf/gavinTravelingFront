<template>
  <div class="home">
    <header>
      <div id="carousel" class="carousel slide" data-ride="carousel">
        <div class="search_box w-25">
          <form @submit="onSubmit">
            <div class="form-group">
              <label for="City">Stad</label>
              <select id="City" class="form-control" name="City" v-model="inputCity">
                 <option v-for="city in getCitiesArray" :key="city.id" >{{city.name}}</option>                
              </select>
            </div>
            
            <div class="form-group">
              <label>Från:</label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                v-model="inputStartDate"
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
                max="3000-12-31"
                min="2020-01-01"
                class="form-control"
              />
            </div>            
            <router-link :to="searchUrl" class="btn btn-primary">Sök</router-link>
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
  data() {
    return {
      //lokalvariabel 
      City: String,
      startDate: Date,
      endDate: Date
    };
  },
  async created() {
    await this.$store.dispatch('getCities');  
  },
  methods: {
    onSubmit(evt) {
      this.preventDefault(evt);           
    },       
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
        return `/search/${this.inputCity}/${this.inputStartDate}/${this.inputEndDate}` 
    },     
    inputStartDate: {
      get() {
        //return this.$store.state.search.sdates;
        return this.startDate;
      },
      set(value) {
        this.startDate = value;
        /* this.$store.commit("updateSearchsdate", value);*/
      }
    },
    inputEndDate: {
      get() {
        return this.endDate;
        //return this.$store.state.search.endates;
      },
      set(value) {
        this.endDate = value;
        //this.$store.commit("updateSearchendate", value);
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
}

.search_box label {
  text-align: left;
  float: left;
}

h3 {
  text-align: left;
}
</style>
