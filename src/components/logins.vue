<template>
    <div class="container w-25 mt-5">
        
        <h1>Login</h1>
        <div class="form-group">
            <label for="InputEmail">E-postadress</label>
            <input type="email" class="form-control" id="InputEmail1" name="email" v-model="username"  aria-describedby="emailHelp" placeholder="Ange din e-postadress">    
        </div>
       <div class="form-group">
        <label for="InputPassword">Lösenord</label>
        <input type="password" class="form-control" id="InputPassword" name="password" v-model="password" placeholder="Ange ditt lösenord">
        </div>
        
        <button id="loginAcc" type="button" class="btn btn-primary" v-on:click="login()">Login</button>
    </div>
</template>


<script>
export default {
    data () {
        return {
            username: '',
            password: '',
            submitted: false,
           
        }
    },
    
    created () {
        // reset login status
         
         
    },
    methods: {
        login () {
            this.submitted = true;    
                    
            const { username, password } = this;
            const { dispatch } = this.$store;
           
            
            if (username && password) {
              
                dispatch('authentication/login', { username, password })
            }
            
        },        
    }
}
</script>
