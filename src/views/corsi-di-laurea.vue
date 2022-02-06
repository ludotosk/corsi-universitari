<template>
  <Nav />
  <div class="container is-fullhd" style="min-height: 100vh">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Tutti i Corsi di Laurea esistenti [2021/2022]
    </h1>
    <h2 class="has-text-centered is-size-3 has-text-dark has-text-left">
      Quali sono tutti i corsi di laurea?
    </h2>
    <!--     <hr />
      <p>Quali sono <strong>tutti i corsi di laurea Italiani esistenti</strong>? Qui puoi trovare la <strong>lista completa</strong> aggiornata <strong>all'anno accademico 2020/2021</strong>!</p> -->
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
    <div
      style="
        text-align: center;
        height: 90px;
        margin-bottom: 10px;
        overflow: hidden;
        max-width: 728px;
        width: auto;
        margin-left: auto;
        margin-right: auto;
      "
      v-html="adsenseContent"
    ></div>
    <!--    <p>
      <strong>Attenzione!</strong> per eseguire la ricerca serve il nome del
      corso corretto. Es. <strong>biotecnologie</strong> si trova sotto
      "biotecnologie" "biotecnologia" "biotechnology" quindi per avere il
      risultato corretto inserire <strong>"biotec"</strong>. Cioè la parte
      comune a tutti i nomi. Il resto della <strong>guida</strong> è sotto la
      tabella.
      </p> -->
    <VTable
      :data="corsi"
      :filters="filters"
      :pageSize="15"
      @totalPagesChanged="totalPages = $event"
      v-model:currentPage="currentPage"
      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    >
      <template #head class="has-background-dark">
        <th class="has-text-white has-background-dark">Corso di laurea</th>
        <VTh
          sortKey="t"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          >Livello</VTh
        >
        <VTh
          sortKey="a"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          >Test</VTh
        >
        <VTh
          sortKey="u"
          defaultSort="asc"
          class="has-text-white has-background-dark"
          >Università</VTh
        >
      </template>
      <template #body="{ rows }">
        <tr v-for="row in rows" :key="row.guid">
          <td class="has-text-weight-medium">
            <a
              :href="row.h"
              target="_blank"
              rel="noopener"
              class="has-text-danger"
              >{{ row.n }}</a
            >
          </td>
          <td class="has-text-weight-medium">Corso di Laurea {{ row.t }}</td>
          <td class="has-text-weight-medium">{{ row.a }}</td>
          <td class="has-text-weight-medium">{{ row.u }}</td>
        </tr>
      </template>
    </VTable>
    <VTPagination
      v-model:currentPage="currentPage"
      :totalPages="totalPages"
      :maxPageLinks="4"
    />
    <br />
    <p>
      <strong>Corsiuniversitari.info </strong>è stato realizzato per aiutarti a
      trovare il tuo corso di laurea. In questo sito ci sono i corsi di tutte le
      università italiane.
    </p>
    <p>
      <strong> Come funziona?</strong> È molto semplice, basta digitare nella
      barra di ricerca es. "data science" e comparirà la lista di tutti i corsi
      con quel nome. Inoltre cliccando "Livello" vengono ordinati i corsi in
      base al tipo di laurea.
    </p>
    <p>
      <strong>Attenzione!</strong> La colonna test è per indicare quale corso ha
      <strong>test d'ingresso </strong>o è a numero programmato. In quel caso il
      corso sarà segnato come test sì, in caso di accesso libero come test no.
    </p>
    <br />
    <div
      style="
        text-align: center;
        height: 250px;
        overflow: hidden;
        max-width: 970px;
        width: auto;
        margin: auto;
      "
      v-html="adsenseBox"
    ></div>
    <br />
  </div>
  <Panel />
  <Footer />
</template>

<script>
import Nav from "../components/Navbar.vue";
import Panel from "../components/Panellink.vue";
import Footer from "../components/Footer.vue";

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
    Footer
  },
  data() {
    return {
      corsi: [],
      filters: {
        n: { value: "", keys: ["n"] },
      },
      currentPage: 1,
      totalPages: 0,
      adsenseContent: "",
      adsenseBox: "",
      timeOut: null,
    };
  },
  async mounted() {
    try {
      fetch("https://json-corsi-fastify.herokuapp.com/corsi")
        .then((response) => response.json())
        .then((data) => {
          this.corsi = data;
          this.carico = true;
        });
    } catch (e) {
      console.log(e);
    }
    this.timeOut = setInterval(this.pubblicita, 500);
  },
  methods: {
    pubblicita() {
      this.adsenseContent = document.getElementById(
        "divadsensedisplaynone"
      ).innerHTML;
      this.adsenseBox = document.getElementById("divadsensebox").innerHTML;
    },
  },
};
</script>