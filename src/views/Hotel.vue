<template>
  <div class="row">
    <div class="col-md-2 col-1" />
    <div class="col-md-5 col-10">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-flex"
              src="https://via.placeholder.com/600x250"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-flex"
              src="https://via.placeholder.com/600x250"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-flex"
              src="https://via.placeholder.com/600x250"
              alt="Third slide"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-12">
      <h4 class="d-block text-centre">Välkommen till Hotell {{ hotellet.name }}</h4>
      <h5><i :class="starIcon" v-for="i in 5" :key="i"></i></h5>
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
          <h5 class="text-center">Kontakt information</h5>
            <ul>
              <ol class="my-1">Stad: [{{hotellet.cityId}}]</ol>
              <ol class="my-1">Postnummer: {{hotellet.postalCode}}</ol>
              <ol class="my-1">Adress: {{hotellet.adress}}</ol>
              <ol class="my-1">Telefonnummer: {{hotellet.phone}}</ol>
              <ol class="my-1">E-post: {{hotellet.eMail}}</ol>
            </ul>
        </div>
      </div>
    </div>
    <div class="card w-50 mx-auto">
      <div class="card-body row" v-for="room in roomtype" :key="room.roomTypeId">
        <div class="col-md-3 mx-auto">
          <img
            class="d-flex mx-auto"
            src="https://via.placeholder.com/150x125"
          />
        </div>
        <div class="col-md-6 col-12">
          <h5 class="card-title text-left">{{ room.roomType }}rum</h5>
          <p class="card-text text-left">Pris per natt: {{ room.price }} kr</p>
        </div>
        <div class="col-md-3 col-12 mx-auto my-auto">
          <div class="col-12">
            <label for="antalrum">Antal rum:</label>
          </div>
          <div class="col-12">
            <input
              class="antalrum w-75"
              type="number"
              value="0"
              min="0"
              max="30"
              step="1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      starIcon: "far fa-star",
      check: "fas fa-check",
      hotellet: [],
      roomtype: [],
    };
  },
  mounted() {
    this.getHotel();
  },
  methods: {
    getHotel: async function() {
      const result = await fetch("https://8e405e37-c9b6-4cd7-ab26-0db07e67fe46.mock.pstmn.io/rest/hotel/1");
      this.hotellet = await result.json();
      this.getRoomType();
    },
    getRoomType: async function() {
      const url = "https://c75bfc7d-ae5b-4fdf-a442-93154d46377b.mock.pstmn.io/rest/hotel/roomtype/" + this.hotellet.hotelId;
      const result = await fetch(url);
      this.roomtype = await result.json();
    },
  },
};
</script>

<style src="@/style.css">
.carousel-inner img {
  margin: auto;
}
</style>
