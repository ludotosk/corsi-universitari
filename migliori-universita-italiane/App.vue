<script>
import Nav from "../src/components/Navbar.vue";
import Panel from "../src/components/Panellink.vue";
import Footer from "../src/components/Footer.vue"
import Corsi from "./migliori-universita.vue"

export default {
  async beforeUpdate() {
    try {
      document.getElementById("navbar").setAttribute("class", `navbar-menu`);
    } catch (e) {
      //nulla
    }
  },
  components: {
    Nav,
    Panel,
    Footer,
    Corsi
  },
};
</script>

<template>
  <Nav />
  <Corsi style="min-height: 100vh" />
  <Panel />
  <Footer />
</template>
