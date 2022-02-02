<template>
  <div>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="/" class="navbar-item">
          <img
            src="/img/icons/android-chrome-192x192.png"
            height="32"
            width="32"
            alt="logo corsiuniversitati.info"
          />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          v-on:click="isActive = !isActive"
          v-bind:class="{ active: isActive }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navMenu" class="navbar-menu" v-bind:class="{ active: isActive }">
        <div
          class="navbar-start has-text-weight-medium"
          style="flex-grow: 1; justify-content: center"
        >
          <a href="/" class="navbar-item">Tutte le lauree</a>
          <a href="/migliori-universita-italiane" class="navbar-item"
            >Migliori Uni</a
          >
          <a href="/corsi-di-laurea-in-inglese" class="navbar-item"
            >In inglese</a
          >
          <div class="navbar-item has-dropdown is-hoverable">
            <p
              class="navbar-link"
              v-on:click="linkCitta = !linkCitta"
              aria-haspopup="true"
            >
              Città
            </p>
            <div
              id="linkCitta"
              class="navbar-dropdown"
              v-bind:class="{ 'is-hidden': linkCitta }"
            >
              <a class="navbar-item" href="/corsi-di-laurea-bologna"
                >Corsi di laurea Bologna
              </a>
              <a class="navbar-item" href="/corsi-di-laurea-firenze"
                >Corsi di laurea Firenze
              </a>
              <a class="navbar-item" href="/corsi-di-laurea-milano"
                >Corsi di laurea Milano
              </a>
              <a class="navbar-item" href="/corsi-di-laurea-padova"
                >Corsi di laurea Padova
              </a>
              <a class="navbar-item" href="/corsi-di-laurea-roma"
                >Corsi di laurea Roma</a
              >
              <a class="navbar-item" href="/corsi-di-laurea-torino"
                >Corsi di laurea Torino
              </a>
              <a class="navbar-item" href="/corsi-di-laurea-bari"
                >Corsi di laurea Bari</a
              >
              <a class="navbar-item" href="/corsi-di-laurea-pisa"
                >Corsi di laurea Pisa</a
              >
              <a class="navbar-item" href="/corsi-di-laurea-napoli"
                >Corsi di laurea Napoli
              </a>
              <a class="navbar-item" href="/corsi-di-laurea-palermo"
                >Corsi di laurea Palermo
              </a>
              <a class="navbar-item" href="/corsi-di-laurea-genova"
                >Corsi di laurea Genova
              </a>
            </div>
          </div>
          <a href="/lauree-triennali-elenco" class="navbar-item">Triennali</a>
          <a href="/lista-corsi-di-laurea-senza-test" class="navbar-item"
            >Corsi senza test</a
          >
          <a href="/migliori-corsi-di-laurea" class="navbar-item"
            >Migliori lauree</a
          >
        </div>
        <div class="navbar-end">
          <a href="https://www.corsiuniversitari.info/link" class="navbar-item"
            ><img
              src="/img/whatsapp-svgrepo-com.svg"
              alt="pagina gruppo whatsapp"
              height="40"
              width="40"
            />
            Gruppi e Test medicina</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      linkCitta: true,
      adsenseBurger: "",
      timeOut: null,
    };
  },
};
</script>