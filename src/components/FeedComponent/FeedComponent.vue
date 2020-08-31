<template>
  <div
    class="feed-container md:feed-container lg:feed-container fourk:feed-container"
    v-scroll-lock="isMenuOpen"
  >
    <HomeContainer />
    <ProjectContainer />
    <BlogContainer />
    <AboutContainer />
    <ContactContainer />
  </div>
</template>

<script>
import HomeContainer from "../../containers/HomeContainer/HomeContainer";
import ProjectContainer from "../../containers/ProjectContainer/ProjectContainer";
import BlogContainer from "../../containers/BlogContainer/BlogContainer";
import AboutContainer from "../../containers/AboutContainer/AboutContainer";
import ContactContainer from "../../containers/ContactContainer/ContactContainer";

export default {
  name: "FeedComponent",
  components: {
    HomeContainer,
    ProjectContainer,
    BlogContainer,
    AboutContainer,
    ContactContainer,
  },
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
@import "./FeedComponent.css";
</style>