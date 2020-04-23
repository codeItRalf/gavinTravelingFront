<template>
  <div>
    <h2
      v-bind:hotel_name="$store.state.booking.hotel.name"
    >Hotell: {{$store.state.booking.hotel.name | capitalize}}</h2>

    <p v-bind:hotel_id="$store.state.booking.hotel.id">Hotel_id:{{$store.state.booking.hotel.id}}</p>

    <p
      v-bind:start_date="$store.state.booking.startDate"
    >Startdatum: {{$store.state.booking.startDate}}</p>

    <p v-bind:end_date="$store.state.booking.endDate">Slutdatum: {{$store.state.booking.endDate}}</p>

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
      v-bind:enkel_antal="$store.state.booking.room.enkel.antal"
    >Antal enkelrum: {{$store.state.booking.room.enkel.antal}}</p>

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