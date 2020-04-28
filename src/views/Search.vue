<template>
  <div class="search">
    <div class="container">
      <div class="fixed_search_box">
        <div class="s_box jumbotron">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputState">Stad</label>
              <select
                id="City"
                class="form-control"                
                name="cityName"
                v-model="inputCity">
                <option
                  v-for="cityName in getCitiesArray"
                  :key="cityName.id" @click="cityBtn"
                >{{cityName.name| capitalize}}</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label>Från:</label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                v-model="inputStartDate"
                @input="submitStartDate"
                class="form-control"
              />
            </div>
            <div class="form-group col-md-4">
              <label>Till:</label>
              <input
                type="date"
                name="endDate"
                id="enDate"
                v-model="inputEndDate"
                @input="submitEndDate"
                max="3000-12-31"
                min="2020-01-01"
                class="form-control"
              /> 
            </div>
          </div>  
  
          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="inputAdult">Vuxna</label>
                  <select id="inputAdult" class="form-control" v-model="inputAdult"  >
                    <option selected>Välj...</option>
                    <option value="1" @click="submitAdult">1</option>
                    <option value="2" @click="submitAdult">2</option>
                    <option value="3" @click="submitAdult">3</option>
                    <option value="4" @click="submitAdult">4</option>
                    <option value="5" @click="submitAdult">5</option>
                    <option value="6" @click="submitAdult">6</option>
                    <option value="7" @click="submitAdult">7</option>
                    <option value="8" @click="submitAdult">8</option>
                    <option value="9" @click="submitAdult">9</option>
                    <option value="10" @click="submitAdult">10</option>
                  </select>
            </div>
            <div class="form-group col-md-3">
              <label for="inputChild">Barn</label>
                  <select id="inputChild" class="form-control" v-model="inputChild">
                    <option selected>Välj...</option>
                    <option value="0" @click="submitBaby">0</option>
                    <option value="1" @click="submitChild">1</option>
                    <option value="2" @click="submitChild">2</option>
                    <option value="3" @click="submitChild">3</option>
                    <option value="4" @click="submitChild">4</option>
                    <option value="5" @click="submitChild">5</option>
                    <option value="6" @click="submitChild">6</option>
                    <option value="7" @click="submitChild">7</option>
                    <option value="8" @click="submitChild">8</option>
                    <option value="9" @click="submitChild">9</option>
                    <option value="10" @click="submitChild">10</option>
                  </select>
            </div>
            <div class="form-group col-md-3">
              <label for="inputBaby">Små Barn</label>
                  <select id="inputBaby" class="form-control" v-model="inputBaby">
                    <option selected>Välj...</option>
                    <option value="0" @click="submitBaby">0</option>
                    <option value="1" @click="submitBaby">1</option>
                    <option value="2" @click="submitBaby">2</option>
                    <option value="3" @click="submitBaby">3</option>
                    <option value="4" @click="submitBaby">4</option>
                    <option value="5" @click="submitBaby">5</option>
                    <option value="6" @click="submitBaby">6</option>
                    <option value="7" @click="submitBaby">7</option>
                    <option value="8" @click="submitBaby">8</option>
                    <option value="9" @click="submitBaby">9</option>
                    <option value="10" @click="submitBaby">10</option>
                  </select>
            </div>
            <div class="form-group col-md-3">
              <label for="inputRoom">Rum</label>
                  <select id="inputRoom" class="form-control" v-model="inputRoom">
                    <option selected>Välj...</option>
                    <option value="1" @click="submitRoom">1</option>
                    <option value="2" @click="submitRoom">2</option>
                    <option value="3" @click="submitRoom">3</option>
                    <option value="4" @click="submitRoom">4</option>
                    <option value="5" @click="submitRoom">5</option>
                    <option value="6" @click="submitRoom">6</option>
                    <option value="7" @click="submitRoom">7</option>
                    <option value="8" @click="submitRoom">8</option>
                    <option value="9" @click="submitRoom">9</option>
                    <option value="10" @click="submitRoom">10</option>
                  </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="Centrum">Avstånd till Centrum</label>
              
              <input type="range" class="custom-range" id="Centrum" step="1" max="200" min="0" @input="submitCenter" v-model="inputCenter"><span v-text="totalCenter"></span>
            </div>
            <div class="form-group col-md-6">
              <label for="Strand">Avstånd till Strand</label> 
              <input type="range" class="custom-range" id="Strand" step="1" max="200" min="0" @input="submitBeach" v-model="inputBeach" ><span v-text="totalBeach"></span>
            </div>
          </div>
          <div class="form-row col-12">
            <div class="form-group col-md-6">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" @click="submitPool" unchecked-value="true" v-model="havePool">
                <label class="form-check-label" for="inlineCheckbox1" >Pool</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" @click="submitEnter" unchecked-value="true"  v-model="haveNightEntertain">
                <label class="form-check-label" for="inlineCheckbox2">Kvällsunderhållning</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3"  @click="submitClub" unchecked-value="true"  v-model="haveChildrenClub">
                <label class="form-check-label" for="inlineCheckbox3">Barnklubb</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox4" @click="submitRes" v-model="haveRestaurant" unchecked-value="true">
                <label class="form-check-label" for="inlineCheckbox4">Restaurang</label>
              </div> 
              </div>  
              <div class="form-group col-md-6">        
                  <select id="inputState" class="form-control">
                    <option selected>Välj...</option>
                    <option>Pris: Stigande</option>
                    <option>Pris: Fallande</option>
                    <option>Omdöme: Stigande </option>
                    <option>Omdöme: Fallande</option>            
                  </select>
              </div>   
              </div>
        </div>
              <template class="search_results" v-if="myHotels.length">
                <div id="result" class="result mt-2" v-for="myHotel in myHotels" :key="myHotel.id">
                  <div class="card">
                    <div class="row no-gutters">
                      <div class="col-auto">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Centrala_Malm%C3%B6.jpg/256px-Centrala_Malm%C3%B6.jpg"
                          class="img-fluid"
                          alt
                        />
                      </div>
                      <div class="col p-2">
                        <div class="card-block px-2">
                          <div class="row">
                            <div class="col-8">
                              <h4>{{myHotel.name}}</h4>
                            </div>
                            <div class="col-4">
                              <h5>från {{myHotel.pensionHalfPrice}} Kr</h5>
                            </div>
                          </div>
                          <div class="row hotel_info">
                            <div class="omdome col-12">
                              <div class="icons">
                                <i :class="starIcon" v-for="i in myHotel.stars" :key="i"></i>
                              </div>
                            </div>
                            <div class="col-12 centrum mt-3">
                              <span>Centrum:</span>
                              <span>{{myHotel.distanceToCenter}}</span>
                            </div>
                            <div class="col-12 strand">
                              <span>Strand:</span>
                              <span>{{myHotel.distanceToBeach}}</span>
                            </div>
                            <div class="col-12 extra">
                              <br>
                              <span v-show="myHotel.restaurant">
                                <i class="far fa-check-square"></i>Restaurang
                              </span>
                              <span v-show="myHotel.childrenClub">
                                <i class="far fa-check-square"></i>Barnklubb
                              </span>
                              <span v-show="myHotel.nightEntertainment">
                                <i class="far fa-check-square"></i>Kvällsunderhållning
                              </span>
                              <span v-show="myHotel.pool">
                                <i class="far fa-check-square"></i>Restaurang
                              </span>
                            </div>
                          </div>
                          <router-link
                            :to="`/hotel/${myHotel.id}`"
                            class="btn btn-primary booking_button"
                          >Boka Nu</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <br />
                <h1>Din sökning gav inget resultat</h1>
              </template>         
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: ["booking", "search", "hotel"],
  data() {
    return {
      starIcon: "far fa-star",
      startDate: this.$store.state.booking.globalStartDate,
      cityName: this.$store.state.search.globalCity,
      endDate: this.$store.state.booking.globalEndDate,
      roomCount:  this.$store.state.roomCount,
      distCenter: 100,
      distBeach: 100,
      adult: this.$store.state.booking.party.adults,
      child: this.$store.state.booking.party.children,
      baby: this.$store.state.booking.party.small_children,
      havePool: false,
      haveNightEntertain: false,
      haveChildrenClub: false,
      haveRestaurant: false,
      myHotels: [ ]
 
      
    };
  },
  async created() {
    await this.$store.dispatch("getCities");
  },
  mounted: function() {
    this.defaultValue();
    this.info();
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  methods: { 
     defaultValue: function(){
     //props  from url länk
    },  
    submitStartDate: function(startDate){
      this.$store.commit("setGlobalStartDate", startDate);  
      this.info()    
    },
    submitEndDate: function(endDate){
      this.$store.commit("setGlobalEndDate", endDate); 
      this.info()      
    },
    cityBtn: function(City){      
       this.$store.commit("setGlobalCity", City);       
       this.info();                     
    },   
    submitAdult: function(){
      this.$store.commit("updateBookingPartyAdults", this.adult);      
      this.info()  
    },  
    submitChild: function(){
      this.$store.commit("updateBookingPartyChildren", this.child); 
      this.info() 
    },   
    submitBaby: function(){
      this.$store.commit("updateBookingPartySmallChildren", this.baby);  
      this.info() 
    },
    submitRoom: function(){
        this.$store.commit("updateRoomCount", this.roomCount); 
        this.info() 
    },
     submitCenter: function(){
        
    },
    submitBeach: function(){        
       
    },
    submitPool: function(){        
               
    },
     submitEnter: function(){        
              
    },
    submitClub: function(){        
        
    },
    submitRes: function(){        
        
        
    },

    async info() {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Basic dGVzdEBtYWlsLmNvbTp1c2Vy");
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var urlencoded = new URLSearchParams();
      urlencoded.append("cityName", this.cityName);
      urlencoded.append("startDate", this.startDate);
      urlencoded.append("endDate", this.endDate);
      urlencoded.append("roomCount", this.roomCount);
      urlencoded.append("distCenter", this.distCenter);
      urlencoded.append("distBeach", this.distBeach);
      //urlencoded.append("havePool", this.havePool);
      //urlencoded.append("haveNightEntertain", this.haveNightEntertain);
      //urlencoded.append("haveChildrenClub", this.haveChildrenClub);
      //urlencoded.append("haveRestaurant", this.haveRestaurant);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      };

      fetch("http://localhost:9090/rest/filterHotel", requestOptions)
        .then(response => response.json())
        .then(json => {
          this.myHotels = json;
        })
        .catch(error => console.log("error", error));
    }
  },

  computed: {
    totalBeach: function(){
      return this.distBeach
    },
    totalCenter: function(){
      return this.distCenter
    },
    inputCenter:{
      get(){
        return this.distCenter;
      },
      set(value){
        this.distCenter = value;
      }
    },
    inputBeach:{
      get(){
        return this.distBeach;
      },
      set(value){
        this.distBeach = value;
      }
    },
    inputCity:{
      get(){        
        return this.cityName;
      },
      set(value) {
        this.cityName = value;
      }
    },
    getCitiesArray: {
      get() {
        return this.$store.state.search.inputCities;
      }
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
        this.endtDate = value;
      }
    },
    inputAdult: {
      get() {
        return this.adult;
      },
      set(value) {
        this.adult = parseInt(value);
      }
    },
    inputChild: {
      get() {
        return this.child;
      },
      set(value) {
        this.child = parseInt(value);
      }
    },
    inputBaby: {
      get() {
        return this.baby;
      },
      set(value) {
        this.baby = parseInt(value);
      }
    },
    inputRoom: {
      get() {
        return this.roomCount;
      },
      set(value) {
        this.roomCount = value;
      }
    }
  }
};
</script>

<style scoped>
@import "../style.css";
.card-block {
  margin-top: 1%;
}
.card-block h4,
.strand,
.centrum {
  text-align: left;
}

.card-block h5 {
  text-align: right;
}

.icons {
  color: black;
  size: 25px;
  float: left;
}

.booking_button {
  float: right;
  position: absolute;
  bottom: 15px;
  right: 15px;
}

.extra {
  text-align: left;
}

.extra i {
  margin-left: 2%;
}

.fixed_search_box .btn-primary {
  float: right;
}

.s_box {
  text-align: left;
}
</style>
