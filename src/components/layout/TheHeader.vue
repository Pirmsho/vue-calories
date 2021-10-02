<template>
  <header>
    <nav class="navbar">
      <div class="mainH">
        <router-link to="/"><h1>Calorie Counter</h1></router-link>
        <transition name="fade-in">
          <div class="responsive-nav" v-if="isNavShown">
            <router-link to="/counter">Counter</router-link>
            <router-link to="/about">About</router-link>
          </div>
        </transition>
      </div>
      <div class="navlinks">
        <router-link to="/counter">Counter</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <div class="hamb-class">
        <img
          @click="navShowHandler"
          class="hamburger"
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2VjZjBmMSI+PHBhdGggZD0iTTE0LjMzMzMzLDM1LjgzMzMzdjE0LjMzMzMzaDE0My4zMzMzM3YtMTQuMzMzMzN6TTE0LjMzMzMzLDc4LjgzMzMzdjE0LjMzMzMzaDE0My4zMzMzM3YtMTQuMzMzMzN6TTE0LjMzMzMzLDEyMS44MzMzM3YxNC4zMzMzM2gxNDMuMzMzMzN2LTE0LjMzMzMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
        />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavShown: false,
    };
  },
  methods: {
    navShowHandler() {
      this.isNavShown = !this.isNavShown;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap");
header {
  padding: 20px;
  background-color: #388e3c;
  .navbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 600px;
    @media only screen and (max-width: 900px) {
      gap: 300px;
    }
    @media only screen and (max-width: 700px) {
      gap: 140px;
    }
    @media only screen and (max-width: 450px) {
      gap: 50px;
    }
    .mainH {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .responsive-nav {
      display: flex;
      flex-direction: column;
      gap: 15px;
      a {
        font-size: 20px;
      }
    }
    h1 {
      font-family: "Crimson Text", serif;

      font-size: 36px;
      transition: 0.3s all;
      &:hover {
        transform: scale(1.1);
      }
    }
    a {
      text-decoration: none;
      color: #ffffff;
      transition: 0.3s all;
      &:hover {
        transform: scale(1.1);
      }
    }
    .navlinks {
      width: 200px;
      display: flex;
      justify-content: space-around;
      gap: 20px;
      @media only screen and (max-width: 450px) {
        display: none;
      }
      a {
        font-size: 24px;
        font-family: sans-serif;
      }
    }
    .hamb-class {
      cursor: pointer;
      display: none;
      @media only screen and (max-width: 450px) {
        display: flex;
      }
    }
  }
  .fade-in-enter-active {
    transition: 0.3s all ease;
  }
  .fade-in-leave-active {
    transition: all 0.3s ease;
  }
  .fade-in-enter-from {
    transform: translateY(-15px);
    opacity: 0;
  }
  .fade-in-leave-to {
    transform: translateY(-15px);
    opacity: 0;
  }
}
</style>