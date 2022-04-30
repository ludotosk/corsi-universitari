<template>
  <Nav />
  <div class="container is-fullhd" style="min-height: 100vh">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Migliori lauree per trovare lavoro [2020]
    </h1>
    <h2 class="has-text-centered is-size-3 has-text-dark has-text-left">
      Quale laurea ti permette di guadagnare di più?
    </h2>
    <hr />
    <p>
      Quali sono le migliori lauree dal punto di vista del guadango e
      dell'occupazione? In questa tabella filtrata e ordinabile potrete trovare
      i dati forniti da alma laurea nell'indagine 2020, i dati sono relativi ai
      laureati da tre anni. I corsi di laurea selezionati riguardano le classi
      di laurea dei corsi magistrali e delle magistrali a ciclo unico. Per
      ulteriori informazioni su metologia e campione dei dati vi invito ad
      andare sul link in fondo alla tabella.
      <a href="/migliori-universita-italiane" class="has-text-danger">
        Se invece vuoi scoprire quali sono le migliori università italiane
        clicca qui</a>!
    </p>
    <br />
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field has-addons">
          <p class="control">
            <label for="basic-url" class="button is-static has-text-weight-medium has-text-black">Nome corso:</label>
          </p>
          <input type="text" class="input" id="basic-url" aria-describedby="basic-addon3" v-model="filters.filtro.value" />
        </div>
      </div>
    </div>
    <VTable :data="corsi" :filters="filters" class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <template #head class="has-background-dark">
        <VTh sortKey="Classe" defaultSort="asc" class="has-text-white has-background-dark">Classe di laurea</VTh>
        <VTh sortKey="Occupazione" defaultSort="asc" class="has-text-white has-background-dark">Occupazione %</VTh>
        <VTh sortKey="Stipendio" defaultSort="asc" class="has-text-white has-background-dark">Stipendio medio netto €
        </VTh>
      </template>
      <template #body="{ rows }">
        <tr v-for="row in rows" :key="row.guid">
          <td class="has-text-weight-medium">
            {{ row.Classe }}
          </td>
          <td class="has-text-weight-medium">{{ row.Occupazione }}</td>
          <td class="has-text-weight-medium">{{ row.Stipendio }}</td>
        </tr>
      </template>
    </VTable>
    <p>
      <a href="https://www2.almalaurea.it/cgi-php/universita/statistiche/tendine.php?anno=2020&config=occupazione"
        rel="noopener" target="_blank" class="has-text-danger">Fonte: alma laurea</a>
    </p>
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
import corsi from "../src/assets/migliori-corsi.json";
import Nav from "../src/components/Navbar.vue";
import Panel from "../src/components/Panellink.vue";
import Footer from "../src/components/Footer.vue"

export default {
  data() {
    return {
      corsi: corsi,
      filters: {
        filtro: { value: "", keys: ["Classe"] },
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