const mappingArtist = (artist) => ({
  name: artist.name,
  id: artist.id
});

const mappingPlaylist = (playlist) => {
  const mappedData = playlist.map((x: any) => {
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
  return mappedData;
};

export { mappingArtist, mappingPlaylist };
