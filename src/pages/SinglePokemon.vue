<template>
  <div class="">
    <h1>single pokemons</h1>
    <PokemonDetails
        :singlePokemon="getSinglePokemonData"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

//component
import PokemonDetails from "@/components/PokemonDetails.vue";
import {mapGetters} from "vuex";
import store from "@/store";

export default defineComponent({
  name: 'SinglePokemon',

  components: {
    PokemonDetails
  },

  data() {
    return {
      singlePokemon: {},
      pokemonName: this.$route.params.name
    }
  },

  computed: {
    ...mapGetters(['getSinglePokemonData']),
  },

  mounted() {
    console.log(this.$route.params.name, ' this.$route.name')
    this.getSinglePokemon()
  },

  methods: {
    getSinglePokemon() {
      store.dispatch('getSinglePokemon', this.pokemonName);
    }
  }
})

</script>
<style lang="scss" scoped>

</style>
