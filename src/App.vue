<template>
  <div id="app">
    <Nav></Nav>

    <router-view></router-view>
  </div>
</template>


<script>
import Nav from "./components/Nav.vue";

export default {
  name: "app",
  components: { Nav },
  created() {
    //this.$store.dispatch("getBookedRooms");
  }
};
</script>


<style src="./style.css"></style>
