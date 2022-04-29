<template>
<Nav />
  <div class="container is-fullhd" style="min-height: 100vh" >
<!--     <div
      style="
        text-align: center;
        height: 90px;
        margin-top: 10px;
        overflow: hidden;
        max-width: 728px;
        width: auto;
      "
      v-html="adsenseContent"
    ></div> -->
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Migliori università di medicina [2020]
    </h1>
    <h2 class="has-text-centered is-size-3 has-text-dark has-text-left">
      Qual è l'università di medicina migliore d'Italia?
    </h2>
    <hr />
    <p>
      Ogni anno
      <a
        href="https://als-fattore2a.org/"
        rel="noopener"
        target="_blank"
        class="has-text-danger"
        >Associazione Liberi Specializzandi</a
      >
      rilascia la classifica delle migliori unviersità Italiane in relazione ai
      punteggi conseguiti dai candidati SSM rispetto all'università dove si sono
      laureati. Le fonti di questa classifica sono la graduatoria SMM e i dati
      provenienti dalla Fnomceo. Noi oltre a riportare la loro classifica
      annuale abbiamo anche fatto una media delle classifiche degli ultimi tre
      anni, grazie a questa accortezza i dati sono più precisi in quanto si
      basano su un campione più ampio.
      <a href="/migliori-universita-italiane" class="has-text-danger">
        Se invece vuoi scoprire quali sono le migliori università italiane
        clicca qui</a
      >!
    </p>
    <br />
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field has-addons">
          <p class="control">
            <label
              for="basic-url"
              class="button is-static has-text-weight-medium has-text-black"
              >Nome corso:</label
            >
          </p>
        <input
            type="text"
            class="input"
            id="basic-url"
            aria-describedby="basic-addon3"
            v-model="filters.n.value" 
          />
        </div>
      </div>
    </div>
    <div>
      <label for="2020">
        <input type="checkbox" class="checkbox" id="2020" v-model="venti" />
        2020
      </label>
      <label for="2019">
        <input
          type="checkbox"
          class="checkbox"
          id="2019"
          v-model="diciannove"
        />
        2019
      </label>
      <label for="2018">
        <input type="checkbox" class="checkbox" id="2018" v-model="diciotto" />
        2018
      </label>
    </div>
    <br />
    <VTable
      :data="corsi"
      :filters="filters"
      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    >
      <template #head class="has-background-dark">
        <VTh
          sortKey="uni"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          >Università</VTh
        >
        <VTh
          sortKey="media"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          >Media 3 anni</VTh
        >
        <VTh
          sortKey="venti"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          v-if="venti"
          >2020</VTh
        >
        <VTh
          sortKey="diciannove"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          v-if="diciannove"
          >2019</VTh
        >
        <VTh
          sortKey="diciotto"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          v-if="diciotto"
          >2018</VTh
        >
      </template>
      <template #body="{ rows }">
        <tr v-for="row in rows" :key="row.guid">
          <td class="has-text-weight-medium">
            {{ row.uni }}
          </td>
          <td class="has-text-weight-medium">{{ row.media }}</td>
          <td class="has-text-weight-medium" v-if="venti">{{ row.venti }}</td>
          <td class="has-text-weight-medium" v-if="diciannove">
            {{ row.diciannove }}
          </td>
          <td class="has-text-weight-medium" v-if="diciotto">
            {{ row.diciotto }}
          </td>
        </tr>
      </template>
    </VTable>
    <p>
      <a
        href="https://als-fattore2a.org/"
        rel="noopener"
        target="_blank"
        class="has-text-danger"
        >Fonte: Associazione Liberi Specializzandi</a
      >
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
import corsi from "../src/assets/migliori-med.json";
import Nav from "../src/components/Navbar.vue";
import Panel from "../src/components/Panellink.vue";
import Footer from "../src/components/Footer.vue"

export default {
  data() {
    return {
      corsi: corsi,
      venti: false,
      diciannove: false,
      diciotto: false,
      filters: {
        n: { value: "", keys: ["uni"] },
      },
      adsenseContent: "",
      adsenseBox: "",
      timeOut: null,
    };
  },
  mounted() {
   /*     this.timeOut = setInterval(this.pubblicita, 500); */
  },
/*   methods: {
    pubblicita() {
      this.adsenseContent = document.getElementById(
        "divadsensedisplaynone"
      ).innerHTML;
      this.adsenseBox = document.getElementById("divadsensebox").innerHTML;
    },
  }, */
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
  }
};
</script>