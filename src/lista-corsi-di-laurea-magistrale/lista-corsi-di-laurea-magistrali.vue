<template>
  <Nav />
  <div class="container is-fullhd" style="min-height: 100vh">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Corsi di laurea magistrali [lista 2022/2023]
    </h1>
    <h2 class="has-text-centered is-size-3 has-text-dark has-text-left">
      Quali sono i corsi di laurea magistrali? Ecco la lista!
    </h2>
    <!--     <hr />
    <p>
      Qui si possono trovare oltre
      <strong>2200 corsi di laurea magistrali</strong>. I corsi in questione
      sono relativi <strong>all'anno accademico 2020/2021</strong>.
    </p> -->
    <br />
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field has-addons">
          <p class="control">
            <label for="basic-url" class="button is-static has-text-weight-medium has-text-black">Nome corso:</label>
          </p>
          <input type="text" class="input" id="basic-url" aria-describedby="basic-addon3" v-model="filters.filtro.value"
            placeholder="Digita per visualizzare più dati" />
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

    <label for="colonne" class="checkbox"> <input type="checkbox" id="checkColonne" name="colonne" v-model="cerca"> Mostra più dati</label> |
    <a href="https://t.me/corsiuniversitari_bot" class="has-text-danger">Versione pdf</a> | <a target="_blank"
      class="has-text-danger"
      href="https://www.amazon.it/s?k=alpha+test&amp;__mk_it_IT=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=3MDJLQLDLY1Q1&amp;sprefix=alpha+tes%252Caps%252C363&amp;ref=nb_sb_noss_2&_encoding=UTF8&tag=corsiuni-21&linkCode=ur2&linkId=73ca9312da8a5e682b0ad2a5ffdc8c77&camp=3414&creative=21718">Libri
      per i test</a>
    <div v-if="cerca == true">
      <VTable :data="corsi" :filters="filters" :pageSize="15" @totalPagesChanged="totalPages = $event"
        v-model:currentPage.sync="currentPage" class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <template #head class="has-background-dark">
          <th class="has-text-white has-background-dark">Corso di laurea</th>
          <VTh class="has-text-white has-background-dark" sortKey="s" defaultSort="asc">Città</VTh>
          <VTh class="has-text-white has-background-dark" sortKey="a" defaultSort="asc">Test</VTh>
          <VTh class="has-text-white has-background-dark" sortKey="u" defaultSort="asc">Università</VTh>
        </template>
        <template #body="{ rows }">
          <tr v-for="row in rows" :key="row.guid">
            <td>
              <a :href="row.h" target="_blank" rel="noopener" class="has-text-danger">{{ row.n }}</a>
            </td>
            <td>{{ row.s }}</td>
            <td>{{ row.a }}</td>
            <td>{{ row.u }}</td>
          </tr>
        </template>
      </VTable>
      <VTPagination v-model:currentPage="currentPage" :totalPages="totalPages" :maxPageLinks="4" />

    </div>
    <table class="table is-bordered is-hoverable is-fullwidth" v-if="cerca == false">
      <thead class="has-background-dark">
        <th class="has-text-white">Corso di laurea</th>
        <!--         <th class="has-text-white">Città</th>
        <th class="has-text-white">Test</th> -->
        <th class="has-text-white">Università</th>
      </thead>
      <tbody v-for="corso in corsi" :key="corso.n">
        <tr data-view>
          <td>
            <a :href="corso.h" target="_blank" rel="noopener">{{ corso.n }}</a>
          </td>
          <!--           <td>{{ corso.s }}</td>
          <td>{{ corso.a }}</td> -->
          <td>{{ corso.u }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="cerca">
      <br />
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
import Nav from "../components/Navbar.vue";
import Panel from "../components/Panellink.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      filters: {
        filtro: { value: "", keys: ["n"] },
      },
      currentPage: 1,
      totalPages: 0,
      corsi: [],
      cerca: false,
      adsenseContent: "",
      adsenseBox: "",
      timeOut: null,
    };
  },
  async mounted() {
    try {
      fetch("https://corsi-uni.herokuapp.com/corsi?t=Magistrale")
        .then((response) => response.json())
        .then((data) => {
          this.corsi = data;
          this.carico = true;
        });
    } catch (e) {
      console.log(e);
    }
    /*     this.timeOut = setInterval(this.pubblicita, 500); */
  },
  watch: {
    "filters.filtro.value": function () {
      this.cerca = true;
    },
  },
  methods: {
    handleCheckbox(e) {
      if (e.target.checked) {
        this.cerca = e.target.checked;
      }
    }
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
