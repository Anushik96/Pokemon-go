<template>
  <div class="card" v-if="Object.keys(singlePokemon).length">
    <h1>{{ singlePokemon.name }}</h1>
    <div class="d-flex align-items-center">
      <img width="400" :src="singlePokemon.sprites.front_default" alt="">
      <div>
        <div class="d-flex gap-2">
          <h5 class="">Species</h5>
          <p>{{ singlePokemon.species.name }}</p>
        </div>
        <div class="d-flex gap-2">
          <h5>Stats</h5>
          <p>base stat  {{singlePokemon.stats[0].base_stat}},</p>
          <p>effort  {{singlePokemon.stats[0].effort}},</p>
          <p>name  {{singlePokemon.stats[0].stat.name}}</p>
        </div>
        <div class="d-flex gap-2">
          <h5>Types </h5>
          <p>slot  {{singlePokemon.types[0].slot}},</p>
          <p>type  {{singlePokemon.types[0].type.name}}</p>
        </div>
        <div class="d-flex gap-2">
          <h5>Weight</h5>
          <p> {{singlePokemon.weight}}</p>
        </div>
        <div class="d-flex gap-2">
          <h5>Moves</h5>
          <p>name {{singlePokemon.moves.name}},</p>
          <p>order {{singlePokemon.moves.order}}</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import store from "@/store";
import {mapGetters} from "vuex";

export default defineComponent({
  name: 'PokemonDetails',

  props: {
    singlePokemon: Object
  }

})

</script>
<style lang="scss" scoped>
.pokemon {
  min-width: 200px;
  background: antiquewhite;
  border: 5px solid red;
}
</style>
