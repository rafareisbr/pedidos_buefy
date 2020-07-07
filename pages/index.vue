<template>
  <section class="section">
    <div class="columns">
      <card class="column" title="Free" icon="github-circle">
        <form @submit.prevent="formSubmitted">
          <base-input v-model="name" type="text" placeholder="Type your name" />
          <base-input v-model="age" type="number" placeholder="Type your age" />
          <base-button type="submit">Enviar</base-button>
        </form>
        <base-icon></base-icon>
        <base-button button-style="button is-light" @click="sendMessage"
          >Enviar
        </base-button>
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  },

  data() {
    return {
      name: ''
    }
  },

  methods: {
    formSubmitted() {
      // console.log(this.name)
    },

    sendMessage() {
      // console.log('message sent')
    }
  }
}
</script>

<style lang="scss">
.new {
  background-color: red;
}
</style>
