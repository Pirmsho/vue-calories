<template>
  <transition appear>
    <div>
      <TheHero />
      <InfoSection />
    </div>
  </transition>
</template>

<script>
import TheHero from "../components/layout/TheHero.vue";
import InfoSection from "../components/InfoSection.vue";

export default {
  name: "Home",
  components: {
    TheHero,
    InfoSection,
  },
};
</script>
