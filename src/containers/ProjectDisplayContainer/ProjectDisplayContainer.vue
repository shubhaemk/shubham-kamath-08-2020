<template>
  <div class="h-full min-h-50 relative" :screen-name="screenName">
    <span class="absolute left-0 bottom-0 h-full w-2 bg-project" />
    <div class="px-20 flex flex-col">
      <div class="w-full h-50vh fourk:h-30vh -mt-20 flex mb-20 relative">
        <img class="h-full w-1/2" src="../../assets/Test.jpg" />
        <div class="h-full w-1/2 custom-black flex flex-col">
          <div class="flex justify-between mb-10 bg-project px-8 py-5">
            <span class="text-4xl font-normal text-white text-left">GitCard</span>
            <span class="text-4xl font-normal text-white text-left">00</span>
          </div>

          <span class="text-3xl font-hairline text-white mb-5 text-left px-8 py-5">
            Generate GitHub Profile Cards, and download it to share.
          </span>
          <span class="text-3xl font-hairline text-white mb-5 text-left px-8 py-5">
            Built using
              <span class="text-3xl font-normal text-white mb-5 text-left">React</span>
            ,
              <span class="text-3xl font-normal text-white mb-5 text-left">Redux</span>
            and
              <span class="text-3xl font-normal text-white mb-5 text-left">Bulma CSS</span>
            .
          </span>
          <div class="flex px-8 py-5 justify-between align-middle mt-auto">
            <a href="https://github.com/shubhaemk/gitcard" target="_blank" class="flex align-middle">
              <span class="text-3xl font-normal text-project font-title mr-5">Code</span>
              <CodeLogo class="item-logo"/>
            </a>
            <a href="https://shubhaemk.github.io/gitcard/" target="_blank" class="flex align-middle">
              <span class="text-3xl font-normal text-project mr-5 font-title">Visit</span>
              <VisitLogo class="item-logo"/>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full h-50vh fourk:h-30vh flex justify-between mb-20">
        <div class="h-full w-1/2 custom-black flex flex-col">
          <div class="flex justify-between mb-10 bg-project px-8 py-5">
            <span class="text-4xl font-normal text-white text-left">Portfolio</span>
            <span class="text-4xl font-normal text-white text-left">01</span>
          </div>

          <span class="text-3xl font-hairline text-white mb-5 text-left px-8 py-5">
            Portfolio Website to showcase my Projects.
          </span>
          <span class="text-3xl font-hairline text-white mb-5 text-left px-8 py-5">
            Built using
              <span class="text-3xl font-normal text-white mb-5 text-left">Vue</span>
            ,
              <span class="text-3xl font-normal text-white mb-5 text-left">Vuex</span>
            and
              <span class="text-3xl font-normal text-white mb-5 text-left">Tailwind CSS</span>
            .
          </span>
          <div class="flex px-8 py-5 justify-between align-middle mt-auto">
            <a href="https://github.com/shubhaemk/shubham-kamath-08-2020" target="_blank" class="flex align-middle">
              <span class="text-3xl font-normal text-project font-title mr-5">Code</span>
              <CodeLogo class="item-logo"/>
            </a>
            <a href="https://shubhamkamath.com" target="_blank" class="flex align-middle">
              <span class="text-3xl font-normal text-project mr-5 font-title">Visit</span>
              <VisitLogo class="item-logo"/>
            </a>
          </div>
        </div>
        <img class="h-full w-1/2" src="../../assets/Test-2.jpg" />
      </div>
      <div class="w-full h-50vh fourk:h-30vh flex justify-between mb-20">
        <img class="h-full w-1/2" src="../../assets/Test-3.jpg" />
        <div class="h-full w-1/2 custom-black flex flex-col">
          <div class="flex justify-between mb-10 bg-project px-8 py-5">
            <span class="text-4xl font-normal text-white text-left">Code Indenter</span>
            <span class="text-4xl font-normal text-white text-left">02</span>
          </div>

          <span class="text-3xl font-hairline text-white mb-5 text-left px-8 py-5">
            Indents C, Java and many other simillar code.
          </span>
          <span class="text-3xl font-hairline text-white mb-5 text-left px-8 py-5">
            Built using
              <span class="text-3xl font-normal text-white mb-5 text-left">HTML5</span>
            ,
              <span class="text-3xl font-normal text-white mb-5 text-left">JavaScript</span>
            and
              <span class="text-3xl font-normal text-white mb-5 text-left">CSS</span>
            .
          </span>
          <div class="flex px-8 py-5 justify-between align-middle mt-auto">
            <a href="https://github.com/shubhaemk/code-indent" target="_blank" class="flex align-middle">
              <span class="text-3xl font-normal text-project font-title mr-5">Code</span>
              <CodeLogo class="item-logo"/>
            </a>
            <a href="https://shubhaemk.github.io/code-indent/" target="_blank" class="flex align-middle">
              <span class="text-3xl font-normal text-project mr-5 font-title">Visit</span>
              <VisitLogo class="item-logo"/>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full h-50vh fourk:h-30vh flex justify-between mb-20">
        <div class="h-full w-1/2 custom-black flex flex-col">
          <div class="flex justify-between mb-10 bg-project px-8 py-5">
            <span class="text-4xl font-normal text-white text-left">React Boilerplate</span>
            <span class="text-4xl font-normal text-white text-left">03</span>
          </div>

          <span class="text-3xl font-hairline text-white mb-5 text-left px-8 py-5">
            React Boilerplate to start building React projects faster.
          </span>
          <span class="text-3xl font-hairline text-white mb-5 text-left px-8 py-5">
            Built using
              <span class="text-3xl font-normal text-white mb-5 text-left">Webpack</span>
            ,
              <span class="text-3xl font-normal text-white mb-5 text-left">Babel</span>
            and
              <span class="text-3xl font-normal text-white mb-5 text-left">React</span>
            .
          </span>
          <div class="flex px-8 py-5 justify-between align-middle mt-auto">
            <a href="https://github.com/shubhaemk/another-react-boilerplate" target="_blank" class="flex align-middle">
              <span class="text-3xl font-normal text-project font-title mr-5">Code</span>
              <CodeLogo class="item-logo"/>
            </a>
            <a href="https://github.com/shubhaemk/another-react-boilerplate#another-react-boilerplate" target="_blank" class="flex align-middle">
              <span class="text-3xl font-normal text-project mr-5 font-title">Visit</span>
              <VisitLogo class="item-logo"/>
            </a>
          </div>
        </div>
        <img class="h-full w-1/2" src="../../assets/Test-4.jpg" />
      </div>
      <div class="w-full h-50vh fourk:h-30vh flex justify-between">
        <img class="h-full w-1/2" src="../../assets/Test-5.jpg" />
        <div class="h-full w-1/2 custom-black flex flex-col">
          <div class="flex justify-between mb-10 bg-project px-8 py-5">
            <span class="text-4xl font-normal text-white text-left">Compux</span>
            <span class="text-4xl font-normal text-white text-left">04</span>
          </div>

          <span class="text-3xl font-hairline text-white mb-5 text-left px-8 py-5">
            Generates React Component using CLI.
          </span>
          <span class="text-3xl font-hairline text-white mb-5 text-left px-8 py-5">
            Built using
              <span class="text-3xl font-normal text-white mb-5 text-left">Node</span>
            ,
              <span class="text-3xl font-normal text-white mb-5 text-left">Webpack</span>
            and
              <span class="text-3xl font-normal text-white mb-5 text-left">Babel</span>
            .
          </span>
          <div class="flex px-8 py-5 justify-between align-middle mt-auto">
            <a href="https://github.com/shubhaemk/compux" target="_blank" class="flex align-middle">
              <span class="text-3xl font-normal text-project font-title mr-5">Code</span>
              <CodeLogo class="item-logo"/>
            </a>
            <a href="https://www.npmjs.com/package/compux" target="_blank" class="flex align-middle">
              <span class="text-3xl font-normal text-project mr-5 font-title">Visit</span>
              <VisitLogo class="item-logo"/>
            </a>
          </div>
        </div>
      </div>
      <div class="py-20 flex justify-end">
        <span class="text-4-5xl text-gray-300 font-hairline mr-5"
          >Check more on my
        </span>
        <a href="https://github.com/shubhaemk" target="_blank" class="text-4-5xl text-gray-300 font-hairline cursor-pointer">
          GitHub &rarr;
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import VisitLogo from '../../assets/visit.svg';
import CodeLogo from '../../assets/code.svg';

export default {
  name: "ProjectDisplayContainer",
  components: {
   VisitLogo,
   CodeLogo
  },
  data: function () {
    return {
      progressLineClass: "bg-home",
    };
  },
  computed: {
    ...mapState({
      SCREEN_NAME: (state) => state.appBehavior.SCREEN_NAME,
    }),
  },
  watch: {
    SCREEN_NAME: function (value) {
      if (value === this.screenName) {
        this.progressLineClass = "bg-project";
      }
    },
  },
  props: {
    screenName: {
      type: String,
      required: true,
    },
    observer: {
      type: IntersectionObserver,
      required: true,
      default: function () {},
      validator: function (value) {
        return !!value;
      },
    },
  },
};
</script>

<style scoped>
.custom-black {
  background-color: #12151b;
}

.item-logo {
  fill: #fa2e63;
  width: 2rem;
}

</style>
