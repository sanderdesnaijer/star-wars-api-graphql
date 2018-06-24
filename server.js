const express = require("express");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");
const fetch = require("node-fetch");

// https://youtu.be/Vs_CBxCfFHk?t=33m24s

// GraphQL Schema
const schema = buildSchema(`
  type Query {
    course(id: Int!): Course
    courses(topic: String): [Course],
    planets: [Planet],
  }
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
  type Planet {
    name: String
    climate: String
    created: String
    edited: String    
    gravity: String
    orbital_period: String    
    rotation_period: String
    surface_water: String
    terrain: String
    url: String    
    residents: [String]
    films: [String]
  }
`);

const courseData = [
  {
    id: 1,
    title: "Sjaan",
    author: "Gee",
    description: "asdad sdsa",
    topic: "koalas",
    url: "heknie.nl"
  },
  {
    id: 2,
    title: "Gerrit",
    author: "Sjohn adds",
    description: "asdad sdsa",
    topic: "honden",
    url: "heknie.nl"
  },
  {
    id: 3,
    title: "Henkie",
    author: "boekoe boe",
    description: "asdad sdsa",
    topic: "honden",
    url: "wist.nl"
  }
];

const planets = [
  {
    name: "etest",
    id: 1
  },
  {
    name: "hello",
    id: 2
  }
];

const getPlanets = args => {
  return fetch("https://swapi.co/api/planets/")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data.results;
    });
};

const getCourse = args => {
  const id = args.id;

  return courseData.filter(course => course.id === id)[0];
};

const getCourses = args => {
  const { topic } = args;
  if (topic) {
    return courseData.filter(course => course.topic === topic);
  }
  return courseData;
};

// Root resolver
const root = {
  course: getCourse,
  courses: getCourses,
  planets: getPlanets
};

// Create an express server and Graphql endpoint
const app = express();
app.use(
  "/graphql",
  express_graphql({
    schema,
    rootValue: root,
    graphiql: true
  })
);
const port = 4000;
app.listen(port, () =>
  console.log(`express graphql server running on localhost:${port}/graphql`)
);
