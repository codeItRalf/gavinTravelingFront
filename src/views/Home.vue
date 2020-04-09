<template>
  <div class="home">

    <header>
      
  <div id="carousel" class="carousel slide" data-ride="carousel">
    <div class="search_box w-25">        
      <form>       
        <div class="form-group">
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
        <div class="form-group">
        <label >Från:</label>
        <input type="date" name="bday" max="3000-12-31" 
                min="2020-01-01" class="form-control">
        </div>
        <div class="form-group">
        <label >Till:</label>
        <input type="date" name="bday" max="3000-12-31" 
                min="2020-01-01" class="form-control">
        </div>
        <div class="form-group">
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
        <div class="form-group">
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
          <button type="submit" class="btn btn-primary">Sök</button>
        </form>
      </div>
    <ol class="carousel-indicators">
      <li data-target="#carousel" data-slide-to="0" class="active"></li>
      <li data-target="#carousel" data-slide-to="1"></li>
      <li data-target="#carousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">      
      <div class="carousel-item active" style="background-image: url('https://besthqwallpapers.com/Uploads/31-3-2017/14914/stockholm-sunset-old-town-cityscapes-sweden.jpg')">        
      </div>      
      <div class="carousel-item" style="background-image: url('https://www2.idrottonline.se/globalassets/uppsala-btk---bordtennis/bilder/uppsala.jpg')">        
      </div>      
      <div class="carousel-item" style="background-image: url('https://www.kirunaaurora.com/images/s2dlogo.jpg')">        
      </div>
    </div>    
  </div>
</header>
<div class="container p-5">
  <h3>Senaste bokningar:</h3>
  <div class="row">
    <div class="col-4">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://www2.idrottonline.se/globalassets/uppsala-btk---bordtennis/bilder/uppsala.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Stockholm</h5>
          <p class="card-text">Hotell Blå</p>
          <a href="#" class="btn btn-primary">Boka Nu</a>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://www2.idrottonline.se/globalassets/uppsala-btk---bordtennis/bilder/uppsala.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Stockholm</h5>
          <p class="card-text">Hotell Marion</p>
          <a href="#" class="btn btn-primary">Boka Nu</a>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://www2.idrottonline.se/globalassets/uppsala-btk---bordtennis/bilder/uppsala.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Stockholm</h5>
          <p class="card-text">Hotell Hilton</p>
          <a href="#" class="btn btn-primary">Boka Nu</a>
        </div>
      </div>
    </div>
  </div>
</div>

    
    
  </div>
</template>

<style scoped>
.carousel-item {
  height: 100vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.search_box{
  background:white;
  position: absolute;
  left: 200px;
  top: 150px;
  z-index: 500;
  padding: 2%;  
}

.search_box label{
  text-align: left;
  float: left;
}

h3{
text-align: left;
}

</style>
