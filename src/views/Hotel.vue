<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 col-1" />
      <div class="col-md-5 col-10">
        <img src="https://via.placeholder.com/450x250" alt="Hotel Image"/>
      </div>
      <div class="col-md-4 col-12">
        <h5 class="d-block text-centre">Välkommen till Hotell {{ hotellet.name | capitalize}}</h5>
        <h6><i :class="starIcon" v-for="i in hotellet.stars" :key="i"></i></h6>
        <ul class="nav nav-tabs">
          <li class="active border rounded-top mr-2"><a data-toggle="tab" href="#home">Home</a></li>
          <li class="border rounded-top"><a data-toggle="tab" href="#adress">Kontakta oss</a></li>
        </ul>
        <div class="tab-content">
          <div id="home" class="tab-pane in active">
            <span v-if="hotellet.pool == '1' || 
              hotellet.childrenClub == '1' || 
              hotellet.nightEntertainment == '1' || 
              hotellet.restaurant == '1'" class="text-left"> Vi kan erbjuda följande:
              <ul>
                <li v-if="hotellet.pool == '1'" >Pool: <i :class="check"></i></li> 
                <li v-if="hotellet.childrenClub == '1'">Barnklubb: <i :class="check"></i></li> 
                <li v-if="hotellet.nightEntertainment == '1'">Kvällsunderhållning: <i :class="check"></i></li>
                <li v-if="hotellet.restaurant == '1'">Restaurant: <i :class="check"></i></li>  
              </ul>
            </span>
            <p class="text-centre">Avstånd till:
              <ul class="text-left">
                <li>Centrum: {{hotellet.distanceToCenter}} km</li>
                <li>Strand: {{hotellet.distanceToBeach}} km</li>
              </ul>
            </p>
          </div>
          <div id="adress" class="tab-pane fade text-left">
            <h6 class="text-center">Kontaktinformation</h6>
              <ul>
                <ol class="my-1">Stad: {{hotellet.city.name | capitalize}}</ol>
                <ol class="my-1">Postnummer: {{hotellet.postalCode}}</ol>
                <ol class="my-1">Adress: {{hotellet.address}}</ol>
                <ol class="my-1">Telefonnummer: {{hotellet.phone}}</ol>
                <ol class="my-1">E-post: {{hotellet.eMail}}</ol>
              </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="card w-75 mx-auto">
      <div class="card-body row">
        <div class="col-md-3 mx-auto">
          <img
            class="d-flex mx-auto"
            src="https://via.placeholder.com/150x125"
          />
        </div>
        <div class="col-md-6 col-12">
          <h6 class="card-title text-left">{{ rooms[0].roomType | capitalize }}</h6>
          <p class="card-text text-left">Pris per natt: {{ rooms[0].price }} kr</p>
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
              max="30"
              step="1"
            />
          </div>
        </div>
      </div>
      <div class="card-body row">
        <div class="col-md-3 mx-auto">
        <img
          class="d-flex mx-auto"
          src="https://via.placeholder.com/150x125"
        />
        </div>
        <div class="col-md-6 col-12">
          <h6 class="card-title text-left">{{ rooms[1].roomType | capitalize }}</h6>
          <p class="card-text text-left">Pris per natt: {{ rooms[1].price }} kr</p>
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
              max="30"
              step="1"
              
            />
          </div>
        </div>
      </div>
      <div class="card-body row">
        <div class="col-md-3 mx-auto">
          <img
            class="d-flex mx-auto"
            src="https://via.placeholder.com/150x125"
          />
        </div>
        <div class="col-md-6 col-12">
          <h6 class="card-title text-left">{{ rooms[2].roomType | capitalize }}</h6>
          <p class="card-text text-left">Pris per natt: {{ rooms[2].price }} kr</p>
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
              max="30"
              step="1"
            />
          </div>
        </div>
      </div>
      <div class="col-12" v-if="antalEnkelrum > 0 | antalDubbelrum > 0 | antalFamiljerum > 0">
        <router-link to="/booking">
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
      hotellet: [],
      rooms: [],
      rum:{
        antal: [0, 0, 0]
      },
      party:[2, 3, 4],
    };
  },
  created() {
    this.$store.state.booking;
    this.getHotel();
  },
  methods: {
    getHotel: async function() {
      const result = await fetch("http://localhost:9090/rest/hotels/1");
      this.hotellet = await result.json();
      this.getRoomType();
    },
    getRoomType: async function() {
      const url = "https://c75bfc7d-ae5b-4fdf-a442-93154d46377b.mock.pstmn.io/rest/hotel/roomtype/" + this.hotellet.id;
      const result = await fetch(url);
      this.rooms = await result.json();
    },
    goToBooking: function(){
      this.$store.commit("updateBookingRoomPrice", this.rooms)
      this.$store.commit("updateBookingHotel", this.hotellet);
      this.$store.commit("updateBookingParty", this.party);
    },
    changeAntalEnkel(e){
      this.$store.commit("antalEnkel", e.target.value);
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
  antalEnkelrum: {
    get() {
      return this.$store.state.booking.room.enkel.antal;
    },
    set(value){
      this.rum.antal[0] = value;
      this.$store.commit('antalEnkel', value)
    }
  },
  antalDubbelrum: {
    get() {
      return this.$store.state.booking.room.dubbel.antal;
    },
    set(value){
      this.rum.antal[1] = value;
      this.$store.commit('antalDubbel', value)
    }
  },
  antalFamiljerum: {
    get() {
      return this.$store.state.booking.room.familje.antal;
    },
    set(value){
      this.rum.antal[2] = value;
      this.$store.commit('antalFamilje', value)
    }
  }
  }
};
</script>

<style src="@/style.css">
.carousel-inner img {
  margin: auto;
}
</style>