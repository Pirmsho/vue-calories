<template>
  <section>
    <div v-if="!this.$store.state.resultsAreVisible" class="form-container">
      <h2>Calculate your daily calorie expenditure!</h2>
      <p>Please fill in the forms to get the results</p>
      <form @submit.prevent="calculateResults">
        <div class="radio">
          <p>Gender:</p>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            v-model="this.$store.state.gender"
          />
          <label for="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            v-model="this.$store.state.gender"
          />
          <label for="female">Female</label>
        </div>
        <div class="form-unit">
          <label for="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Enter your age"
            v-model.number="this.$store.state.age"
          />
        </div>
        <div class="form-unit">
          <label for="height">Height:</label>
          <input
            type="number"
            placeholder="Enter your height in cm"
            v-model.number="this.$store.state.height"
          />
        </div>
        <div class="form-unit">
          <label for="weight">Weight:</label>
          <input
            type="number"
            placeholder="Enter your weight in kg"
            v-model.number="this.$store.state.weight"
          />
        </div>
        <span v-if="!this.$store.state.isValid"
          >Make sure to fill in the forms correctly!</span
        >
        <button>See my results!</button>
      </form>
    </div>

    <div v-else class="results">
      <h2>
        Your BMR (Base Metabolic Rate*) is
        <span>{{ this.$store.state.results }}</span> calories.
      </h2>
      <p>
        To lose 0.5 kg a week, you need to eat
        <span>{{ deficit }}</span> calories daily.
      </p>
      <p>
        Alternatively, if you want to gain 0.5 kg a week, you need to eat
        <span>{{ proficit }}</span> calories daily.
      </p>
      <p>
        Your BMI Index is <span>{{ bmiValue }}</span>
      </p>
    </div>
  </section>
</template> 

<script>
export default {
  methods: {
    calculateResults() {
      this.$store.dispatch("calculateResults");
    },
  },
  computed: {
    deficit() {
      return this.$store.state.results - 250;
    },
    proficit() {
      return this.$store.state.results + 250;
    },
    bmiValue() {
      return this.$store.getters.bmiValue.toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  gap: 30px;
  box-shadow: 0px 17px 30px -15px rgba(0, 0, 0, 0.37);
  border-radius: 10px;
  h2 {
    color: #262626;
  }
  p {
    color: #666666;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;

    .radio {
      display: flex;
      justify-content: center;
      align-self: center;
      gap: 5px;
      p {
        color: #262626;
      }
    }
  }
  .form-unit {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  input[type="number"] {
    outline: none;
    height: 30px;
    padding: 5px;
    border-radius: 5px;
    border: none;
  }
  button {
    align-self: center;
    padding: 10px 20px;
    border: 3px solid #388e3c;
    font-size: 18px;
    background-color: #c8e6c9;
    border-radius: 5px;
    color: #006400;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.4s;
    position: relative;
    overflow: hidden;
    &:before {
      content: "See my results!";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #388e3c;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s;
      transform: scale(5);
      opacity: 0;
    }
    &:hover {
      color: transparent;
    }
    &:hover:before {
      transform: scale(1);
      opacity: 1;
    }
  }
  span {
    color: red;
  }
}
.results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 40px;
  box-shadow: 0px 17px 30px -15px rgba(0, 0, 0, 0.37);
  border-radius: 10px;
  p {
    font-size: 20px;
  }
  span {
    color: red;
  }
}
</style>