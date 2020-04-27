<template>
    <div>
        
        <h1>Login</h1>
        <input type="text" name="username" v-model="username" placeholder="Username" />
        <input type="password" name="password" v-model="password" placeholder="Password" />
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
    created () {
        // reset login status
         this.$store.dispatch('authentication/logout')
    },
    methods: {
        login () {
            this.submitted = true;
            const { username, password } = this;
            const { dispatch } = this.$store;
            if (username && password) {
                dispatch('authentication/login', { username, password })
            }
        }
    }
}
</script>
