<template>
  <div class="register">
    <div class="container">
      <br />
      <br />
      <h2>Bli kund</h2>    
      
      <div>
       <div v-if="errors.length">
         <br/>
         <br/>
          <p>Hoppsan:</p>
          <ul>
          <li v-for="error in errors" :key="error.index">{{ error }}</li>
          </ul>
        </div>
      </div>
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
      <input type="email" id="RegisterFormEmail" class="form-control was-validated mb-4" placeholder="E-post"  v-bind:value="eMail"
  v-on:input="eMail = $event.target.value"  required/>

      <!-- TelefonNumber -->
      <input type="tel" id="RegisterFormTel" class="form-control mb-4"   placeholder="Telefonnummer"  v-bind:value="phoneNumber"
  v-on:input="phoneNumber = $event.target.value"   required />

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
      <button class="btn btn-info my-4 btn-block" @click="checkForm" >Skapa ett konto</button>

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
      valid: "false",
      errors: []
      
    };
  },   
  methods: { 
    checkForm: function (e) {
      if (this.firstName && this.lastName && this.phoneNumber && this.eMail && this.personNumber && this.password ) {
        alert('haloj'),
        this.sendRegister();
        return true;
      }

      this.errors = [];

       if (!this.firstName) {
        this.errors.push("Ange ditt förnamn.");
      }
      if (!this.lastName) {
        this.errors.push("Ange ditt efternamn.");
      }
      if (!this.password) {
        this.errors.push("Ange ett lösenord");
      }
      if (!this.phoneNumber) {
        this.errors.push("Ange ett telefonnummer");
      } else if (!this.validPhone(this.phoneNumber)) {
        this.errors.push('Ange ett giltig telefonnummer.');
      }
       if (!this.personNumber) {
        this.errors.push("Ange ditt personnummer");
      } else if (!this.validPersonNr(this.personNumber)) {
        this.errors.push('Ange ett giltigt personnummer.');
      }
      if (!this.eMail) {
        this.errors.push("Ange din e-postadress");
      } else if (!this.validEmail(this.eMail)) {
        this.errors.push('Ange en giltig e-postadress.');
      }

      if (!this.errors.length) {
        alert('haloj'),
        this.sendRegister();
        return true;
      }      
      e.preventDefault();
    },
    validEmail: function (eMail) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(eMail);
    },
    validPhone: function (telefonnummer) {
      var re = /^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$/;
      return re.test(telefonnummer);
    },
    validPersonNr: function (personNumber) {
      var re = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))-[0-9]{4}/;
      return re.test(personNumber);
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
              .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => alert('Not good man :( error', error));
          
          },
  }





  
    
  }
</script>
