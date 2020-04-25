import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'
import { authentication } from '../_store/authentication.module'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    rooms: [],
    authenticated: false,
    search: {
      inputCities: [],
      globalCity: String,
    },
    hotel: [],
    booking: {
      hotel: {
        name: "",
        id: 0,
      },
      globalStartDate: Date,
      globalEndDate: Date,
      customerId: 0,
      party: {
        adults: Number,
        children: Number,
        small_children: Number,
      },
      roomCount: Number,
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
    setGlobalCity(state, value) {
      state.search.globalCity = value;
    },
    setGlobalStartDate(state, value) {
      state.booking.globalStartDate = value;
    },
    setGlobalEndDate(state, value) {
      state.booking.globalEndDate = value;
    },
    updateBookingPartyAdults(state, value) {
      state.booking.party.adults = value;      
    },
    updateBookingPartyChildren(state, value) {      
      state.booking.party.children = value;      
    },
    updateBookingPartySmallChildren(state, value) {     
      state.booking.party.small_children = value;
    },
    updateRoomCount(state, value) {     
      state.roomCount = value;
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
      state.rooms = value;
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
    setCities(state, value) {
      state.search.inputCities = value;
    },
    setBookedRooms(state, value) {
      state.bookedRooms = value;
    },
    setHalfPension(state, value) {
      state.booking.halfPension = value;
    },
    setFullPension(state, value) {
      state.booking.fullPension = value;
    },
    setAllInclusive(state, value) {
      state.booking.allInclusive = value;
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
    getCities: async function({ commit }) {
      let url = "http://localhost:9090/rest/cities";
      const result = await fetch(url);
      const json = await result.json();
      commit("setCities", json);
    },
    getBookedRooms: async function({ commit }) {
      let url = "http://localhost:9090/rest/booked-rooms";
      const result = await fetch(url);
      const json = await result.json();
      commit("setBookedRooms", json);
    },
  },
  modules: {
    authentication
  },
});
