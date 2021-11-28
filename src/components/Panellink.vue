<template>
  <div class="container is-fullhd">
    <nav class="panel is-dark">
      <p class="panel-heading">Link utili</p>
      <p class="panel-tabs">
        <a
          @click="livello"
          v-bind:class="{ active: !hideLivello, danger: hideLivello }"
          >Corsi per livello</a
        >
        <a
          @click="classifica"
          v-bind:class="{ active: !hideClassifica, danger: hideClassifica }"
          >Classifiche</a
        >
        <a
          @click="inter"
          v-bind:class="{ active: !hideInter, danger: hideInter }"
          >Lauree internazionali</a
        >
      </p>
      <div v-bind:class="{ hidden: hideLivello }">
        <div class="panel-block">
          <a href="/lauree-triennali-elenco" class="has-text-black-ter"
            >Corsi di laurea Triennali e Magistrali a ciclo unico</a
          >
        </div>
        <div class="panel-block">
          <a
            href="/lista-corsi-di-laurea-magistrale"
            class="has-text-black-ter"
            >Corsi di laurea Magistrali</a
          >
        </div>
      </div>
      <div v-bind:class="{ hidden: hideClassifica }">
        <div class="panel-block">
          <a href="/migliori-corsi-di-laurea" class="has-text-black-ter"
            >Migliori corsi di laurea per trovare lavoro</a
          >
        </div>
        <div class="panel-block">
          <a
            href="/migliori-universita-italiane"
            class="has-text-black-ter"
            >Migliori università italiane</a
          >
        </div>
        <div class="panel-block">
          <a
            href="/migliori-universita-medicina"
            class="has-text-black-ter"
            >Migliori università di medicina Italiane</a
          >
        </div>
      </div>
      <div v-bind:class="{ hidden: hideInter }">
        <div class="panel-block">
          <a
            href="/corsi-di-laurea-internazionali"
            class="has-text-black-ter"
            >Corsi di laurea a carattere internazionale</a
          >
        </div>
      </div>
    </nav>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hideLivello: true,
      hideClassifica: false,
      hideInter: true,
    };
  },
  methods: {
    livello() {
      this.hideLivello = false;
      this.hideInter = true;
      this.hideClassifica = true;
    },
    classifica() {
      this.hideLivello = true;
      this.hideInter = true;
      this.hideClassifica = false;
    },
    inter() {
      this.hideLivello = true;
      this.hideInter = false;
      this.hideClassifica = true;
    },
  },
};
</script>