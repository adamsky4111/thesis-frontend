import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { auth } from "./modules/auth";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0",
  },
  mutations: {},
  actions: {},
  plugins: [
    createPersistedState({
      key: "vuex",
      paths: ["auth"],
    }),
  ],
  modules: {
    auth,
  },
};

export default new Vuex.Store<RootState>(store);
