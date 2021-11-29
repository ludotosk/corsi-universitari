<template>
  <div>
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
    <br />
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
    <a
      href="https://www.corsiuniversitari.info"
      class="has-text-danger"
      target="_blank"
      id="link-sito"
      >corsiuniversitari.info</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      corsi: [],
      filters: {
        n: { value: "", keys: ["n"] },
      },
      currentPage: 1,
      totalPages: 0,
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
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  a,
  tr {
    font-size: 0.75rem;
  }
  table,
  body {
    margin: none;
    padding: none;
  }
  #link-sito {
    font-size: 1rem;
  }
}

html {
  overflow: hidden;
}
</style>