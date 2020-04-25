const {buildSchema} = require('graphql');
const typeDefs = buildSchema(`
type Query {
	hello: String
	all_Audios: [Audio]
	play_Audio(id: String): Audio
	all_users: [User]
	fav_Audios(uid: String): [Audio]
	all_Playlists(uid: String): [Playlist]
	playlist_Audios(uid: String, pid: String): [Audio]
	details_Author(uid: String): Details
	details_Narrator(id: String): Details
	search_Audios(title: String): [Audio]
	suggestions: [Suggestion]
	search_Suggestion(title: String): [Suggestion]
	recentPlay(uid:String): Audio
	signIn( email : String!, password : String!) : EntryResult!
}

  type Mutation {
	signUp( firstName : String!,
		lastName : String!,
		email : String!,
		password : String!,
		profilePicture : String
	  ) : EntryResult!
	AddToFavs(uid: String, id: String): [Audio]
	suggest(title: String, author: String,category: String, discription:String): Suggestion
	remove_fav_Audio(id: String): [Audio]
	AddToPlaylist(uid: String, pid: String, audioID: String): [Audio]
	NewPlaylist(uid: String, name: String): Playlist
	RemovePlaylist(uid: String, id: String): Playlist
	Like(uid: String, audioId: String): Audio
	Follow(uid: String, follow: String): User
  }
  
  type Auth {
	token: String
	user: User
  }


  type EntryResult {
	UserId : Int,
	AccountId : Int,
	Role : String,
	Token : String,
	Status : String,
}

  

  type EntryResult {
	UserId : Int,
	AccountId : Int,
	Role : String,
	Token : String,
	Status : String,
}


  type Details {
	  User: User
	  Audios: [Audio]
	  Followers: Int
  }

  type User {
	Id: ID!
	Name: String
	Type: UserType
	Email: String!
	ImageURL: String
	Password: String!
	Theme: String
	Likes: Int
	Following: [User]
	Playlist: [Playlist]
	Favorites: [Audio]
	CreatedAt: String!
  }
  
  type Audio {
	Id: ID!
	Title: String!
	ImageURL: String
	Author: String!
	Narrator: String!
	Type: String
	Likes: Int
	Url: String!
	Published: Boolean
	CreatedAt: String!
  }

  type Suggestion {
	Id: ID
	Title: String
	Likes: Int
	Author: String 
	Category: String
	Discription: String
	Status: STATUS
	CreatedAt: String
  }
  
  enum STATUS{
	CONFIRMED
	PENDING
	AVAILABLE
  }
  
  type UserType {
	Type: String!
	Following: [User]
  }
  
  type Playlist {
	Id: ID!
	Name: String!
	Audios: [Audio]
  }
`);

module.exports = typeDefs;
