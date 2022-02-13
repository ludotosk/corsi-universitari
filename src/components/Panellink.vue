<template>
  <div class="container is-fullhd">
    <nav class="panel is-dark">
      <p class="panel-heading">Link utili</p>
      <p class="panel-tabs">
        <a
          @click="livello"
          v-bind:class="{ active: !hideLivello, danger: hideLivello }"
          >Per livello</a
        >
        <a
          @click="classifica"
          v-bind:class="{ active: !hideClassifica, danger: hideClassifica }"
          >Classifiche</a
        >
        <a
          @click="inter"
          v-bind:class="{ active: !hideInter, danger: hideInter }"
          >Internazionali e online</a
        >
      </p>
      <div v-bind:class="{ hidden: hideLivello }">
        <div class="panel-block">
          <a href="/lauree-triennali-elenco" class="has-text-black-ter"
            >Corsi di laurea Triennali e Magistrali a ciclo unico</a
          >
        </div>
        <div class="panel-block">
          <a href="/lista-corsi-di-laurea-magistrale" class="has-text-black-ter"
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
          <a href="/migliori-universita-italiane" class="has-text-black-ter"
            >Migliori università italiane</a
          >
        </div>
        <div class="panel-block">
          <a href="/migliori-universita-medicina" class="has-text-black-ter"
            >Migliori università di medicina Italiane</a
          >
        </div>
      </div>
      <div v-bind:class="{ hidden: hideInter }">
        <div class="panel-block">
          <a href="/corsi-di-laurea-internazionali" class="has-text-black-ter"
            >Corsi di laurea a carattere internazionale</a
          >
        </div>
        <div class="panel-block">
          <a href="/corsi-di-laurea-online" class="has-text-black-ter"
            >Corsi di laurea online</a
          >
        </div>
      </div>
    </nav>
    <br />
    <div
      class="absolute is-hidden-desktop has-text-right"
      v-bind:class="{ hidden: nascondiBanner }"
    >
      <p @click.prevent="nascondiBanner = !nascondiBanner">
        <a href="#" class="has-text-danger m-4">Chiudi</a>
      </p>
      <div
        style="
          text-align: center;
          height: 90px;
          overflow: hidden;
          max-width: 728px;
          width: auto;
          margin-left: auto;
          margin-right: auto;
        "
        v-html="adsenseComparsa"
      ></div>
    </div>
<!--   <div
      class="absolute is-desktop"
      v-bind:class="{ hidden: nascondiBanner }"
      style="background-color: yellow"
    >
      <p @click.prevent="nascondiBanner = !nascondiBanner">
        <a href="#" class="has-text-danger m-4">Chiudi</a>
      </p>
      <div
        style="
          text-align: center;
          height: 90px;
          overflow: hidden;
          max-width: 728px;
          width: auto;
          margin-left: auto;
          margin-right: auto;
        "
        v-html="adsenseComparsa"
      ></div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      hideLivello: true,
      hideClassifica: false,
      hideInter: true,
      adsenseComparsa: "",
      nascondiBanner: false,
    };
  },
  async mounted() {
    this.timeOut = setInterval(this.pubblicita, 500);
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
    pubblicita() {
      this.adsenseComparsa = document.getElementById("divadcomparsa").innerHTML;
    },
  },
};
</script>

<style>
div.absolute {
  position: fixed;
  bottom: 0;
  height: 120px;
  width: 100%;
  background-color: #fff;
}
</style>