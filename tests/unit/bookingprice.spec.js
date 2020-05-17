import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks();
import store from '@/store/index.js'
import Booking from '@/components/Booking.vue'
import { mount } from '@vue/test-utils'

const wrapper = mount(Booking, { store });

describe('store a booking', () => {

    let storeThisBooking = {

        allInclusive: 1,
        customerId: 5,
        fullPension: 1,
        globalEndDate: "2020-05-16",
        globalStartDate: "2020-05-13",
        halfPension: 1,
        hotel: {
            id: 1,
            name: "Roberts-heller"
        },
        party: {
            adults: 3,
            children: 0,
            small_children: 0,
        },
        room: {
            dubbel: {
                antal: 1,
                extraBed: 1,
                pricePerRoomPerNight: 1500,
            },
            enkel: {
                antal: 1,
                extraBed: 1,
                pricePerRoomPerNight: 1000,
            },
            familje: {
                antal: 1,
                extraBed: 1,
                pricePerRoomPerNight: 2000,
            },
        },
        roomCount: 3,
    }
    let hotel = {
        id: 1,
        name: "roberts-heller",
        stars: 1,
        picture: "",
        phone: "647 946 9787",
        eMail: "gglendinning0@dagondesign.com",
        address: "4th",
        postalCode: "26653",
        pool: true,
        nightEntertainment: true,
        restaurant: true,
        childrenClub: false,
        distanceToBeach: 2.0,
        distanceToCenter: 20.0,
        pensionHalfPrice: 100.0,
        pensionFullPrice: 200.0,
        allInclusive: 300.0,
        extraBed: 0.0,
        city: {
            id: 1,
            name: "gagarin"
        }
    }

    store.commit('setHotel', hotel)
     
    test('store this booking', async () => {
        expect(store.state.booking).toEqual(store.state.booking)
        fetch.mockResponseOnce(storeThisBooking)
        await store.commit('SetBooking', storeThisBooking)
        expect(store.state.booking).toEqual(storeThisBooking)
        expect(wrapper.vm.calculateTotal).toEqual(5850)
    })

})
















// let hotel = {
//     "id": 1,
//     "name": "roberts-heller",
//     "stars": 1,
//     "picture": "",
//     "phone": "647 946 9787",
//     "eMail": "gglendinning0@dagondesign.com",
//     "address": "4th",
//     "postalCode": "26653",
//     "pool": true,
//     "nightEntertainment": true,
//     "restaurant": true,
//     "childrenClub": false,
//     "distanceToBeach": 2.0,
//     "distanceToCenter": 20.0,
//     "pensionHalfPrice": 100.0,
//     "pensionFullPrice": 200.0,
//     "allInclusive": 300.0,
//     "extraBed": 0.0,
//     "city": {
//         "id": 1,
//         "name": "gagarin"
//     }
// }

// store.commit('setHotel', hotel)
// wrapper.vm.hotel = hotel

// test(':)', () => {
//     expect(store.state).toEqual(1)
//     expect(wrapper.vm.calculateTotal).toEqual(5100)
// })

