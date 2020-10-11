if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');

const POSTS = [
    { author: "John Doe", body: "Hello world" },
    { author: "Jane Doe", body: "Hi, planet!" },
];

const schema = buildASTSchema(gql`
  type Query {
    posts: [Post]
    post(id: ID!): Post
  }

  type Post {
    id: ID
    author: String
    body: String
  }
`);

const mapPost = (post, id) => post && ({ id, ...post });

const root = {
    posts: () => POSTS.map(mapPost),
    post: ({ id }) => mapPost(POSTS[id], id),
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app.get("/players", db.getPlayers);
app.get("/players/:id", db.getPlayerById);
app.post("/players", db.createPlayer);
app.post("/characters", db.createCharacter);
app.put("/players/:id", db.updatePlayer);
app.delete("/players/:id", db.deletePlayer);

const port = process.env.PORT || 4200
app.listen(port);
console.log(`🔮🦄  GraphQL server running on port ${port}/graphql.  🦄🔮`);