let express = require("express");
const {ApolloServer} = require("apollo-server-express");
const schema = require("./components/schema");
const resolvers = require("./components/resolvers");
const app = express();

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    formatError: error => {
        console.log(error);
        return error;
    },
    formatResponse: response => {
        console.log(response);
        return response;
    }
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 8000 }, () => {
    console.log("Apollo Server on http://localhost:8000/graphql");
});
