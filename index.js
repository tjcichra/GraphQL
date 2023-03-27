let { graphql, buildSchema } = require('graphql');

let schema = buildSchema(`
  type User {
    firstname: String
    lastname: String
  }

  type Query {
    id: ID
    user(id: ID): User
  }
`);

let rootValue = {
  id: 1,
  user: (args) => {
    return {
      firstname: 'terence' + args.id,
      lastname: 'fletcher'
    }
  }
};

let source = '{ id, user(id: 3) { firstname, lastname } }';

graphql({ schema, source, rootValue }).then((response) => {
  console.log(response);
});