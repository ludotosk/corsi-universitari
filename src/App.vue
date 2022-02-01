<script>
import Nav from "../src/components/Navbar.vue";
import Panel from "../src/components/Panellink.vue";
import Footer from "../src/components/Footer.vue";
import Corsi from "./views/corsi-di-laurea.vue";

export default {
  async beforeUpdate() {
    try {
      document.getElementById("navbar").setAttribute("class", `navbar-menu`);
    } catch (e) {
      //nulla
    }
  },
  /*   async mounted() {
    this.timeOut = setInterval(this.pubblicita, 500);
  }, */
  components: {
    Nav,
    Panel,
    Footer,
    Corsi,
  },
  /*   methods: {
    pubblicita() {
      this.ad300 = document.getElementById("ad300").innerHTML;
    },
  },
  data() {
    return {
      timeOut: null,
      ad300: "",
    };
  }, */
};
</script>

<template>
  <Nav />
  <!--   <div class="is-flex is-flex-direction-row">
    <div class="tabella"> -->
  <Corsi />
  <Panel />
  <!--   </div>
    <div class="ad300" v-html="ad300"></div>
  </div> -->
  <Footer />
</template>

<style>
/* .ad300 {
  display: none;
}

@media (min-width: 1919px) {
  .ad300 {
    display: initial;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 40px;
    height: 1050px;
    width: 300px;
  }
}

@media (min-width: 1536px) and (max-width: 1918px) {
  .ad300 {
    display: initial;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15%;
    text-align: center;
    height: 600px;
    width: 160px;
  }
}

.tabella {
  margin-right: auto;
  margin-left: auto;
} */
</style> 