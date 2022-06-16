<template>
  <Nav />
  <div class="container is-fullhd" style="min-height: 100vh">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Tutti i master universitari
    </h1>
    <h2 class="has-text-centered is-size-3 has-text-dark has-text-left">
      Quali sono i master universitari in Italia?
    </h2>
    <hr />
    <br />
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field has-addons">
          <p class="control">
            <label for="basic-url" class="button is-static has-text-weight-medium has-text-black">Nome corso:</label>
          </p>
          <input type="text" class="input" id="basic-url" aria-describedby="basic-addon3"
            v-model="filters.filtro.value" />
        </div>
      </div>
    </div>
    <label for="servizi">
      <input type="checkbox" class="checkbox" id="durata" v-model="durata" />
      Durata
    </label>
    <label for="strutture">
      <input type="checkbox" class="checkbox" id="livello" v-model="livello" />
      Livello
    </label>
    <label for="servizi">
      <input type="checkbox" class="checkbox" id="lingua" v-model="lingua" />
      Lingua
    </label>
    <VTable :data="corsi" :filters="filters" class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <template #head class="has-background-dark">
        <VTh sortKey="corso" defaultSort="asc" class="has-text-white has-background-dark">Nome</VTh>
        <VTh sortKey="citta" defaultSort="asc" class="has-text-white has-background-dark">Città</VTh>
        <VTh sortKey="uni" defaultSort="asc" class="has-text-white has-background-dark">Università
        </VTh>
        <VTh sortKey="durata" defaultSort="asc" class="has-text-white has-background-dark" v-if="durata">Durata</VTh>
        <VTh sortKey="Livello" defaultSort="asc" class="has-text-white has-background-dark" v-if="livello">Livello</VTh>
        <VTh sortKey="LIngua" defaultSort="asc" class="has-text-white has-background-dark" v-if="lingua">Lingua</VTh>
      </template>
      <template #body="{ rows }">
        <tr v-for="row in rows" :key="row.guid">
          <td class="has-text-weight-medium">
            <a :href="row.link" target="_blank" rel="noopener" class="has-text-danger">
              {{ row.corso }}
            </a>
          </td>
          <td class="has-text-weight-medium">{{ row.citta }}</td>
          <td class="has-text-weight-medium">{{ row.uni }}</td>
          <td class="has-text-weight-medium" v-if="durata">{{ row.durata }}</td>
          <td class="has-text-weight-medium" v-if="livello">{{ row.tipo }}</td>
          <td class="has-text-weight-medium" v-if="lingua">{{ row.lingua }}</td>
        </tr>
      </template>
    </VTable>
    <br />
    <!--  <div
      style="
        text-align: center;
        height: 250px;
        overflow: hidden;
        max-width: 970px;
        width: auto;
        margin: auto;
      "
      v-html="adsenseBox"
    ></div>  -->
    <br />
  </div>
  <Panel />
  <Footer />
</template>


<script>
import corsi from "../assets/master.json";
import Nav from "../components/Navbar.vue";
import Panel from "../components/Panellink.vue";
import Footer from "../components/Footer.vue"

export default {
  data() {
    return {
      durata: false,
      livello: false,
      lingua: false,
      corsi: corsi,
      filters: {
        filtro: { value: "", keys: ["corso"] },
      },
      adsenseContent: "",
      adsenseBox: "",
      timeOut: null,
    };
  },
  mounted() {
    /*     this.timeOut = setInterval(this.pubblicita, 500); */
  },
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
    Footer
  },
};
</script>