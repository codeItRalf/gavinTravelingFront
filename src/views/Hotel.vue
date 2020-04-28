<template>
  <div class="container-fluid bgimage">
    <div class="row justify-content-center">
      <div class="col-md-6 col-12 mt-1">
        <img class="img-fluid" src="https://via.placeholder.com/500x300" alt="Hotel Image"/>
      </div>
      <div class="col-md-4 col-12 mt-1">
        <h5 class="d-block text-center">Välkommen till Hotell {{ hotel.name | capitalize}}</h5>
        <h6><i :class="starIcon" v-for="i in hotel.stars" :key="i"></i></h6>
        <ul class="nav nav-tabs">
          <li class="active border rounded-top mr-2 bg-info"><a class="text-body" data-toggle="tab" href="#home">Home</a></li>
          <li class="border rounded-top bg-info"><a class="text-body" data-toggle="tab" href="#adress">Kontakta oss</a></li>
        </ul>
        <div class="tab-content bg-info">
          <div id="home" class="tab-pane in active">
            <span v-if="hotel.pool == '1' || 
              hotel.childrenClub == '1' || 
              hotel.nightEntertainment == '1' || 
              hotel.restaurant == '1'" class="text-left"> Vi kan erbjuda följande:
              <ul>
                <li v-if="hotel.pool == '1'" >Pool: <i :class="check"></i></li> 
                <li v-if="hotel.childrenClub == '1'">Barnklubb: <i :class="check"></i></li> 
                <li v-if="hotel.nightEntertainment == '1'">Kvällsunderhållning: <i :class="check"></i></li>
                <li v-if="hotel.restaurant == '1'">Restaurant: <i :class="check"></i></li>  
              </ul>
            </span>
            <p class="text-center">Avstånd till:
              <ul class="text-left">
                <li>Centrum: {{hotel.distanceToCenter}} km</li>
                <li>Strand: {{hotel.distanceToBeach}} km</li>
              </ul>
            </p>
          </div>
          <div id="adress" class="tab-pane fade text-left">
            <h6 class="text-center">Kontaktinformation</h6>
              <ul>
                <ol class="my-1">Stad: {{hotel.city.name | capitalize}}</ol>
                <ol class="my-1">Postnummer: {{hotel.postalCode}}</ol>
                <ol class="my-1">Adress: {{hotel.address}}</ol>
                <ol class="my-1">Telefonnummer: {{hotel.phone}}</ol>
                <ol class="my-1">E-post: {{hotel.eMail}}</ol>
              </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card mx-auto">
      <div class="card-body row">
        <div class="col-md-3 mx-auto">
          <img
            class="d-flex mx-auto img-fluid"
            src="https://via.placeholder.com/150x125"
          />
        </div>
        <div class="col-md-6 col-12">
          <h6 class="card-title text-left">{{ rooms[1].roomType | capitalize }}</h6>
          <p class="card-text text-left my-2">Pris: {{ rooms[1].price }} kr per natt</p>
          <p class="card-text text-left">Lediga rum av denna typ: {{maxEnkelRum}}</p>
        </div>
        <div class="col-md-3 col-12 mx-auto my-auto">
          <div class="col-12">
            <label>Antal rum:</label>
          </div>
          <div class="col-12">
            <input
              class="w-75"
              type="number"
              v-model="antalEnkelrum"
              min="0"
              :max="maxEnkelRum"
              step="1"
            />
          </div>
        </div>
      </div>
      <div class="card-body row">
        <div class="col-md-3 mx-auto">
        <img
          class="d-flex mx-auto img-fluid"
          src="https://via.placeholder.com/150x125"
        />
        </div>
        <div class="col-md-6 col-12">
          <h6 class="card-title text-left">{{ rooms[0].roomType | capitalize }}</h6>
          <p class="card-text text-left my-2">Pris: {{ rooms[0].price }} kr per natt</p>
          <p class="card-text text-left">Lediga rum av denna typ: {{maxDubbelRum}}</p>
        </div>
        <div class="col-md-3 col-12 mx-auto my-auto">
          <div class="col-12">
            <label>Antal rum:</label>
          </div>
          <div class="col-12">
            <input
              class="w-75"
              type="number"
              v-model="antalDubbelrum"
              min="0"
              :max="maxDubbelRum"
              step="1"
              
            />
          </div>
        </div>
      </div>
      <div class="card-body row">
        <div class="col-md-3 mx-auto">
          <img
            class="d-flex mx-auto img-fluid"
            src="https://via.placeholder.com/150x125"
          />
        </div>
        <div class="col-md-6 col-12">
          <h6 class="card-title text-left">{{ rooms[2].roomType | capitalize }}</h6>
          <p class="card-text text-left my-2">Pris: {{ rooms[2].price }} kr per natt</p>
          <p class="card-text text-left">Lediga rum av denna typ: {{maxFamiljeRum}}</p>
        </div>
        <div class="col-md-3 col-12 mx-auto my-auto">
          <div class="col-12">
            <label>Antal rum:</label>
          </div>
          <div class="col-12">
            <input
              class="w-75"
              type="number"
              v-model="antalFamiljerum"
              min="0"
              :max="maxFamiljeRum"
              step="1"
            />
          </div>
        </div>
      </div>
      <div class="col-12" v-if="antalEnkelrum > 0 | antalDubbelrum > 0 | antalFamiljerum > 0">
        <router-link :to="`/booking/${this.hotel.id}`">
          <button  @click="goToBooking" class="btn btn-primary">Gå till bokning</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["booking"],
    data() {
      return {
        starIcon: "far fa-star",
        check: "fas fa-check",
        hotelInfo: []
      };
    },
    async created() {
      await this.$store.dispatch('getHotel', this.$route.params.id);
      this.hotelInfo.push(this.$store.state.booking.globalStartDate)
      this.hotelInfo.push(this.$store.state.booking.globalEndDate)
      this.hotelInfo.push(this.$store.state.hotel.id)
      await this.$store.dispatch('getRooms', this.$route.params.id);
      await this.$store.dispatch('getAvailableRooms', this.hotelInfo)
      this.$store.state.booking;
    },
  methods: {
    goToBooking: function(){
      this.$store.commit("updateBookingRoomPrice", this.rooms)
      this.$store.commit("setExtraBedEnkel", 0);
      this.$store.commit("setExtraBedDubbel", 0);
      this.$store.commit("setExtraBedFamilje", 0);
      this.$store.commit("setHalfPension", 0);
      this.$store.commit("setFullPension", 0);
      this.$store.commit("setAllInclusive", 0);
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed: {
    antalEnkelrum: {
      get() {
        return this.$store.state.booking.room.enkel.antal;
      },
      set(value){
        this.$store.commit('antalEnkel', value)
      }
    },
    antalDubbelrum: {
      get() {
        return this.$store.state.booking.room.dubbel.antal;
      },
      set(value){
        this.$store.commit('antalDubbel', value)
      }
    },
    antalFamiljerum: {
      get() {
        return this.$store.state.booking.room.familje.antal;
      },
      set(value){
        this.$store.commit('antalFamilje', value)
      }
    },
    hotel: {
      get() {
        return this.$store.state.hotel;
      }
    },
    rooms: {
      get(){
        return this.$store.state.rooms;
      },
    },
    maxFamiljeRum:{
      get(){
        let maxAntal = 0;
        for(let i = 0; i < this.$store.state.availableRooms.length; i++) {
          if(this.$store.state.availableRooms[i].roomType.roomType == 'familjerum'){
            maxAntal = maxAntal + 1; 
          }
        }
        return maxAntal;
      }
    },
    maxEnkelRum:{
      get(){
        let maxAntal = 0;
        for(let i = 0; i < this.$store.state.availableRooms.length; i++) {
          if(this.$store.state.availableRooms[i].roomType.roomType == 'enkelrum'){
            maxAntal = maxAntal + 1; 
          }
        }
        return maxAntal;
      }
    },
    maxDubbelRum:{
      get(){
        let maxAntal = 0;
        for(let i = 0; i < this.$store.state.availableRooms.length; i++) {
          if(this.$store.state.availableRooms[i].roomType.roomType == 'dubbelrum'){
            maxAntal = maxAntal + 1; 
          }
        }
        return maxAntal;
      }
    }
  }
};
</script>

<style scoped>
.bgimage {
  /* The image used */
  background-image: url("https://img.guidebook-sweden.com/helsingborgs-kommun/kaernan.jpg");

  /* Half height */
  height: 50%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card {
  width: 75% !important;
}
@media screen and (min-width: 992px){
  .card {
    width: 50% !important;
  }    
}
</style>