import { defineStore } from "pinia";
import { Buffer } from "buffer";
import { mappingPlaylist } from "../core/mappers";

const clientId = import.meta.env.VITE_APP_CLIENT_ID;
const clientSecret = import.meta.env.VITE_APP_CLIENT_SECRET;

export const useHomeStore = defineStore("home", {
  state: () => ({
    count: 0,
    playlist: []
  }),
  getters: {
    getPlaylist(state) {
      return state.playlist;
    }
  },
  actions: {
    fetchPlaylist() {
      return new Promise((resolve, reject) => {
        const requestPost = new Request(
          "https://accounts.spotify.com/api/token",
          {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
              "Authorization": `Basic ${Buffer.from(
                `87a48d5b00524fd080faadee1545dace:9d6da809920546a993e411e7fa2a3c42`
              ).toString("base64")}`
            },
            body: "grant_type=client_credentials"
          }
        );

        const requestGet = (accessToken) =>
          new Request(
            `https://api.spotify.com/v1/playlists/7vZzgb5MvHRW1nyUU5P3js/tracks`,
            {
              method: "GET",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
              }
            }
          );

        fetch(requestPost)
          .then(async (response) => {
            const res = await response.json();
            const accessToken = res.access_token;

            fetch(requestGet(accessToken))
              .then(async (responseGet) => {
                await responseGet.json().then((data) => {
                  const filteredData = [...data.items].filter(
                    (x) =>
                      x.track.preview_url && x.track.album.images.length > 0
                  );
                  const mappedPlaylist = mappingPlaylist(filteredData);
                  this.playlist = JSON.parse(JSON.stringify(mappedPlaylist));
                  resolve(true);
                });
              })
              .catch((error) => {
                console.error(error);
                reject();
              });
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }
  }
});
