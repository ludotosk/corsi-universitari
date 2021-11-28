<template>
  <div class="container is-fullhd">
    <nav class="panel is-dark">
      <p class="panel-heading">Link utili</p>
      <p class="panel-tabs">
        <a class="has-text-danger" id="linkLivello" href="#" rel="noopener"
          >Corsi per livello</a
        >
        <a class="is-active" id="linkClassifica" href="#" rel="noopener"
          >Classifiche</a
        >
        <a class="has-text-danger" id="linkInter" href="#" rel="noopener"
          >Lauree internazionali</a
        >
      </p>
      <div class="is-hidden" id="panelLivello">
        <div class="panel-block">
          <a href="/lauree-triennali-elenco" class="has-text-black-ter"
            >Corsi di laurea Triennali e Magistrali a ciclo unico</a
          >
        </div>
        <div class="panel-block">
          <a href="/lista-corsi-di-laurea-magistrale" class="has-text-black-ter"
            >Corsi di laurea Magistrali
          </a>
        </div>
      </div>
      <div id="panelClassifica">
        <div class="panel-block">
          <a href="/migliori-corsi-di-laurea" class="has-text-black-ter"
            >Migliori corsi di laurea per trovare lavoro</a
          >
        </div>
        <div class="panel-block">
          <a href="/migliori-universita-italiane" class="has-text-black-ter"
            >Migliori università italiane
          </a>
        </div>
        <div class="panel-block">
          <a href="/migliori-universita-medicina" class="has-text-black-ter"
            >Migliori università di medicina Italiane</a
          >
        </div>
      </div>
      <div class="is-hidden" id="panelInter">
        <div class="panel-block">
          <a href="/corsi-di-laurea-internazionali" class="has-text-black-ter"
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
      hideCitta: false,
      hideUni: true,
      hideArea: true,
    };
  },
  methods: {
    citta() {
      this.hideCitta = false;
      this.hideUni = true;
      this.hideArea = true;
    },
    uni() {
      this.hideCitta = true;
      this.hideUni = false;
      this.hideArea = true;
    },
    area() {
      this.hideCitta = true;
      this.hideUni = true;
      this.hideArea = false;
    },
  },
};
</script>