<template>
  <div class="home">
    <header>
      <div id="carousel" class="carousel slide" data-ride="carousel">
        <div class="search_box w-25">
          <form @submit="onSubmit">
            <div class="form-group">
              <label for="inputCity">Stad</label>
              <select id="inputCity" class="form-control" name="inputCity" v-model="_inputCity">
                 <option v-for="city in inputCitys" :key="city.id" >{{city.name}}</option>                
              </select>
            </div>
            
            <div class="form-group">
              <label>Från:</label>
              <input
                type="date"
                name="sdate"
                id="sdate"
                v-model="updateSearchsdate"
                max="3000-12-31"
                min="2020-01-01"
                class="form-control"
              />
            </div>            
            <div class="form-group">
              <label>Till:</label>
              <input
                type="date"
                name="endate"
                id="endate"
                v-model="updateSearchendate"
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
      inputCity: String,
      sdates: Date,
      endates: Date
    };
  },
  async created() {
    await this.$store.dispatch('getCities');    
    this.$store.state.search;
    
    
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
           
    },
    
    
  },

  computed: {
    _inputCity:{
      get(){
        return this.inputCity;
      },
      set(value){
        this.inputCity = value;
        
      }

    },
    inputCitys: {
      get() {
        return this.$store.state.search.inputCities;        
      }
      
    },
    searchUrl(){
        return `/search/${this._inputCity}/${this.updateSearchsdate}/${this.updateSearchendate}` 
    },
        
    
    updateSearchsdate: {
      get() {
        //return this.$store.state.search.sdates;
        return this.sdates;
      },
      set(value) {
        this.sdates = value;
        /* this.$store.commit("updateSearchsdate", value);*/
      }
    },
    updateSearchendate: {
      get() {
        return this.endates;
        //return this.$store.state.search.endates;
      },
      set(value) {
        this.endates = value;
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
