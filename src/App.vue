<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
}
.app-container {
    width: 411px;
    background: #FFFFFF;
    /* border: 1px solid black; */
    padding: 10px;
    position: relative;
}
.form-control {
    background-color: #c4c4c4 !important;
    border: none !important;
}
.bg-form-default {
    background-color: #c4c4c4 !important;
}
.clr-star-default {
    color: #E0E0D9;
}
.clr-star-gold {
    color: #E9E22F;
}
.form-control:focus, .form-control:active {
    border: none !important;
    box-shadow: none !important;
}
input[type="file"] {
    display: none;
}
.app-btn {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}
a {
    text-decoration: none !important;
    color: black !important;
}
.hide {
    display: none;
}
.show {
    display: block !important;
}
</style>
