<template>
  <Nav />
  <br>
  <div class="container is-fullhd" style="min-height: 100vh">
  <!--   <div
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
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Migliori università Italiane 2021
    </h1>
    <h2 class="has-text-centered is-size-3 has-text-dark has-text-left">
      Qual'è la migliore università in Italia?
    </h2>
    <hr />
    <p>
      Queli sono i migliori atenei Italiani? Ecco la risposta secondo
      <a
        rel="noopener"
        class="has-text-danger"
        target="_blank"
        href="https://www.censis.it/formazione/la-classifica-censis-delle-universit%C3%A0-italiane-edizione-2021/20222021/2022/gli-atenei-statali"
        >il rapporto Censis 2021</a
      >! Prima di lasciarvi alla tabella vi faccio notare come non ci siano i
      dati di occupabilità per le università non statali, quindi nella colonna
      troverete 0 come punteggio. Come potrete vedere il punteggio va da 0 a 110
      quindi non si esprime in termini percentuali, per la leggenda sulla
      dimesione degli atenei vi rimando sotto alla tabella invece per
      <a href="/migliori-corsi-di-laurea" class="has-text-danger"
        >la classifica dei migliori corsi di laurea clicca qui.</a
      >
      Buona lettura!
    </p>
    <br />
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field has-addons">
          <p class="control">
            <label
              for="basic-url"
              class="button is-static has-text-weight-medium has-text-black"
              >Filtra in base al nome:</label
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
    <div class="is-hidden-touch">
      <label for="borse">
        <input type="checkbox" class="checkbox" id="borse" v-model="borse" />
        Borse di studio
      </label>
      <label for="Comunicazione">
        <input
          type="checkbox"
          class="checkbox"
          id="Comunicazione"
          v-model="comunicazione"
        />
        Comunicazione e servizi digitali
      </label>
      <label for="inter">
        <input type="checkbox" class="checkbox" id="inter" v-model="inter" />
        Internazionalizzazione
      </label>
      <label for="occupabilita">
        <input
          type="checkbox"
          class="checkbox"
          id="occupabilita"
          v-model="occupabilita"
        />
        Occupabilita
      </label>
      <label for="servizi">
        <input
          type="checkbox"
          class="checkbox"
          id="servizi"
          v-model="servizi"
        />
        Servizi
      </label>
      <label for="strutture">
        <input
          type="checkbox"
          class="checkbox"
          id="strutture"
          v-model="strutture"
        />
        Strutture
      </label>
    </div>
    <div class="is-hidden-desktop">
      <label for="borse">
        <input type="checkbox" class="checkbox" id="borse" v-model="borse" />
        Borse di studio
      </label>
      <br />
      <label for="Comunicazione">
        <input
          type="checkbox"
          class="checkbox"
          id="Comunicazione"
          v-model="comunicazione"
        />
        Comunicazione e servizi digitali
      </label>
      <br />
      <label for="inter">
        <input type="checkbox" class="checkbox" id="inter" v-model="inter" />
        Internazionalizzazione
      </label>
      <br />
      <label for="occupabilita">
        <input
          type="checkbox"
          class="checkbox"
          id="occupabilita"
          v-model="occupabilita"
        />
        Occupabilita
      </label>
      <br />
      <label for="servizi">
        <input
          type="checkbox"
          class="checkbox"
          id="servizi"
          v-model="servizi"
        />
        Servizi
      </label>
      <br />
      <label for="strutture">
        <input
          type="checkbox"
          class="checkbox"
          id="strutture"
          v-model="strutture"
        />
        Strutture
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
          sortKey="ateneo"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          >Ateneo</VTh
        >
        <VTh
          sortKey="dimensione"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          >Dimensioni</VTh
        >
        <VTh
          sortKey="tipologia"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          >Tipologia</VTh
        >
        <VTh
          sortKey="borse"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          v-if="borse"
          >Borse</VTh
        >
        <VTh
          sortKey="comunicazione"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          v-if="comunicazione"
          >Comunicazione e servizi digitali</VTh
        >
        <VTh
          sortKey="internazionalizzazione"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          v-if="inter"
          >Internazionalizzazione</VTh
        >
        <VTh
          sortKey="occupabilita"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          v-if="occupabilita"
          >Occupabilita</VTh
        >
        <VTh
          sortKey="servizi"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          v-if="servizi"
          >Servizi</VTh
        >
        <VTh
          sortKey="strutture"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          v-if="strutture"
          >Strutture</VTh
        >
        <VTh
          sortKey="punteggio"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          >Punteggio</VTh
        >
      </template>
      <template #body="{ rows }">
        <tr v-for="row in rows" :key="row.guid">
          <td class="has-text-weight-medium">
            {{ row.ateneo }}
          </td>
          <td class="has-text-weight-medium">{{ row.dimensione }}</td>
          <td class="has-text-weight-medium">
            {{ row.tipologia }}
          </td>
          <td class="has-text-weight-medium" v-if="borse">{{ row.borse }}</td>
          <td class="has-text-weight-medium" v-if="comunicazione">
            {{ row.comunicazione }}
          </td>
          <td class="has-text-weight-medium" v-if="inter">
            {{ row.internazionalizzazione }}
          </td>
          <td class="has-text-weight-medium" v-if="occupabilita">
            {{ row.occupabilita }}
          </td>
          <td class="has-text-weight-medium" v-if="servizi">
            {{ row.servizi }}
          </td>
          <td class="has-text-weight-medium" v-if="strutture">
            {{ row.strutture }}
          </td>
          <td class="has-text-weight-medium">{{ row.punteggio }}</td>
        </tr>
      </template>
    </VTable>
    <p>
      <a
        class="has-text-danger"
        rel="noopener"
        target="_blank"
        href="https://www.censis.it/formazione/la-classifica-censis-delle-universit%C3%A0-italiane-edizione-2021/20222021/2022/gli-atenei-statali"
        >Fonte: Censis</a
      >
    </p>
    <br />
    <table
      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    >
      <thead class="has-background-dark">
        <th class="has-text-white">Tipo</th>
        <th class="has-text-white">Dimensione</th>
        <th class="has-text-white">Numero studenti</th>
      </thead>
      <tbody>
        <tr>
          <td>Statali</td>
          <td>Mega</td>
          <td>Oltre 40000</td>
        </tr>
        <tr>
          <td>Statali</td>
          <td>Grandi</td>
          <td>20000-40000</td>
        </tr>
        <tr>
          <td>Statali</td>
          <td>Medi</td>
          <td>10000-20000</td>
        </tr>
        <tr>
          <td>Statali</td>
          <td>Piccoli</td>
          <td>Fino a 10000</td>
        </tr>
        <tr>
          <td>Non statali</td>
          <td>Grandi</td>
          <td>Oltre 10000</td>
        </tr>
        <tr>
          <td>Non statali</td>
          <td>Medi</td>
          <td>5000-10000</td>
        </tr>
        <tr>
          <td>Non statali</td>
          <td>Piccoli</td>
          <td>Fino a 5000</td>
        </tr>
      </tbody>
    </table>
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
import corsi from "../src/assets/migliori-uni.json";
import Nav from "../src/components/Navbar.vue";
import Panel from "../src/components/Panellink.vue";
import Footer from "../src/components/Footer.vue";

export default {
  data() {
    return {
      borse: false,
      comunicazione: false,
      inter: false,
      occupabilita: false,
      servizi: false,
      strutture: false,
      corsi: corsi,
      filters: {
        n: { value: "", keys: ["ateneo"] },
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
    Footer,
  },
};
</script>