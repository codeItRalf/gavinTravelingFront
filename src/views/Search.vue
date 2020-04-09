<template>
  <div class="search">

    <div class="container">

      <div class="fixed_search_box">

        <div class="s_box jumbotron"> 
          
          <form>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputState">Stad</label>
          <select id="inputState" class="form-control">
            <option selected>Välj...</option>
            <option>Stockholm</option>
            <option>Göteborg</option>
            <option>Kiruna</option>
            <option>Malmö</option>
            <option>Helsingborg</option>
          </select>
    </div>
    <div class="form-group col-md-4">
      <label >Från:</label>
        <input type="date" name="bday" max="3000-12-31" min="2020-01-01" class="form-control">
    </div>
    <div class="form-group col-md-4">
      <label >Till:</label>
        <input type="date" name="bday" max="3000-12-31" min="2020-01-01" class="form-control">
    </div>
  </div>  
  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputAdult">Vuxna</label>
          <select id="inputAdult" class="form-control">
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
          <select id="inputBaby" class="form-control">
            <option selected>Välj...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
    </div>
    <div class="form-group col-md-3">
      <label for="inputAdult">Rum</label>
          <select id="inputAdult" class="form-control">
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
  <button type="submit" class="btn btn-primary">Sök</button>
</form>
          
            
        </div>

      </div>

      <div class="search_results">

        <div class="result  mt-2">
          <div class="card">
            <div class="row no-gutters">
              <div class="col-auto">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Centrala_Malm%C3%B6.jpg/256px-Centrala_Malm%C3%B6.jpg" class="img-fluid" alt="">
              </div>
              <div class="col p-2">
                  <div class="card-block px-2">
                    <div class="row">
                      <div class="col-8">
                        <h4>Hotell Marion</h4>
                      </div>
                      <div class="col-4">
                        <h5>750 Kr</h5>
                      </div>   
                    </div> 
                    <div class="row hotel_info">
                      <div class="omdome col-12">
                        <div class="icons">
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                      </div>                                    
                      <div class="col-12 centrum mt-3">
                        <span>Centrum:</span>
                        <span> 0,5 km</span>
                      </div>
                      <div class="col-12 strand">
                        <span>Strand:</span>
                        <span> 1,0 km</span>
                      </div> 
                      <div class=" col-12 extra">
                        <span><i class="far fa-check-square"></i>Restaurang</span>
                        <span><i class="far fa-check-square"></i>Barnklubb</span>
                      </div>  
                    </div>                       
                    <a href="#" class="btn btn-primary booking_button">Boka Nu</a>
                  </div>
              </div>
            </div>  
          </div> 
        </div>

        <div class="result mt-2">
          <div class="card">
            <div class="row no-gutters">
              <div class="col-auto">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Centrala_Malm%C3%B6.jpg/256px-Centrala_Malm%C3%B6.jpg" class="img-fluid" alt="">
              </div>
              <div class="col p-2">
                  <div class="card-block px-2">
                    <div class="row">
                      <div class="col-8">
                        <h4>Hotell Marion</h4>
                      </div>
                      <div class="col-4">
                        <h5>750 Kr</h5>
                      </div>   
                    </div> 
                    <div class="row hotel_info">
                      <div class="omdome col-12">
                        <div class="icons">
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                      </div>                                    
                      <div class="col-12 centrum mt-3">
                        <span>Centrum:</span>
                        <span> 0,5 km</span>
                      </div>
                      <div class="col-12 strand">
                        <span>Strand:</span>
                        <span> 1,0 km</span>
                      </div> 
                      <div class=" col-12 extra">
                        <span><i class="far fa-check-square"></i>Restaurang</span>
                        <span><i class="far fa-check-square"></i>Barnklubb</span>
                      </div>  
                    </div>                       
                    <a href="#" class="btn btn-primary booking_button">Boka Nu</a>
                  </div>
              </div>
            </div>  
          </div> 
        </div>

        <div class="result mt-2">
          <div class="card">
            <div class="row no-gutters">
              <div class="col-auto">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Centrala_Malm%C3%B6.jpg/256px-Centrala_Malm%C3%B6.jpg" class="img-fluid" alt="">
              </div>
              <div class="col p-2">
                  <div class="card-block px-2">
                    <div class="row">
                      <div class="col-8">
                        <h4>Hotell Marion</h4>
                      </div>
                      <div class="col-4">
                        <h5>750 Kr</h5>
                      </div>   
                    </div> 
                    <div class="row hotel_info">
                      <div class="omdome col-12">
                        <div class="icons">
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                      </div>                                    
                      <div class="col-12 centrum mt-3">
                        <span>Centrum:</span>
                        <span> 0,5 km</span>
                      </div>
                      <div class="col-12 strand">
                        <span>Strand:</span>
                        <span> 1,0 km</span>
                      </div> 
                      <div class=" col-12 extra">
                        <span><i class="far fa-check-square"></i>Restaurang</span>
                        <span><i class="far fa-check-square"></i>Barnklubb</span>
                      </div>  
                    </div>                       
                    <a href="#" class="btn btn-primary booking_button">Boka Nu</a>
                  </div>
              </div>
            </div>  
          </div> 
        </div>

        <div class="result mt-2">
          <div class="card">
            <div class="row no-gutters">
              <div class="col-auto">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Centrala_Malm%C3%B6.jpg/256px-Centrala_Malm%C3%B6.jpg" class="img-fluid" alt="">
              </div>
              <div class="col p-2">
                  <div class="card-block px-2">
                    <div class="row">
                      <div class="col-8">
                        <h4>Hotell Marion</h4>
                      </div>
                      <div class="col-4">
                        <h5>750 Kr</h5>
                      </div>   
                    </div> 
                    <div class="row hotel_info">
                      <div class="omdome col-12">
                        <div class="icons">
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                      </div>                                    
                      <div class="col-12 centrum mt-3">
                        <span>Centrum:</span>
                        <span> 0,5 km</span>
                      </div>
                      <div class="col-12 strand">
                        <span>Strand:</span>
                        <span> 1,0 km</span>
                      </div> 
                      <div class=" col-12 extra">
                        <span><i class="far fa-check-square"></i>Restaurang</span>
                        <span><i class="far fa-check-square"></i>Barnklubb</span>
                      </div>  
                    </div>                       
                    <a href="#" class="btn btn-primary booking_button">Boka Nu</a>
                  </div>
              </div>
            </div>  
          </div> 
        </div>



      </div>     
      

    </div>  

  </div>
</template>





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
