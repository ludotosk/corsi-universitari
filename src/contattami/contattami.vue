<template>
<Nav />
  <div class="container is-fullhd" style="min-height: 100vh">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Inviaci qui il tuo feedback
    </h1>
    <hr />
    <form
      name="feedback"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="feedback" />
      <div class="form-group form-row">
        <label for="nome">Nome:</label>
        <br />
        <div class="control">
          <input id="nome" type="text" name="name" class="input" />
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email: </label>
        <br />
        <div class="control">
          <input id="email" type="email" name="email" class="input" />
        </div>
      </div>
      <div class="form-group">
        <label for="message">Il tuo messaggio:</label>
        <br />
        <div class="control">
          <textarea id="message" name="message" class="textarea"></textarea>
        </div>
      </div>
      <br />
      <div class="control">
        <button type="submit" class="button is-link has-background-dark">
          Invia
        </button>
      </div>
    </form>
    <br />
    <p>
      L'unica cosa necessaria per la compilazione del form è il messaggio. Nome
      ed e-mail sono opzionali. Però se vuoi essere ricontattato l'e-mail è
      d'obbligo. Schiacciando invia mi arriverà una notifica via e-mail di un
      nuovo messaggio.
    </p>
  </div>
    <Footer />
</template>

<script>
import Nav from "../components/Navbar.vue";
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
    Footer
  },
}
</script>