<template>
  <div class="bli_kund">
  <div class="container">
    <br>
    <br>
            <h2>Bli kund</h2>
            <br>
            <br>
            <br>
            <div class="form-row mb-4">
        <div class="col">
            <!-- First name -->
            <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="Förstnamn">
        </div>
        <div class="col">
            <!-- Last name -->
            <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Efternamn">
        </div>
    </div>

    <!-- E-mail -->
    <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-post">

    <!-- Password -->
    <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Telefonnummer" aria-describedby="defaultRegisterFormPasswordHelpBlock">
    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
       
    </small>

    <!-- Phone number -->
    <input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Personnummer" aria-describedby="defaultRegisterFormPhoneHelpBlock">
    <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
        
    </small>

    

    <!-- Sign up button -->
    <button class="btn btn-info my-4 btn-block" type="submit">Skapa ett konto</button>

    

    <hr>   


            

             
  </div>
  </div>
</template>
<script>

export default {
    data(){
      return {
        
      }
    }
}
</script>
