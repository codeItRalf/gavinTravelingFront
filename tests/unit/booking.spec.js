import { shallowMount } from '@vue/test-utils'
import Booking from '@/views/Booking.vue'
    
const wrapper = shallowMount(Booking);

test(':)', () =>{
    expect(wrapper.exists()).toBe(true);
})

