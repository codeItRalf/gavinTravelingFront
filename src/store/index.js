import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roomsByHotelId: [],
    authenticated: false,
    search: {
      inputCities: [],
      City: String      
    },
    hotel: [],
    booking: {
      hotel: {
        name: "",
        id: 0
      },
      globalStartDate: Date,
      globalendDate: Date,
      customerId: 0,
      party: {
        adults: 0,
        children: 0,
        small_children: 0
      },
      room: {
        enkel: {
          antal: 0,
          extraBed: 0,
          pricePerRoomPerNight: 0
        },
        dubbel: {
          antal: 0,
          extraBed: 0,
          pricePerRoomPerNight: 0
        },
        familje: {
          antal: 0,
          extraBed: 0,
          pricePerRoomPerNight: 0
        }
      },
      halfPension: 0,
      fullPension: 0,
      allInclusive: 0
    }
  },
  mutations: {
    setAuthentication(state, status) {
      state.authenticated = status;
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
      state.roomsByHotelId = value;
    }, 
    setCities(state, value){
      state.search.inputCities = value;
    }
  },
  actions: {
    getHotel: async function({ commit }, id) {
      let url = "http://localhost:9090/rest/hotels/";
      const result = await fetch(url + id);
      const json = await result.json();
      commit("setHotel", json);
    },
    getRooms: async function({ commit }, id) {
      let url = "http://localhost:9090/rest/room-types/by-hotel/";
      const result = await fetch(url + id);
      const json = await result.json();
      commit("setRooms", json);
    },
    getCities: async function({ commit }){
      let url = "http://localhost:9090/rest/cities";
      const result = await fetch(url);
      const json = await result.json();console.log(json);
      commit("setCities", json);      
    }
  },
  modules: {}
});
