<template>
  <TheHeader />
  <transition name="page" mode="out-in" appear>
    <router-view />
  </transition>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #c8e6c9;
  font-family: sans-serif;
}
.page-enter-active {
  transition: all 0.3s ease-out;
}
.page-leave-active {
  transition: all 0.1s ease-out;
}

.page-enter-from,
.page-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
.page-enter-to,
.page-leave-from {
  transform: translateY(0px);
  opacity: 1;
}
</style>
