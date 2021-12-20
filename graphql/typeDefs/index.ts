import { gql } from 'apollo-server-micro';

export default gql`
  scalar JSON

  type Query {
    spotifyNowPlaying: NowPlaying!
    playlists: [Playlist]!
    nowReading: [Book]!
    recentlyRead(latest: Int): [Book]!
    favouriteBooks(limit: Int): [Book]!
    posts(limit: Int): [PostWithoutBody]!
    post(slug: String!): Post
  }

  type NowPlaying {
    album: String
    albumImageUrl: String
    artist: String
    isPlaying: Boolean!
    songUrl: String
    title: String
  }

  type Playlist {
    title: String!
    coverUrl: String!
    spotifyUrl: String!
  }

  type Book {
    title: String!
    author: String!
    readingDate: String
    okuUrl: String!
    coverUrl: String
  }

  type Post {
    title: String!
    slug: String!
    publishedDate: String!
    metaDescription: String
    coverUrl: String
    tags: [String]
    body: PostBody!
  }

  type PostWithoutBody {
    title: String!
    slug: String!
    publishedDate: String!
    coverUrl: String
  }

  # Contentful types from here on out!

  type PostBody {
    json: JSON!
    links: PostBodyLinks!
  }

  type PostBodyLinks {
    entries: PostBodyEntries!
    assets: PostBodyAssets!
  }

  type PostBodyEntries {
    inline: [Entry]!
    hyperlink: [Entry]!
    block: [Entry]!
  }

  type PostBodyAssets {
    hyperlink: [Asset]!
    block: [Asset]!
  }

  interface Entry {
    sys: Sys!
    contentfulMetadata: ContentfulMetadata!
  }

  type ContentfulMetadata {
    tags: [ContentfulTag]!
  }

  type ContentfulTag {
    id: String
    name: String
  }

  type Sys {
    id: String!
    spaceId: String!
    environmentId: String!
    publishedAt: String
    firstPublishedAt: String
    publishedVersion: Int
  }

  type Asset {
    sys: Sys!
    contentfulMetadata: ContentfulMetadata!
    title: String
    description: String
    contentType: String
    fileName: String
    size: Int
    url(transform: ImageTransformOptions): String
    width: Int
    height: Int
  }

  input ImageTransformOptions {
    width: Int
    height: Int
    quality: Int
    cornerRadius: Int
    resizeStrategy: String
    resizeFocus: String
    backgroundColor: String
    format: String
  }
`;
