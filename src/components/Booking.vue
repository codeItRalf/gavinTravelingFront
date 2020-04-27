<template>
  <div class="container-fluid bgimage">
    <div class="row order-1 order-md-12 d-none d-lg-block">
      <div class="col-md-3 p-1 mx-auto text-left change card bg-info">
        <h5>Hotellets kontaktuppgifter:</h5>
        <p>Telefonnummer: {{hotel.phone}}</p>
        <p>E-post: {{hotel.eMail}}</p>
        <p>Adress: {{hotel.address}}</p>
        <p>{{hotel.postalCode}} {{hotel.city.name | capitalize}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 mx-auto">
        <h2>Hotell {{ hotel.name | capitalize}}</h2>
      </div>
      <div class="col-md-8 mx-auto card borderless bg-transparent">
        <ul>
          <li  class="list-group-item w-75 text-left">
            <h5 class="text-left">Rum</h5>
            <div class="row border-bottom" v-if="enkelRum > 0">
              <div class="col-md-6" >
                <p>Antal {{rooms[1].roomType | capitalize}}: {{enkelRum}}</p>
                <p>Pris: {{enkelRumPris}}kr</p>
              </div>
              <div class="col-md-6">
                <p>Antal extrasängar:</p>
                <input
                  type="number"
                  v-model="enkelRumExtraBed"
                  class="w-75"
                  min="0"
                  :max="enkelRum"
                />
              </div>
            </div>
            <div class="row border-bottom my-2" v-if="dubbelRum > 0">
              <div class="col-md-6">
                <p>Antal {{rooms[0].roomType | capitalize}}: {{dubbelRum}}</p>
                <p>Pris: {{dubbelRumPris}}kr</p>
              </div>
              <div class="col-md-6">
                <p>Antal extrasängar:</p>
                <input
                  type="number"
                  v-model="dubbelRumExtraBed"
                  class="w-75"
                  min="0"
                  :max="dubbelRum"
                />
              </div>
            </div>
            <div class="row my-2" v-if="familjeRum > 0">
              <div class="col-md-6">
                <p>Antal {{rooms[2].roomType | capitalize}}: {{familjeRum}}</p>
                <p>Pris: {{familjeRumPris}}kr</p>
              </div>
              <div class="col-md-6">
                <p>Antal extrasängar:</p>
                <input
                  type="number"
                  v-model="familjeRumExtraBed"
                  class="w-75"
                  min="0"
                  :max="familjeRum"
                />
              </div>
            </div>
          </li>
          <li class="list-group-item w-75 text-left">
            <h5>Datum</h5>
            <h6>Från: {{startDate}}</h6>
            <h6>Till: {{endDate}}</h6>
          </li>
          <li class="list-group-item w-75 text-left">
            <h5>Vafan vill ni ha till?</h5>
            <p>
              Halv-pension:
              <input
                class="w-25"
                type="number"
                name="halvPension"
                min="0"
                v-model="halvPension"
                :max="maxTillvalHalvPension"
              />
              {{hotel.pensionHalfPrice}}kr per person
            </p>
            <p>
              Hel-pension:
              <input
                class="w-25"
                type="number"
                name="fullPension"
                min="0"
                v-model="fullPension"
                :max="maxTillvalFullPension"
              />
              {{hotel.pensionFullPrice}}kr per person
            </p>
            <p>
              All-inclusive:
              <input
                class="w-25"
                type="number"
                name="allInclusive"
                min="0"
                v-model="allInclusive"
                :max="maxTillvalAllInclusive"
              />
              {{hotel.allInclusive}}kr per person
            </p>
          </li>
          <li class="list-group-item w-75 text-left">
            <h6>Antal i sällskapet:</h6>
            <p
              class="my-1"
              v-if="$store.state.booking.party.adults > 0"
            >Vuxna: {{$store.state.booking.party.adults}}</p>
            <p
              class="my-1"
              v-if="$store.state.booking.party.children > 0"
            >Barn: {{$store.state.booking.party.children}}</p>
            <p
              class="my-1"
              v-if="$store.state.booking.party.small_children > 0"
            >Småbarn: {{$store.state.booking.party.small_children}}</p>
          </li>
          <li class="list-group-item w-75 text-left">
            <h6 class="my-1">Moms (25%): {{calculateTotal * 0.25}}kr</h6>
            <h5 class="my-1">Total pris: {{calculateTotal}}kr</h5>
          </li>
          <li class="list-group-item w-75">
            <h6 class="text-danger" v-if="(halvPension + fullPension + allInclusive) < ($store.state.booking.party.adults + $store.state.booking.party.children + $store.state.booking.party.small_children)">
              OBS! Antal tillval är mindre än antal personer i sällskapet
            </h6>
            <button class="btn btn-primary" data-toggle="modal" data-target="#confirmation">Boka nu för fan!</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="row d-lg-none">
      <div class="col-md-8 mx-auto text-left card bg-info">
        <h5>Hotellets kontaktuppgifter:</h5>
        <p>Telefonnummer: {{hotel.phone}}</p>
        <p>E-post: {{hotel.eMail}}</p>
        <p>Adress: {{hotel.address}}</p>
        <p>{{hotel.postalCode}} {{hotel.city.name | capitalize}}</p>
      </div>
    </div>
    <div class="modal fade" tabindex="-1" role="dialog" id="confirmation">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Bokningsbekräftelse</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img class="img-fluid" src="https://i.redd.it/zozo0uauf0v41.jpg" alt="Can't believe you've done this" srcset="">
            <h4 :class="showHide">Tack för din bokning!</h4>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="confirmBooking">Bekräfta bokning</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Avbryt</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["booking"],
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  data() {
      return {
        totalPris: 0,
        confirmationText: "Tack för din bokning",
        showHide: "d-none",
        hideShow: "d-block",
        extraBedAntal: [this.$store.state.booking.room.enkel.antal, this.$store.state.booking.room.dubbel.antal, this.$store.state.booking.room.familje.antal],
        createBooking: {
          personCount: this.$store.state.booking.party.adults,
          childrenCount: this.$store.state.booking.party.children,
          smallChildrenCount: this.$store.state.booking.party.small_children,
          halfPension: this.$store.state.booking.halfPension,
          fullPension: this.$store.state.booking.fullPension,
          allInclusive: this.$store.state.booking.allInclusive,
          tokenId: /**WHAT DO I PUT HERE?!?!?! */"sjjss",
          startDate: this.$store.state.booking.globalStartDate,
          endDate: this.$store.state.booking.globalEndDate,
          roomsToBook: [],
        }
      }
    },
  methods: {
    confirmBooking: function(){
      this.showHide = "d-block"
      this.hideShow = "d-none"
    }
  },
  computed: {
    enkelRum: {
      get() {
        return this.$store.state.booking.room.enkel.antal;
      }
    },
    enkelRumExtraBed: {
      get() {
        return this.$store.state.booking.room.enkel.extraBed;
      },
      set(value) {
        this.$store.commit("setExtraBedEnkel", value);
      }
    },
    dubbelRum: {
      get() {
        return this.$store.state.booking.room.dubbel.antal;
      }
    },
    dubbelRumExtraBed: {
      get() {
        return this.$store.state.booking.room.dubbel.extraBed;
      },
      set(value) {
        this.$store.commit("setExtraBedDubbel", value);
      }
    },
    familjeRum: {
      get() {
        return this.$store.state.booking.room.familje.antal;
      }
    },
    familjeRumExtraBed: {
      get() {
        return this.$store.state.booking.room.familje.extraBed;
      },
      set(value) {
        this.$store.commit("setExtraBedFamilje", value);
      }
    },
    rooms: {
      get() {
        return this.$store.state.rooms;
      }
    },
    enkelRumPris: {
      get() {
        return this.$store.state.booking.room.enkel.antal * this.rooms[1].price;
      }
    },
    dubbelRumPris: {
      get() {
        return (
          this.$store.state.booking.room.dubbel.antal * this.rooms[0].price
        );
      }
    },
    familjeRumPris: {
      get() {
        return (
          this.$store.state.booking.room.familje.antal * this.rooms[2].price
        );
      }
    },
    startDate: {
      get() {
        return this.$store.state.booking.globalStartDate;
      }
    },
    endDate: {
      get() {
        return this.$store.state.booking.globalEndDate;
      }
    },
    hotel: {
      get() {
        return this.$store.state.hotel;
      }
    },
    calculateTotal: {
      get() {
        return (
          (this.$store.state.booking.room.enkel.antal * this.rooms[1].price) +
          (this.$store.state.booking.room.dubbel.antal * this.rooms[0].price) +
          (this.$store.state.booking.room.familje.antal * this.rooms[2].price) +
          (this.$store.state.booking.room.enkel.extraBed * 250) +
          (this.$store.state.booking.room.dubbel.extraBed * 250) +
          (this.$store.state.booking.room.familje.extraBed * 250) +
          (this.$store.state.booking.halfPension *
            this.$store.state.hotel.pensionHalfPrice) +
          (this.$store.state.booking.fullPension *
            this.$store.state.hotel.pensionFullPrice) +
          (this.$store.state.booking.allInclusive *
            this.$store.state.hotel.allInclusive)
        );
      },
    },
    halvPension: {
      get() {
        return this.$store.state.booking.halfPension;
      },
      set(value) {
        this.$store.commit("setHalfPension", value);
      }
    },
    fullPension: {
      get() {
        return this.$store.state.booking.fullPension;
      },
      set(value) {
        this.$store.commit("setFullPension", value);
      }
    },
    allInclusive: {
      get() {
        return this.$store.state.booking.allInclusive;
      },
      set(value) {
        this.$store.commit("setAllInclusive", value);
      }
    },
    maxTillvalHalvPension: {
      get() {
        return (this.$store.state.booking.party.adults +
          this.$store.state.booking.party.children +
          this.$store.state.booking.party.small_children -
          this.$store.state.booking.fullPension -
          this.$store.state.booking.allInclusive);
      }
    },
    maxTillvalFullPension: {
      get() {
        return (
          this.$store.state.booking.party.adults +
          this.$store.state.booking.party.children +
          this.$store.state.booking.party.small_children -
          this.$store.state.booking.halfPension -
          this.$store.state.booking.allInclusive
        );
      }
    },
    maxTillvalAllInclusive: {
      get() {
        return (
          this.$store.state.booking.party.adults +
          this.$store.state.booking.party.children +
          this.$store.state.booking.party.small_children -
          this.$store.state.booking.fullPension -
          this.$store.state.booking.halfPension
        );
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.borderless {
  border: 0 none !important;
}
.change {
  position: fixed;
}
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
</style>