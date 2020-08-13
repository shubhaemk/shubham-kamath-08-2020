<template>
  <div>
    <HeaderComponent />
    <HomeContainer>
      <h1 style="padding-top: 200px; font-size: 20px; color: white;">{{SCROLL_POSITION}}</h1>
    </HomeContainer>
    <HomeContainer>
      <h1 style="padding-top: 200px; font-size: 20px; color: white;">{{SCROLL_POSITION}}</h1>
    </HomeContainer>
  </div>
</template>
<script>
import { mapState } from "vuex";

import HomeContainer from "../containers/HomeContainer";
import HeaderComponent from "../components/HeaderComponent";

export default {
  name: "LandingPage",
  components: {
    HomeContainer,
    HeaderComponent,
  },
  created: function () {
    window.addEventListener(
      "scroll",
      () => {
        const scrolledTo =
          window.pageYOffset || document.documentElement.scrollTop;
        if (scrolledTo > 100 && scrolledTo > this.SCROLL_POSITION) {
          this.setScrollDirection("DOWN");
        } else {
          this.setScrollDirection("UP");
        }

        this.setScrollPosition(scrolledTo <= 0 ? 0 : scrolledTo);
      },
      false
    );
  },

  computed: {
    ...mapState({
      SCROLL_POSITION: (state) => state.appBehavior.SCROLL_POSITION,
    }),
  },
  methods: {
    setScrollDirection: function (direction) {
      this.$store.dispatch("appBehavior/setScrollDirection", direction);
    },
    setScrollPosition: function (position) {
      this.$store.dispatch("appBehavior/setScrollPosition", position);
    },
  },
};
</script>

<style></style>
