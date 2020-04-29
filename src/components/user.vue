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
                <template v-if="filteredactiveBookings">
                 <div id="accordionOne" v-for="(booking, index) in filteredactiveBookings" :key="`booking-${index}`">
                    <div class="card">
                        <div class="card-header text-left" :id="'heading'+booking.bookedRoomList[0].bookingId" data-toggle="collapse" :data-target="'#collapse'+booking.bookedRoomList[0].bookingId"  aria-expanded="true" :aria-controls="'collapse'+booking.bookedRoomList[0].bookingId">
                        <a class="card-title text-left">
                            {{booking.hotelName | capitalize}}
                            
                        </a><button class="btn btn-danger float-right ml-2" @click="doThat()">Avboka</button>
                            <button class="btn btn-primary float-right ml-2" @click="doThis()">Omboka</button>
                            
                        </div>
                        <div :id="'collapse'+booking.bookedRoomList[0].bookingId" class="collapse" :aria-labelledby="'heading'+booking.bookedRoomList[0].bookingId" data-parent="#accordionOne">
                        <div class="card-body" style="width: 100%,"> 
                            <div class="col-12">                           
                                <div class="row">
                                    <div class="col-md-6 col-12">
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <div class="text-center">
                                                <p>Från:</p>
                                                <p>Till:</p>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-6">
                                                <div class=" text-center">
                                                <p>{{booking.bookedRoomList[0].startDate | formatDate }}</p>
                                                <p>{{booking.bookedRoomList[0].endDate | formatDate }}</p>
                                                </div>
                                            </div>                                         
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="row">                                          
                                            <div class="col-md-6 col-6">
                                                <div class="text-center">
                                                <p>Antal Rum:</p>
                                                <p>Extra Sängar:</p>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-6">
                                                <div class="text-center">
                                                <p>1</p>
                                                <p>{{booking.extraBed}}</p> 
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">                                    
                                    <div class="col-6"> 
                                            
                                    </div>
                                    <div class="col-6">
                                        <div class="row">
                                            <div class="col-6">
                                                <p class="text-center">Pris:</p>
                                            </div>
                                            <div class="col-6">
                                                <p class="text-center">1.526 Kr</p>
                                            </div> 
                                        </div>       
                                    </div>
                                </div>  
                                <div class="row">
                                    <div class="col-6">                                            
                                    </div>
                                    <div class="col-6">
                                          <div class="row">
                                            <div class="col-6">
                                                
                                            </div>
                                            <div class="col-6">
                                                <!-- <button class="btn btn-primary" @click="omdome()"> Lämna ett omdöme</button> !-->
                                            </div> 
                                        </div>
                                          
                                    </div>
                               </div> 
                            </div>  

                        </div>
                    </div>
                    </div>
                </div>    
                </template>
                
            </div>
            <br>
            <div class="booking">
                <h2 class="text-left">Tidigare bokningar</h2>
                <template v-if="filteredpastBookings">
                 <div id="accordionTwo" v-for="booking in filteredpastBookings" :key="booking.id.bookingId">
                    <div class="card">
                        <div class="card-header text-left" :id="'heading'+booking.id.bookingId" data-toggle="collapse" :data-target="'#collapse'+booking.id.bookingId"  aria-expanded="true" :aria-controls="'collapse'+booking.id.bookingId">
                        <a class="card-title text-left">
                            {{booking.room.roomType.hotel.name | capitalize}}
                            
                        </a><button class="btn btn-danger float-right ml-2" @click="doThat()">Avboka</button>
                            <button class="btn btn-primary float-right ml-2" @click="doThis()">Omboka</button>
                            
                        </div>
                        <div :id="'collapse'+booking.id.bookingId" class="collapse" :aria-labelledby="'heading'+booking.id.bookingId" data-parent="#accordionTwo">
                        <div class="card-body" style="width: 100%,"> 
                            <div class="col-12">                           
                                <div class="row">
                                    <div class="col-md-6 col-12">
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <div class="text-center">
                                                <p>Från:</p>
                                                <p>Till:</p>
                                                <p>Antal Vuxna:</p>
                                                <p>Antal Barn:</p>
                                                <p>Antal Småbarn</p>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-6">
                                                <div class=" text-center">
                                                <p>{{booking.startDate | formatDate }}</p>
                                                <p>{{booking.endDate | formatDate }}</p>
                                                <p>{{booking.booking.personCount}}</p>
                                                <p>{{booking.booking.childrenCount}}</p>
                                                <p>{{booking.booking.smallChildrenCount}}</p>
                                                </div>
                                            </div>                                         
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="row">                                          
                                            <div class="col-md-6 col-6">
                                                <div class="text-center">
                                                <p>Antal Rum:</p>
                                                <p>Extra Sängar:</p>
                                                <p>Halv-pension:</p>
                                                <p>Hel-pension:</p>
                                                <p>All-inclusive:</p>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-6">
                                                <div class="text-center">
                                                <p>1</p>
                                                <p>{{booking.extraBed}}</p>
                                                <p>{{booking.booking.halfPension}}</p>
                                                <p>{{booking.booking.fullPension}}</p>
                                                <p>{{booking.booking.allInclusive}}</p>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">                                    
                                    <div class="col-6"> 
                                            
                                    </div>
                                    <div class="col-6">
                                        <div class="row">
                                            <div class="col-6">
                                                <p class="text-center">Pris:</p>
                                            </div>
                                            <div class="col-6">
                                                <p class="text-center">1.526 Kr</p>
                                            </div> 
                                        </div>       
                                    </div>
                                </div>  
                                <div class="row">
                                    <div class="col-6">                                            
                                    </div>
                                    <div class="col-6">
                                          <div class="row">
                                            <div class="col-6">
                                                
                                            </div>
                                            <div class="col-6">
                                                <!-- <button class="btn btn-primary" @click="omdome()"> Lämna ett omdöme</button> !-->
                                            </div> 
                                        </div>
                                          
                                    </div>
                                </div>  
                            </div>  

                        </div>
                    </div>
                    </div>
                </div>    
                </template>
            </div>
        </div>
        </div>
        
</template>

<script>
import moment from 'moment';
    export default {
        data(){
            return{            
             user: {},
             bookings: this.$store.state.bookings.all           
            }    
        },
        filters: {
            capitalize: function(value) {
            if (!value) return "";
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
            },
            formatDate: function(value) {
            if (value) {
            return moment(value).format('YYYY-MM-DD')
             }
            }
            
        },
        mounted(){
           console.log('App mounted!');
         if (localStorage.getItem('user')) {
         this.user = JSON.parse(localStorage.getItem('user')); 
         
         
         }
        },
      computed: {
         /*bookings() {
            return this.$store.state.bookings.all
            },*/
            filteredactiveBookings: function(){
                return this.bookings.items.filter( booking => {
                   return booking.active == true
                })
            },
            filteredpastBookings: function(){
                return this.bookings.items.filter( booking => {
                   return booking.active == false
                })
            }
      },      
        
       created (){
           this.$store.dispatch("bookings/getAllBookingsByUser")
       }
      
  }
</script>

<style scoped></style>