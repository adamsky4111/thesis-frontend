import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { auth } from "./modules/auth";
import { account } from "./modules/account";
import { accountChannels } from "@/store/modules/accountChannels";
import { accountStreams } from "@/store/modules/accountStreams";
import { streams } from "@/store/modules/stream";
import { settings } from "@/store/modules/settings";
import { socket } from "@/store/modules/socket";
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
    accountChannels,
    accountStreams,
    streams,
    settings,
    socket,
  },
};

const createdStore = new Vuex.Store<RootState>(store);

export default createdStore;
