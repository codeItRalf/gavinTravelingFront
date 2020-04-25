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
    data () {
        return {
            username: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        loggingIn () {
            return this.$store.state.authentication.status.loggingIn;
        }
    },
    created () {
        // reset login status
        this.$store.dispatch('authentication/logout');
    },
    methods: {
        login () {
            this.submitted = true;
            const { username, password } = this;
            const { dispatch } = this.$store;
            if (username && password) {
                dispatch('authentication/login', { username, password });
            }
        }
    }
};
</script>


 /* <script>
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
//Fetch to login and receive token
 let response = await fetch("http://localhost:9090/login", requestOptions)
 if(response.ok){
   console.log("Response OK!")
   //receive JWT token 
 let result = await response.json()




 //Use JWT token to get user in new fetch
 let userHeaders = new Headers();
userHeaders.append("Content-Type", "application/json");
//Important to be included for requests when autorization is required
userHeaders.append("Authorization", "Bearer "+ result.token);

let raw = JSON.stringify({"token": result.token});

let requestOptions = {
  method: 'POST',
  headers: userHeaders,
  body: raw,
  redirect: 'manual'
};

 let user = await fetch("http://localhost:9090/rest/customers/user",requestOptions)

 if(user.ok){
     //receive user from token featch
    let userResult = await user.json()
    console.log(userResult)
    this.$store.commit("setAuthentication", true);
    this.$router.replace({ name: 'user' });
 }else{
     console.log("Error!")
 }

 console.log(result)
 }else{
   console.log("Response error :/")
 }
  
  }
     }
    }
</script>  */