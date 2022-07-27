import { defineStore } from "pinia";
import { Buffer } from "buffer";
import { mapperPlaylist } from "../core/mappers";

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
    increment() {
      this.count++;
    },
    async fetchPlaylist() {
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
                const filterData = [...data.items].filter(
                  (x) => x.track.preview_url && x.track.album.images.length > 0
                );
                const mappedPlaylist = filterData.map((x) => {
                  return {
                    album: {
                      id: x.track.album.id,
                      name: x.track.album.name,
                      release: x.track.album.release_date,
                      type: x.track.album.type,
                      total_tracks: x.track.album.total_tracks,
                      uri: x.track.album.uri
                    },
                    img_md: x.track.album.images[1].url,
                    img_hd: x.track.album.images[0].url,
                    artists: x.track.artists,
                    artistsString: x.track.artists,
                    track: {
                      id: x.track.id,
                      name: x.track.name,
                      duration_ms: x.track.duration_ms,
                      popularity: x.track.popularity,
                      preview_url: x.track.preview_url,
                      number: x.track.track_number,
                      uri: x.track.uri
                    },
                    visible: false
                  };
                });
                this.playlist = JSON.parse(JSON.stringify(mappedPlaylist));
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
