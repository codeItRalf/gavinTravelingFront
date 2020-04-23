import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roomTypesByHotelId: [],
    authenticated: false,
    search: {
      inputCities: " ",
      sdates: " ",
      endates: " ",
    },
    hotel: [],
    booking: {
      hotel: {
        name: "",
        id: 0,
      },
      startDate: "2020-01-01",
      endDate: "2020-01-31",
      customerId: 0,
      party: {
        adults: 0,
        children: 0,
        small_children: 0,
      },
      room: {
        enkel: {
          antal: 0,
          extraBed: 0,
          pricePerRoomPerNight: 0,
        },
        dubbel: {
          antal: 0,
          extraBed: 0,
          pricePerRoomPerNight: 0,
        },
        familje: {
          antal: 0,
          extraBed: 0,
          pricePerRoomPerNight: 0,
        },
      },
      halfPension: 0,
      fullPension: 0,
      allInclusive: 0,
    },
  },
  mutations: {
    setAuthentication(state, status) {
      state.authenticated = status;
    },
    updateSearchinputCity(state, value) {
      state.search.inputCities = value;
    },
    updateSearchsdate(state, value) {
      state.search.sdates = value;
    },
    updateSearchendate(state, value) {
      state.search.endates = value;
    },
    updateBookingHotel(state, value) {
      state.booking.hotel.name = value.name;
      state.booking.hotel.id = value.id;
    },
    updateBookingParty(state, value) {
      state.booking.party.adults = value[0];
      state.booking.party.children = value[1];
      state.booking.party.small_children = value[2];
    },
    updateBookingCustomer(state, value) {
      state.booking.customerId = value;
    },
    updateBookingRooms(state, value) {
      state.booking.room.enkel.antal = value.enkel.antal;
    },
    updateBookingRoomPrice(state, value) {
      state.booking.room.enkel.pricePerRoomPerNight = value[0].price;
      state.booking.room.dubbel.pricePerRoomPerNight = value[1].price;
      state.booking.room.familje.pricePerRoomPerNight = value[2].price;
    },
    antalEnkel(state, value) {
      state.booking.room.enkel.antal = value;
    },
    antalDubbel(state, value) {
      state.booking.room.dubbel.antal = value;
    },
    antalFamilje(state, value) {
      state.booking.room.familje.antal = value;
    },
    setHotel(state, value) {
      state.hotel = value;
    },
    setRooms(state, value) {
      state.roomTypesByHotelId = value;
    },
    setExtraBedEnkel(state, value) {
      state.booking.room.enkel.extraBed = value;
    },
    setExtraBedDubbel(state, value) {
      state.booking.room.dubbel.extraBed = value;
    },
    setExtraBedFamilje(state, value) {
      state.booking.room.familje.extraBed = value;
    },
  },
  actions: {
    getHotel: async function({ commit }, id) {
      let url = "http://localhost:9090/rest/hotels/";
      const result = await fetch(url + id);
      const json = await result.json();
      commit("setHotel", json);
    },
    getRooms: async function({ commit }, id) {
      let url = "http://localhost:9090/rest/room-types/by-hotel/types/";
      const result = await fetch(url + id);
      const json = await result.json();
      commit("setRooms", json);
    },
  },
  modules: {},
});
