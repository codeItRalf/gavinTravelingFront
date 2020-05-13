import store from '@/store/index.js'
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks();

describe('store a booking', ()=>{

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

    test('store this booking', async () => {
        expect(store.state.booking).toEqual(store.state.booking)
        fetch.mockResponseOnce(storeThisBooking)
        await store.commit('SetBooking', storeThisBooking)
        expect(store.state.booking).toEqual(storeThisBooking)
    })

})
