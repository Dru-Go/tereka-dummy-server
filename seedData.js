const audios = [
  {
    Id: 'hash1',
    ImageURL: 'https://res.cloudinary.com/tereka/image/upload/v1587843164/Audios/albemArt_dreamers.jpg',
    Title: 'Dreamers',
    Author: 'Siegfried Sassoon',
    Narrator: 'Eric Lancer',
    Likes: 34,
    Type: 'Poems',
    Url: 'https://res.cloudinary.com/tereka/video/upload/v1587842762/Audios/Dreamers.mp3',
    Duration: '1:23:34',
    Published: true,
    CreatedAt: 'Sun Apr 12 11:48:12 2020',
  },
  {
    Id: 'hash2',
    ImageURL: 'https://res.cloudinary.com/tereka/image/upload/v1587845040/Audios/albemArt_nightmare.jpg',
    Title: 'Nightmare',
    Author: 'Clark Ashton Smith',
    Type: 'Poem',
    Narrator: 'Lisa Mosse',
    Url: 'https://res.cloudinary.com/tereka/video/upload/v1587844803/Audios/Nightmare.mp3',
    Likes: 34,
    Duration: '1:23:34',
    Published: true,
    CreatedAt: 'Sun Apr 12 11:48:12 2020',
  },
  {
    Id: 'hash3',
    ImageURL: '../names for the sea.png',
    Title: 'Peter the Gient',
    Author: 'Berni Mac',
    Type: 'Fantacy',
    Narrator: 'Eric Lancer',
    Url: 'song.mp3',
    Likes: 34,
    Duration: '1:23:34',
    Published: true,
    CreatedAt: 'Sun Apr 12 11:48:12 2020',
  },
  {
    Id: 'hash4',
    ImageURL: '../book1.png',
    Title: 'Old Sins',
    Author: 'Penny Vencezzi',
    Type: 'Fiction',
    Narrator: 'Eric Lancer',
    Url: 'song.mp3',
    Likes: 34,
    Duration: '1:23:34',
    Published: true,
    CreatedAt: 'Sun Apr 12 11:48:12 2020',
  },
  {
    Id: 'hash5',
    ImageURL: '../book1.png',
    Title: 'The Weatherman',
    Author: 'Penny Vencezzi',
    Type: 'Fiction',
    Narrator: 'Eric Lancer',
    Url: 'song.mp3',
    Likes: 34,
    Duration: '1:23:34',
    Published: true,
    CreatedAt: 'Sun Apr 12 11:48:12 2020',
  },
];

const playlists = [
  {
    Id: 'hash1',
    Name: '1st Best',
    Audios: audios,
  },
  {
    Id: 'hash2',
    Name: '2nd Best',
    Audios: [],
  },
];

const userType = [
  {
    Type: 'Narrator',
    Following: [],
  },
  {
    Type: 'Author',
    Following: [],
  },
  {
    Type: 'Listener',
    Following: [],
  },
];


const users = [
  {
    Id: '2345',
    Name: 'Eric Lancer',
    Type: userType[0],
    Email: 'dmac@mail.com',
    ImageURL: '../avatar.png',
    Password: 'dmac@mail',
    Theme: 'Light',
    Likes: 32,
    Following: [],
    Playlist: [],
    Favorites: audios,
    CreatedAt: 'Fri Apr 17 07:48:13 2020',
  },
  {
    Id: 'hash3',
    Name: 'Dell',
    Type: userType[0],
    Email: 'dmac@mail.com',
    ImageURL: './logo.png',
    Password: 'dmac@mail',
    Theme: 'Light',
    Likes: 32,
    Following: [],
    Playlist: [],
    Favorites: audios,
    CreatedAt: 'Fri Apr 17 07:48:13 2020',
  },
  {
    Id: 'hash2',
    Name: 'Bill',
    Type: userType[2],
    Email: 'dmac@mail.com',
    ImageURL: './logo.png',
    Password: 'dmac@mail',
    Theme: 'Light',
    Likes: 32,
    Following: [],
    Playlist: [],
    Favorites: audios,
    CreatedAt: 'Fri Apr 17 07:48:13 2020',
  },
  {
    Id: 'hash5',
    Name: 'Tony',
    Type: userType[1],
    Email: 'dmac@mail.com',
    ImageURL: './logo.png',
    Password: 'dmac@mail',
    Theme: 'Light',
    Likes: 32,
    Following: [],
    Playlist: [],
    Favorites: audios,
    CreatedAt: 'Fri Apr 17 07:48:13 2020',
  },
];

const status = {
  pending: 'PENDING',
  confirmation: 'CONFIRMED',
  open: 'AVAILABLE',
};

const suggestions = [
  {
    Id:'hash1',
    Title: "Anna's Diary",
    Author: 'Anna',
    Likes: 32,
    Category: 'Fiction',
    Discription: 'lorem ipsum',
    Status: status.pending,
    CreatedAt: 'Fri Apr 17 07:48:13 2020',
  },
  {
    Id:'hash2',
    Title: 'Akams Journey',
    Author: 'Anna',
    Likes: 32,
    Category: 'Fiction',
    Discription: 'lorem ipsum',
    Status: status.pending,
    CreatedAt: 'Fri Apr 17 07:48:13 2020',
  },
  {
    Id:'hash3',
    Title: 'Living Large',
    Author: 'Dre',
    Likes: 23,
    Category: 'Fiction',
    Discription: 'lorem ipsum',
    Status: status.confirmation,
    CreatedAt: 'Fri Apr 17 07:48:13 2020',
  },
  {
    Id:'hash4',
    Title: 'The Tunnel',
    Author: 'Missy May',
    Likes: 43,
    Category: 'Fiction',
    Discription: 'lorem stpi',
    Status: status.open,
    CreatedAt: 'Fri Apr 17 07:48:13 2020',
  },
];

module.exports = [audios, playlists, users, suggestions, status];
