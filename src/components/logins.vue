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
          async  login() {


             const credentials = 'username=' +
    encodeURIComponent(this.input.username)
    + '&password=' +
    encodeURIComponent(this.input.password)

  let response = await fetch("http://localhost:9090/login", {
    method: "POST",
    redirect: "manual",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: credentials
  });

     if(response.url.includes('error')) {
    console.log('Wrong username/password');
          }
          else{
              console.log("Login sucessful!")
          }
        }
     }
    }
</script>