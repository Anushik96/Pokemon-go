import {createStore} from 'vuex'
import APIService from "@/services/APIService";

export default createStore({
    state: {
        pokemonsList: [],
        pokemonsListLoading: false,
        singlePokemonData: {},
    },
    getters: {
        getAllPokemons: state => state.pokemonsList,
        getAllPokemonsLoader: state => state.pokemonsListLoading,
        getSinglePokemonData: state => state.singlePokemonData,
    },
    mutations: {
        SET_POKEMONS_LIST(state, data) {
            state.pokemonsList = data
        },

        SET_POKEMONS_LIST_LOADING(state, data) {
            state.pokemonsListLoading = data
        },

        SET_SINGLE_POKEMON_DATA(state, data) {
            state.singlePokemonData = data
        },

    },
    actions: {
        async getPokemonsList({commit, dispatch}, payload) {
            try {
                commit('SET_POKEMONS_LIST_LOADING', true)
                const responce = await APIService().get(`pokemon?limit=${payload.limit}&offset=${payload.offset}`);
                return responce.data
            } catch (err: any) {
                return err
            } finally {
                commit('SET_POKEMONS_LIST_LOADING', false)
            }
        },
        async getSinglePokemon({commit}, name) {
            try {
                const responce = await APIService().get(`pokemon/${name}`);
                commit('SET_SINGLE_POKEMON_DATA', responce.data);
                return responce.data
            } catch (err: any) {
                return err
            }
        }
    },
    modules: {}
})
