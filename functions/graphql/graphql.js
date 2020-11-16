require('dotenv').config();
const { gql, ApolloServer } = require('apollo-server-lambda');
const faunadb = require('faunadb');

const q = faunadb.query;
const client = new faunadb.Client({ secret: process.env.BOOKMARKING_APP_DB_KEY });

const bookMarks = [
  { id: "282259274377200128", url: "https://google.com", name: "Google", ts: 1605426417555000 },
  { id: "282259282883248640", url: "https://Facebook.com", name: "Facebook", ts: 1605426417555000 },
  { id: "282259305144517123", url: "https://Youtube.com", name: "Youtube", ts: 1605426417555000 },
]


// Graphql Schema defination
const typeDefs = gql`
  type BookMark {
    id: ID!
    ts: Float!
    name: String!
    url: String!
  }
  type Query {
    allBookMarks: [BookMark]!
  }
  type Mutation {
    addBookMark(name:String!, url:String!): BookMark!
    deleteBookMark(id:ID!): BookMark!
  }
`

const resolvers = {
  Query: {
    allBookMarks: async (root, args, context) => {
      const result = await client.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('bookmarks'))),
          q.Lambda(ref => q.Get(ref))
        )
      )
      return [
        ...result.data.map(({ data, ts, ref }) => {
          return { url: data.url, name: data.name, ts, id: ref.id }
        })
      ]
    }
  },
  Mutation: {
    addBookMark: async (root, { url, name }, context) => {
      const result = await client.query(
        q.Create(q.Collection('bookmarks'), { data: { url, name } },)
      );
      return {
        name: result.data.name,
        url: result.data.url,
        ts: result.ts,
        id: result.ref.id
      }
    },
    deleteBookMark: async (root, { id }, context) => {
      const result = await client.query(
        q.Delete(
          q.Ref(q.Collection('bookmarks'), id)
        ));
      return {
        name: result.data.name,
        url: result.data.url,
        ts: result.ts,
        id: result.ref.id
      }
      // return {...todos[0]}
    },

  }
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
})

exports.handler = apolloServer.createHandler()


// exports.handler = apolloServer.createHandler({
//   cors:{
//     origin: "*",
//     credentials,
//   }
// })