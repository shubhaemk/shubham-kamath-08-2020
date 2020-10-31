<template>
  <div class="h-screen min-h-50 relative" :screen-name="screenName">
    <div class="h-full w-full relative">
      <span class="absolute left-0 top-0 h-full w-2 bg-contact" />
      <div class="absolute left-0 top-15per flex flex-col w-full">
        <span
          class="px-20 py-10 w-fit-content bg-contact text-6xl text-white font-medium"
        >
          Contact
        </span>
        <div class="px-20 py-10 flex flex-wrap justify-between">
          <span class="py-10 w-full">
            <span class="text-6xl text-white font-hairline">
              Let's connect if you have any oportunity or just wanna say Hi!
            </span>
          </span>
          <div class="w-45per contact-item-container">
            <ContactIconComponent
              title="Mail"
              url="mailto:shubhamkamaths@gmail.com"
              description="shubhamkamaths@gmail.com"
            >
              <MailIcon class="w-1/2 contact-icon" />
            </ContactIconComponent>
          </div>
          <div class="w-45per contact-item-container">
            <ContactIconComponent
              title="LinkedIn"
              url="https://www.linkedin.com/in/shubham-kamath"
              description="linkedin.com/in/shubham-kamath"
            >
              <LinkedinIcon class="w-1/2 contact-icon" />
            </ContactIconComponent>
          </div>
          <div class="w-45per contact-item-container">
            <ContactIconComponent
              title="Twitter"
              url="https://www.twitter.com/shubham_kamath"
              description="twitter.com/shubham_kamath"
            >
              <TwitterIcon class="w-1/2 contact-icon" />
            </ContactIconComponent>
          </div>
          <div class="w-45per contact-item-container">
            <ContactIconComponent
              title="Instagram"
              url="https://www.instagram.com/shubham_kamath"
              description="instagram.com/shubham_kamath"
            >
              <InstagramIcon class="w-1/2 contact-icon" />
            </ContactIconComponent>
          </div>
          <div class="w-45per contact-item-container">
            <ContactIconComponent
              title="GitHub"
              url="https://github.com/shubhaemk"
              description="github.com/shubhaemk"
            >
              <GitHubIcon class="w-1/2 contact-icon" />
            </ContactIconComponent>
          </div>
          <div class="w-45per contact-item-container">
            <ContactIconComponent
              title="Dev.to"
              url="https://dev.to/shubhamk"
              description="dev.to/shubhamk"
            >
              <DevToIcon class="w-1/2 contact-icon" />
            </ContactIconComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactIconComponent from "../../components/CotactIconComponent/ContactIconComponent";
import MailIcon from "../../assets/email.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import TwitterIcon from "../../assets/twitter.svg";
import InstagramIcon from "../../assets/instagram.svg";
import GitHubIcon from "../../assets/github.svg";
import DevToIcon from "../../assets/devto.svg";

export default {
  name: "ContactContainer",
  components: {
    ContactIconComponent,
    MailIcon,
    LinkedinIcon,
    TwitterIcon,
    InstagramIcon,
    GitHubIcon,
    DevToIcon,
  },
  mounted() {
    this.observer.observe(this.$el);
  },

  props: {
    screenName: {
      type: String,
      required: true,
    },
    observer: {
      type: IntersectionObserver,
      required: true,
      default: function() {},
      validator: function(value) {
        return !!value;
      },
    },
  },
};
</script>

<style scoped>
@import "./ContactContainer.css";
</style>
