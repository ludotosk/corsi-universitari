<template>
  <Nav />
  <div class="container is-fullhd" style="min-height: 100vh">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Università a {{ uni }}, Corsi di laurea [2021/2022]
    </h1>
    <h2 class="has-text-centered is-size-3 has-text-dark has-text-left">
      Quali sono i corsi di laurea a {{ uni }}? Ecco la lista!
    </h2>
    <!--     <hr />
    <p>
      Qui si può trovare
      <strong>la lista dei corsi di laurea a {{ uni }}</strong
      >. I corsi in questione sono relativi
      <strong>all'anno accademico 2020/2021</strong>.
    </p> -->
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
    <!--     <p>
      <strong>Attenzione!</strong> per eseguire la ricerca serve il nome del
      corso corretto. Es. <strong>biotecnologie</strong> si trova sotto
      "biotecnologie" "biotecnologia" "biotechnology" quindi per avere il
      risultato corretto inserire <strong>"biotec"</strong>. Cioè la parte
      comune a tutti i nomi. Il resto della <strong>guida</strong> è sotto la
      tabella.
    </p> -->
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
    <div v-if="cambiaTabella">
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
            class="has-text-white has-background-dark has-text-centered"
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
      <!-- tolto da qua -->
      <p>
        <strong> Come funziona?</strong> È molto semplice, basta digitare nella
        barra di ricerca es. "data science" e comparirà la lista di tutti i
        corsi con quel nome. Inoltre cliccando "Livello" vengono ordinati i
        corsi in base al tipo di laurea.
      </p>
      <p>
        <strong>Attenzione!</strong> La colonna test è per indicare quale corso
        ha <strong>test d'ingresso </strong>o è a numero programmato. In quel
        caso il corso sarà segnato come test sì, in caso di accesso libero come
        test no.
      </p>
    </div>
    <table class="table is-bordered is-hoverable" v-if="!cambiaTabella">
      <thead class="has-background-dark">
        <th class="has-text-white">Corso di laurea</th>
        <!--    <th class="has-text-white">Livello</th>
        <th class="has-text-white">Test</th> -->
        <th class="has-text-white">Università</th>
      </thead>
      <tbody v-for="corso in corsi" :key="corso.n">
        <tr data-view>
          <td>
            <a :href="corso.h" target="_blank" rel="noopener">{{ corso.n }}</a>
          </td>
          <!--    <td>{{ corso.t }}</td>
          <td>{{ corso.a }}</td> -->
          <td>{{ corso.u }}</td>
        </tr>
      </tbody>
    </table>
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
import Nav from "../src/components/Navbar.vue";
import Panel from "../src/components/Panellink.vue";
import Footer from "../src/components/Footer.vue";

export default {
  data() {
    return {
      filters: {
        n: { value: "", keys: ["n"] },
      },
      currentPage: 1,
      totalPages: 0,
      uni: "Torino",
      corsi: [],
      cambiaTabella: false,
      adsenseContent: "",
      adsenseBox: "",
      timeOut: null,
    };
  },
  async mounted() {
    try {
      fetch("https://json-corsi-fastify.herokuapp.com/corsi?s=TORINO")
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
  watch: {
    "filters.n.value": function () {
      this.cambiaTabella = true;
    },
  },
  methods: {
    pubblicita() {
      this.adsenseContent = document.getElementById(
        "divadsensedisplaynone"
      ).innerHTML;
      this.adsenseBox = document.getElementById("divadsensebox").innerHTML;
    },
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
    Footer,
  },
};
</script>
