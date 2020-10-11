if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');
const db = require("./queries");
const PLAYERS = require("./players");

const schema = buildASTSchema(gql`
  type Query {
    players: [Player]
    player(id: ID!): Player
  }

  type Player {
    id: ID
    player_name: String
    character_name: String
    class: String
    life: Int
    str: Int
    end: Int
    agi: Int
    cha: Int
    aur: Int
    tho: Int
    avatar: String
  }
`);

const mapPlayer = (player, id) => player && ({ id, ...player });

const root = {
  players: () => PLAYERS.map(mapPlayer),
    player: ({ id }) => mapPlayer(PLAYERS[id], id),
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

const port = process.env.PORT || 4200
app.listen(port);
console.log(`🔮🦄  GraphQL server running on port ${port}/graphql.  🦄🔮`);