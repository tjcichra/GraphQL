let { graphql, buildSchema } = require('graphql');

let schema = buildSchema(`
  type Query {
    id: ID
    hello: String
  }
`);

let rootValue = { id: () => 1, hello: () => 'Hello world!' };

let source = '{ id, hello }';

graphql({ schema, source, rootValue }).then((response) => {
  console.log(response);
});