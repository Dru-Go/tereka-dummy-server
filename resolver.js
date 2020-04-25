const [
  audios,
  playlists,
  users,
  suggestions,
  status,
] = require('./seedData.js');

const root = {
  // Queries

  hello: () => 'Hello World',

  all_Audios: () => {
    return audios;
  },

  play_Audio: ({id}) => {
    let selected = null;
    audios.map((audio) => {
      if (audio.Id === id) {
        selected = audio;
      }
    });
    return selected;
  },

  all_Playlists: ({uid}) => {
    return playlists;
  },

  suggestions: () => {
    return suggestions;
  },

  suggest: ({title, author, category, discription}) => {
    const suggestion = {
      Id: new Date().getTime(),
      Title: title,
      Author: author,
      Likes: 0,
      Category: category,
      Discription: discription,
      Status: status.pending,
      CreatedAt: Date.now(),
    };
    suggestions.push(suggestion);
    return suggestion;
  },

  search_Suggestion: ({title}) => {
    return suggestions.filter((suggestion) =>
      suggestion.Title.toLowerCase().startsWith(title.toLowerCase())
    );
  },

  details_Narrator: ({id}) => {
    const user = users.filter((user) => user.Id === id);
    const Audios = audios.filter((audio) => audio.Narrator === user[0].Name);
    const followers = 43;
    return {User: user[0], Audios: Audios, Followers: followers};
  },

  fav_Audios: ({uid}) => {
    const specUser = users.find((user) => user.Id === uid);
    return specUser.Favorites;
  },

  playlist_Audios: ({uid, pid}) => {
    let selected = null;
    playlists.map((playlist) => {
      if (playlist.Id === pid) {
        selected = playlist;
      }
    });
    return selected.Audios;
  },

  search_Audios: ({title}) => {
    return audios.filter((audio) =>
      audio.Title.toLowerCase().startsWith(title.toLowerCase())
    );
  },

  signIn: ({email, password}) => {
    return {
      UserId: 243324,
      AccountId: 234423,
      Role: 'Listener',
      Token:
        'asdaskjdlkjauasidjnmwenjkasdugashebqadljlajdlkadkjhajdasdjkasdasdhjhadagsd5465d4as56d456a4dda56sd65ad56adsdkaksdkjasjkdjkasjkdasdgh',
      Status: 'Active',
    };
  },

  all_users: () => {
    return users;
  },

  recentPlay: ({uid}) => {
    return audios[1];
  },

  signIn: ({email, password}) => {
    console.log('Email is ', email, ' Passoword is', password);
    return {
      UserId: 243324,
      AccountId: 234423,
      Role: 'Listener',
      Token:
        'asdaskjdlkjauasidjnmwenjkasdugashebqadljlajdlkadkjhajdasdjkasdasdhjhadagsd5465d4as56d456a4dda56sd65ad56adsdkaksdkjasjkdjkasjkdasdgh',
      Status: 'Active',
    };
  },

  // Mutations

  AddToFavs: ({uid, id}) => {
    console.log(id);
    const specUser = users.find((user) => user.Id === uid);
    const specAudio = audios.find((audio) => audio.Id === id);

    specUser.Favorites.push(specAudio);
    return specUser.Favorites;
  },

  AddToPlaylist: ({uid, pid, audioID}) => {
    // const specUser = users.find(user => user.Id === uid);
    const specPlaylist = playlists.find((playlist) => playlist.Id === pid);
    const specAudio = audios.find((audio) => audio.Id === audioID);

    specPlaylist.Audios.push(specAudio);
    return specPlaylist.Audios;
  },

  playlist_Audios: ({uid, pid}) => {
    const specPlaylist = playlists.find((playlist) => playlist.Id === pid);
    return specPlaylist.Audios;
  },

  NewPlaylist: ({uid, name}) => {
    const playlist = {Id: Date.now(), Name: name};
    playlists.push(playlist);
    return playlist;
  },
};

module.exports = root;
