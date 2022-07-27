import { defineStore } from "pinia";
import { Buffer } from "buffer";

const clientId = import.meta.env.VITE_APP_CLIENT_ID;
const clientSecret = import.meta.env.VITE_APP_CLIENT_SECRET;

export const useHomeStore = defineStore("home", {
  state: () => ({
    count: 0,
    playlist: []
  }),
  actions: {
    increment() {
      this.count++;
    },
    fetchPlaylist() {
      const requestPost = new Request(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${Buffer.from(
              `${clientId}:${clientSecret}`
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
                console.log(data.items);
                this.playlist = data.items;
              });
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
});
