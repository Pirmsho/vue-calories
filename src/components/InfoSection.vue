<template>
  <section class="info-section">
    <div class="info-header">
      <h2>Why Should You Care About Calories?</h2>
      <span>Here are a few reasons:</span>
    </div>
    <div class="info-content">
      <ul>
        <div>
          <img
            src="../assets/calculator.svg"
            alt="calculator-svg"
            height="50"
            width="50"
          />
          <li>Counting calories encourages discipline</li>
        </div>
        <div>
          <img
            src="../assets/workout.svg"
            alt="calculator-svg"
            height="50"
            width="50"
          />
          <li>Calorie-management makes healthy lifestyle easy!</li>
        </div>
        <div>
          <img
            src="../assets/food.svg"
            alt="calculator-svg"
            height="50"
            width="50"
          />
          <li>You discover whole new world of tasty healthy foods!</li>
        </div>
      </ul>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.info-section {
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #4caf50;
  .info-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 15px;
    h2 {
      font-size: 36px;
      color: #ffffff;
    }
    span {
      color: #bdbdbd;
    }
  }
  .info-content {
    padding: 10px;
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      list-style: none;
      @media only screen and (max-width: 450px) {
        gap: 35px;
      }
      img {
        filter: invert(1);
      }
      div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        li {
          color: #ffffff;
          font-size: 26px;
          @media only screen and (max-width: 700px) {
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>