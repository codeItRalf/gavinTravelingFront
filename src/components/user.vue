<template>
    <div id="user">
        <div class="container mt-5">
            <div class="jumbotron">
                <div class="row">
                    <div class="col-6">
                        <p>Förnamn:</p>
                        <p>Efternamn:</p>
                        <p>E-post:</p>
                        <p>Telefonnummer</p>
                    </div>
                    <div class="col-6">
                        <p>{{user.firstName | capitalize}}</p>
                        <p>{{user.lastName | capitalize}}</p>
                        <p>{{user.eEMail}}</p>
                        <p>{{user.phoneNumber}}</p>
                    </div>
                </div>
            </div>
            <div class="activebooking">
                <h2  class="text-left">Aktiva bokningar</h2>
                <template v-if="bookings.items">
                 <div id="accordionOne" v-for="booking in bookings.items" :key="booking.id.bookingId">
                    <div class="card">
                        <div class="card-header text-left" :id="'heading'+booking.id.bookingId" data-toggle="collapse" :data-target="'#collapse'+booking.id.bookingId"  aria-expanded="true" :aria-controls="'collapse'+booking.id.bookingId">
                        <a class="card-title text-left">
                            {{booking.room.roomType.hotel.name | capitalize}}
                            
                        </a><button class="btn btn-danger float-right ml-2" @click="doThat()">Avboka</button>
                            <button class="btn btn-primary float-right ml-2" @click="doThis()">Omboka</button>
                            
                        </div>
                        <div :id="'collapse'+booking.id.bookingId" class="collapse" :aria-labelledby="'heading'+booking.id.bookingId" data-parent="#accordionOne">
                        <div class="card-body">
                        <p>Information</p>
                        </div>
                        </div>
                    </div>
                </div>    
                </template>
                
            </div>
            <br>
            <div class="booking">
                <h2 class="text-left">Tidigare bokningar</h2>
                <div id="accordionTwo">
                    <div class="card">
                        <div class="card-header" id="headingFour">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            Bokning 1
                            </button>
                        </h5>
                        </div>

                        <div id="collapseFour" class="collapse show" aria-labelledby="headingFour" data-parent="#accordionTwo">
                        <div class="card-body">
                        <p>Information</p>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingFive">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Bokning 2
                            </button>
                        </h5>
                        </div>
                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionTwo">
                        <div class="card-body">
                            <p>Information</p>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingSix">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Bokning 3
                            </button>
                        </h5>
                        </div>
                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionTwo">
                        <div class="card-body">
                        <p>Information</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
</template>

<script>
    export default {
        data(){
            return{            
             user: {}           
            }    
        },
        filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
        mounted(){
           console.log('App mounted!');
         if (localStorage.getItem('user')) {
         this.user = JSON.parse(localStorage.getItem('user')); 
         }
        },
      computed: {
        bookings() {
            return this.$store.state.bookings.all
            }
        },
       created (){
           this.$store.dispatch("bookings/getAllBookingsByUser")
       }
  }
</script>

<style scoped></style>