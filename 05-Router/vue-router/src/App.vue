<template>
  <div class="container">
    <a href="/About">Hakkımda</a>
    <a href="/">Sadece /</a><br><hr>

    <router-view></router-view>
    <router-link to="/" active-class="active">Anasayfa</router-link>
    <router-link to="/About" active-class="active">Hakkımda</router-link>
    <router-link to="/details/34" active-class="active">Details</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.active{
  background-color: brown;
  color: white;
}
</style>
