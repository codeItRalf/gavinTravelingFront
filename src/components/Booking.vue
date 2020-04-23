<template>
  <div class="container">
    <div class="row">
      <div class="col-8 mx-auto">
        <h2
          v-bind:hotel_name="$store.state.booking.hotel.name"
        >Hotell {{$store.state.booking.hotel.name | capitalize}}</h2>
      </div>
      <div class="col-8 mx-auto card">
        <ul>
          <li v-if="enkelRum > 0" class="list-group-item w-75 text-left">
            <div class="row">
              <div class="col-6">
                <p>Antal {{rooms[1].roomType | capitalize}}: {{enkelRum}}</p>
                <p>Pris: {{enkelRumPris}}kr</p>
              </div>
              <div class="col-6">
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
          </li>
          <li v-if="dubbelRum > 0" class="list-group-item w-75 text-left">
            <div class="row">
              <div class="col-6">
                <p>Antal {{rooms[0].roomType | capitalize}}: {{dubbelRum}}</p>
                <p>Pris: {{dubbelRumPris}}kr</p>
              </div>
              <div class="col-6">
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
          </li>
          <li v-if="familjeRum > 0" class="list-group-item w-75 text-left">
            <div class="row">
              <div class="col-6">
                <p>Antal {{rooms[2].roomType | capitalize}}: {{familjeRum}}</p>
                <p>Pris: {{familjeRumPris}}kr</p>
              </div>
              <div class="col-6">
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
            <h6>Från datum: {{startDate}}</h6>
            <h6>Till datum: {{endDate}}</h6>
          </li>
        </ul>
      </div>
    </div>

    <p v-bind:hotel_id="$store.state.booking.hotel.id">Hotel_id:{{$store.state.booking.hotel.id}}</p>

    <p
      v-bind:customerId="$store.state.booking.customerId"
    >Kund_id: {{$store.state.booking.customerId}}</p>

    <p
      v-bind:adults="$store.state.booking.adults"
    >Antal vuxna: {{$store.state.booking.party.adults}}</p>

    <p
      v-bind:children="$store.state.booking.children"
    >Antal barn: {{$store.state.booking.party.children}}</p>

    <p
      v-bind:small_children="$store.state.booking.party.small_children"
    >Antal småbarn: {{$store.state.booking.party.small_children}}</p>

    <p
      v-bind:enkel_extra="$store.state.booking.room.enkel.extraBed"
    >Antal extrasängar (enkelrum): {{$store.state.booking.room.enkel.extraBed}}</p>

    <p
      v-bind:enkel_price="$store.state.booking.room.enkel.pricePerRoomPerNight"
    >Pris per natt (enkelrum): {{$store.state.booking.room.enkel.pricePerRoomPerNight}}</p>
    <p
      v-bind:dubbel_antal="$store.state.booking.room.dubbel.antal"
    >Antal dubbelrum: {{$store.state.booking.room.dubbel.antal}}</p>

    <p
      v-bind:dubbel_extra="$store.state.booking.room.dubbel.extraBed"
    >Antal extrasängar (dubbelrum): {{$store.state.booking.room.dubbel.extraBed}}</p>

    <p
      v-bind:dubbel_price="$store.state.booking.room.dubbel.pricePerRoomPerNight"
    >Pris per natt (dubbelrum): {{$store.state.booking.room.dubbel.pricePerRoomPerNight}}</p>

    <p
      v-bind:familje_antal="$store.state.booking.room.familje.antal"
    >Antal familjerum: {{$store.state.booking.room.familje.antal}}</p>

    <p
      v-bind:familje_extra="$store.state.booking.room.familje.extraBed"
    >Antal extrasängar (familjerum): {{$store.state.booking.room.familje.extraBed}}</p>

    <p
      v-bind:familje_price="$store.state.booking.room.familje.pricePerRoomPerNight"
    >Pris per natt (familjerum): {{$store.state.booking.room.familje.pricePerRoomPerNight}}</p>
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
        return this.$store.state.roomTypesByHotelId;
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
</style>