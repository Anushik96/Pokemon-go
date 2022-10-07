<template>
  <div class="col-3 card" v-if="Object.keys(singlePokemon).length">
    <h1>{{ singlePokemon.name }}</h1>
    <img :src="singlePokemon.sprites.front_default" alt="">
    <router-link :to="'/pokemon/'+singlePokemon.name">
      See more info
    </router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import store from "@/store";

export default defineComponent({
  name: 'PokemonComponent',

  data() {
    return {
      singlePokemon: {},
    }
  },

  props: {
    pokemon: String
  },

  computed: {},

  mounted() {
    this.getSinglePokemon();
  },

  methods: {
    async getSinglePokemon() {
      this.singlePokemon = await store.dispatch('getSinglePokemon', this.pokemon);
    }
  }
})

</script>
<style lang="scss" scoped>

</style>
