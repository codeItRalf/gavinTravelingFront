<template>
    <div id="user">
        <h1>Welcome</h1>
        <p>{{user.firstName}} {{user.lastName}}</p>
        <ul v-if="bookings.items">
            <li v-for="booking in bookings.items" :key="booking.id">
                {{booking.startDate + ' ' + booking.endDate}}
            </li>
        </ul>
         <router-link to="/login">Logout</router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return{
             user: {}
            }    
        },
        mounted(){
           console.log('App mounted!');
         if (localStorage.getItem('user')) {
         this.user = JSON.parse(localStorage.getItem('user')); 
         }
        },
      computed: {
        bookings () {
            return this.$store.state.bookings.all
            }
        },
       created (){
           this.$store.dispatch("bookings/getAllBookingsByUser")
       }
    }
</script>

<style scoped></style>