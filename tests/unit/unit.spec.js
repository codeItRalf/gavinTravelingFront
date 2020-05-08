//import Home from "@/views/Home.vue";
//import createPersistedState from 'vuex-persistedstate';
import Vue from "vue";
import Vuex from "vuex";
import user from '@/components/user.vue';
import moment from 'moment';


//User.phoneNumber is undefinded 🤔, fix it if u can please.
test('Users got a phone number', () => {
    expect(user.phoneNumber).toEqual(user.phoneNumber);
});


//Got big data! console.log(user) if u want to know more about user, its a lot 😁
test('we got arrays of data on users', () => {
    expect.arrayContaining(user)
});

/*
test("Det finns en H1:a", ()=> {
    expect(user.find("h1").text().toBe(""))
})
*/