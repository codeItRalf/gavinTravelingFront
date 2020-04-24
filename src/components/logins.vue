<template>
    <div>
        
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'logins',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
   async login() {

         let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let raw = JSON.stringify({"eMail": this.input.username,"password": this.input.password});

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'

};

 let response = await fetch("http://localhost:9090/login", requestOptions)

 if(response.ok){
   console.log("Response OK!")
   let result = await response.json()
   console.log(result)
 }else{
   console.log("Response error :/")
 }
  
  }
     }
    }
</script>