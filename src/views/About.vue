<template>
  <section>
    <div>
      <p>
        *Base Metabolic Rate is the amount of calories you need daily. it
        doesn't take your activity level into account, so feel free to add ~250
        calories to the final calculation.
      </p>
      <p>
        This calculator uses Mifflin-St Jeor Equation and gives a pretty
        accurate result,which is often used at the research level.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    padding: 50px;
    box-shadow: 0px 17px 30px -15px rgba(0, 0, 0, 0.37);
    border-radius: 10px;
    p {
      font-size: 20px;
    }
  }
}
</style>