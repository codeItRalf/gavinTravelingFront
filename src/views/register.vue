<template>
  <div class="register">
    <div class="container">
      <br />
      <br />
      <h2>Bli kund</h2>
      <br />
      <br />
      <br />
      <div class="form-row mb-4">
        <div class="col">
          <!-- First name -->
          <input
            type="text"
            id="RegisterFormFirstName"
            class="form-control"
            placeholder="Förstnamn" 
            v-bind:value="firstName"
  v-on:input="firstName = $event.target.value"
            required
          />
        </div>
        <div class="col">
          <!-- Last name -->
          <input type="text" id="RegisterFormLastName" class="form-control" placeholder="Efternamn"  v-bind:value="lastName"
  v-on:input="lastName = $event.target.value" required/>
        </div>
      </div>

      <!-- E-mail -->
      <input type="email" id="RegisterFormEmail" class="form-control mb-4" placeholder="E-post"  v-bind:value="eMail"
  v-on:input="eMail = $event.target.value"  required/>

      <!-- TelefonNumber -->
      <input type="tel" id="RegisterFormTel" class="form-control mb-4"   placeholder="Telefonnummer"  v-bind:value="phoneNumber"
  v-on:input="phoneNumber = $event.target.value" required />

       <!-- TelefonNumber -->
      <input type="tel" id="RegisterFormPerson" class="form-control mb-4" v-bind:value="personNumber"
  v-on:input="personNumber = $event.target.value"  placeholder="Personnummer XXXX-XX-XX-XXXX" required />

      <!-- Password -->
      <input
        type="password"
        id="RegisterFormPassword"
        class="form-control mb-4"
        placeholder="Lösenord"
        aria-describedby="RegisterFormPasswordHelpBlock"
        v-bind:value="password"
  v-on:input="password = $event.target.value"
      />
      <small id="RegisterFormPasswordHelpBlock" class="form-text text-muted mb-4"></small>

      <!-- Sign up button -->
      <button class="btn btn-info my-4 btn-block" @click="submitReg" >Skapa ett konto</button>

      <hr />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      eMail: "",
      personNumber:"",
      password: "",
      myHotels: []
    };
  },   
  methods: { 
    submitReg: function(){         
    this.sendRegister() 
    },
    async sendRegister(){

var myHeaders = new Headers();
      
      myHeaders.append("Content-Type", "application/json");

     let data = {
       "firstName" : (this.firstName),
       "lastName" : (this.lastName),
       "phoneNumber" : (this.phoneNumber),
       "eMail" : (this.eMail),
       "personNumber" : (this.phoneNumber),
       "password" : (this.password)
      } ;

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
      };

      fetch("http://localhost:9090/rest/customers/sign-up", requestOptions)
              .then(response => response.json())
        .then(json => {this.myHotels = json})
        .catch(error => console.log('error', error));
          
          },
  }





  
    
  }
</script>
