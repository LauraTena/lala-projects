import { defineStore } from "pinia";
import mapperPlaylist from "../core/mappers/playlist";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    }
  }
});
