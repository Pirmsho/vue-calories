<template>
  <section class="hero">
    <div class="hero-container">
      <h2>Control Your Calories</h2>
      <p>Fill in a simple form and get your daily calorie expenditure!</p>
      <router-link to="/counter">Go to counter</router-link>
    </div>
    <transition name="img">
      <img src="../../assets/hero-img.jpg" alt="" />
    </transition>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  gap: 30px;
  margin-top: 30px;
  @media only screen and (max-width: 450px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 500px;
    height: 300px;
    border-radius: 10px;
    @media only screen and (max-width: 900px) {
      width: 400px;
      height: 250px;
      margin-left: 10px;
    }
    @media only screen and (max-width: 450px) {
      margin-left: 0;
      width: 300px;
      height: 250px;
    }
  }
  .hero-container {
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    @media only screen and (max-width: 450px) {
      align-items: center;
    }
    h2 {
      font-size: 28px;
      color: #212121;
      @media only screen and (max-width: 700px) {
        font-size: 24px;
      }
    }
    p {
      font-size: 24px;
      @media only screen and (max-width: 700px) {
        font-size: 18px;
      }
      @media only screen and (max-width: 450px) {
        margin-left: 15px;
      }
    }
    a {
      text-decoration: none;
      color: #388e3c;
      font-family: sans-serif;
      font-size: 20px;
      border: 3px solid #388e3c;
      border-radius: 5px;
      padding: 15px 20px;
      transition: all 0.5s;
      position: relative;
      overflow: hidden;
      &:hover {
        background-color: #388e3c;
        color: #fff;
      }
      &::before {
        content: "";
        background-color: white;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        position: absolute;
        transform: translateX(-100%) rotate(45deg);
        transition: all 0.5s;
      }
      &:hover::before {
        transform: translateX(100%) rotate(45deg);
      }
    }
  }
}
.img-enter-active,
.img-leave-active {
  transition: 0.3s all ease-in;
}
.img-enter-from,
.img-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.img-enter-to,
.img-leave-from {
  transform: translateX(0px);
  opacity: 1;
}
</style>