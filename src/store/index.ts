import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { auth } from "./modules/auth";
import { account } from "./modules/account";
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
    account,
  },
};

const createdStore = new Vuex.Store<RootState>(store);

export default createdStore;
