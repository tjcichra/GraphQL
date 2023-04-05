let { graphql, buildSchema } = require('graphql');

let schema = buildSchema(`
  type Character {
    firstname: String!
    lastname: String!
    catchphrase: String
  }

  type Query {
    character(id: ID!): Character
  }
`);

let rootValue = {
  character: (args) => {
    switch (args.id) {
      case '1':
        return {
          firstname: 'Ross',
          lastname: 'Geller',
          catchphrase: 'We were on a break!'
        }
      case '2':
        return {
          firstname: 'Chandler',
          lastname: 'Bing',
          catchphrase: 'Could I BE anymore...'
        }
      case '3':
        return {
          firstname: 'Joey',
          lastname: 'Tribbiani',
          catchphrase: 'How YOU doin?'
        }
      default:
        break;
    }
  }
};

let source = `query characters($id: ID!) {
  character(id: $id) {
    firstname,
    lastname,
    catchphrase
  }
}`;

let variableValues = {
  id: 3
};

graphql({ schema, source, rootValue, variableValues }).then((response) => {
  console.log(response);
});