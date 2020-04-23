<template>
  <div class="search">

    <div class="container">

      <div class="fixed_search_box">

        <div class="s_box jumbotron"> 
          
         
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputState">Stad</label>
         
              <select id="City" class="form-control" @input="cityBtn"  name="City" v-model="inputCity" v-bind:value="City">                  
                 <option v-for="city in getCitiesArray" :key="city.id" >{{city.name}}</option>                
              </select>
    </div>
    <div class="form-group col-md-4">
      <label >Från:</label>
        <input
                type="date"
                name="startDate"
                id="startDate"
                v-model="inputStartDate"
                 @input="testThisShit" 
                class="form-control"
              />
    </div>    
    <div class="form-group col-md-4">
      <label >Till:</label>
        <input
                type="date"
                name="endDate"
                id="enDate"
                
                max="3000-12-31"
                min="2020-01-01"
                class="form-control"
              /> 
    </div>
  </div>  
  
  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputAdult">Vuxna</label>
          <select id="inputAdult" class="form-control" >
            <option selected>Välj...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
    </div>
    <div class="form-group col-md-3">
      <label for="inputChild">Barn</label>
          <select id="inputChild" class="form-control">
            <option selected>Välj...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
    </div>
    <div class="form-group col-md-3">
      <label for="inputBaby">Små Barn</label>
          <select id="inputBaby" class="form-control" >
            <option selected>Välj...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
    </div>
    <div class="form-group col-md-3">
      <label for="inputRoom">Rum</label>
          <select id="inputRoom" class="form-control" >
            <option selected>Välj...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="Centrum">Avstånd till Centrum</label>
      <input type="range" class="custom-range" id="Centrum">
    </div>
    <div class="form-group col-md-6">
       <label for="Strand">Avstånd till Strand</label>
      <input type="range" class="custom-range" id="Strand">
    </div>
    </div>
  <div class="form-row col-12">
    <div class="form-group col-md-6">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
        <label class="form-check-label" for="inlineCheckbox1">Pool</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        <label class="form-check-label" for="inlineCheckbox2">Kvällsunderhållning</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
        <label class="form-check-label" for="inlineCheckbox3">Barnklubb</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
        <label class="form-check-label" for="inlineCheckbox3">Restaurang</label>
      </div> 
      </div>  
      <div class="form-group col-md-6">        
          <select id="inputState" class="form-control">
            <option selected>Välj...</option>
            <option>Pris: Stigande</option>
            <option>Pris: Fallande</option>
            <option>Omdöme: Stigande </option>
            <option>Omdöme: Fallande</option>            
          </select>
      </div>   
    

    
    
  </div>
  
          
            
        </div>

      </div>

      <div class="search_results">

       


      </div>     
      

    </div>  

  </div>
</template>
<script>
export default {
  props: ["booking", "search", "hotel"], 
  data() {
    return {
      startDate: this.$store.state.booking.globalStartDate, 
      City: this.$store.state.search.globalCity,      
      endDate: this.$store.state.booking.globalEndDate        
    };
  },
  async created() {
    await this.$store.dispatch('getCities');  
   
  },
    
  methods: {    
    testThisShit: function(startDate){
      this.$store.commit("setGlobalStartDate", startDate);
      console.log(this.inputStartDate)
    },
    cityBtn: function(City){
       this.$store.commit("setGlobalCity", City)      
    }     
  },
  computed: {

    inputCity:{
      get(){
        
        return this.City;
      },
      set(value){
        console.log(this.City),
        this.City = value;        
      }

    },
    getCitiesArray: {
      get() {
        return this.$store.state.search.inputCities;        
      }
    },

    inputStartDate: {
      get(){
        return this.startDate;
      },
      set(value){
        this.startDate = value;      
      }
    }
    
  }
};

</script>





<style scoped>
@import '../style.css';
.card-block{
  margin-top: 1%;
}
.card-block h4, .strand, .centrum{
  text-align: left;  
}

.card-block h5{
  text-align: right;  
}

.icons{
  color: black;
  size: 25px;
  float: left;
}

.booking_button{
  float: right;
  position: absolute;
  bottom: 15px;
  right: 15px;  
}

.extra{  
  text-align: left;
}

.extra i{
 margin-left: 2%;
}

.fixed_search_box .btn-primary{
  float: right;
  
}

.s_box{
  text-align: left;    
}



</style>
