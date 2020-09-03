<template>
  <div
    class="feed-container md:feed-container lg:feed-container fourk:feed-container"
    v-scroll-lock="isMenuOpen"
    ref="feedContainer"
  >
    <HomeContainer :observer="observer" screenName="HOME" />
    <ProjectContainer :observer="observer" screenName="PROJECT" />
    <BlogContainer :observer="observer" screenName="BLOG" />
    <AboutContainer :observer="observer" screenName="ABOUT" />
    <ContactContainer :observer="observer" screenName="CONTACT" />
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
  data: function () {
    return {
      observer: null,
    };
  },

  created: function () {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: this.$refs.feedContainer,
      threshold: 0.7,
    });
  },
  beforeDestroy: function () {
    this.observer.disconnect();
  },
  methods: {
    setScreenName: function (screenName) {
      this.$store.dispatch("appBehavior/setScreenName", screenName);
    },
    onElementObserved(entries) {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;

        this.observer.unobserve(target);

        const screenName = target.getAttribute("screen-name");
        this.setScreenName(screenName);
        console.log({ screenName });
      });
    },
  },
};
</script>

<style scoped>
@import "./FeedComponent.css";
</style>
