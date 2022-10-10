<template>
  <div class="">
    <div class="mb-3 p-5">
      <label for="search">Search</label>
      <input
          id="search"
          type="text"
          class="form-control"
          placeholder="Type here..."
          @input="searchPokemon"
      >
    </div>
    <h1>all pokemons</h1>
    <p v-if="getAllPokemonsLoader">Loading</p>
    <div v-else class="d-flex gap-1 flex-wrap justify-content-between">
      <PokemonComponent
          v-for="(pokemon, i) in allPokemons"
          :key="i"
          :pokemon="pokemon.name"
      />
    </div>
    <paginate
        :page-count="pageCount"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'className'"
    >
    </paginate>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import store from "@/store";
import {mapGetters} from "vuex";

//components
import Paginate from "vuejs-paginate-next";
import PokemonComponent from "@/components/Pokemon.vue";

export default defineComponent({
  name: 'HomePge',

  components: {
    PokemonComponent,
    Paginate
  },

  data() {
    return {
      allPokemons: [],
      data: {},
      pageCount: 0,
      pageNum: 0,
    }
  },
  computed: {
    ...mapGetters(['getAllPokemonsLoader']),
  },

  mounted() {
    this.getPokemonsList();
  },

  methods: {
    clickCallback: function (pageNum) {
      this.pageNum = pageNum;
      this.getPokemonsList();
    },

    async getPokemonsList() {
      const payload = {
        limit: 16,
        offset: this.pageNum,
      }
      this.data = await store.dispatch('getPokemonsList', payload);
      this.pageCount = this.data.count;
      this.allPokemons = this.data.results;
    },

    searchPokemon($event) {
      const value = $event.target.value;
      if (value.length > 2) {
        this.allPokemons = this.allPokemons.filter((item) => {
          return value.toLowerCase().split(' ').every(v => {
            if (item.name.toLowerCase().includes(v)) {
              return item
            }
          });
        });
      } else {
        this.allPokemons = this.data.results;
      }
    }
  }

})

</script>
<style lang="scss" scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

</style>
