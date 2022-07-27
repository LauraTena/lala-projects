const mapArtist = (artist) => ({
  name: artist.name,
  id: artist.id
});

const mapPlaylist = (data) => ({
  album: {
    id: data.album.id,
    name: data.album.name,
    release: data.album.release_date,
    type: data.album.type,
    total_tracks: data.album.total_tracks,
    uri: data.album.uri
  },
  img_md: data.album.images[1].url,
  img_hd: data.album.images[0].url,
  artists: data.artists.map((x) => mapArtist(x)),
  artistsString: data.artists.map((x) => x.name).join(", "),
  track: {
    id: data.id,
    name: data.name,
    duration_ms: data.duration_ms,
    popularity: data.popularity,
    preview_url: data.preview_url,
    number: data.track_number,
    uri: data.uri
  },
  visible: false
});

export { mapPlaylist };
