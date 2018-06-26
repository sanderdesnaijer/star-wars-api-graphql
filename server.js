const express = require("express");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");
const fetch = require("node-fetch");

// GraphQL Schema
const schema = buildSchema(`
  type Query {
    
    planet(id: Int!): Planet
    planets: Planets

    person(id: Int!) : People
    persons: Persons

    film(id: Int!): Film
    films: Films

    starship(id: Int!): Starship
    starships: Starships

    vehicle(id: Int!): Vehicle
    vehicles: Vehicles

    specie(id: Int!): Specie
    species: Species
  }

  type Pagination {
    count: Int,
    next: String,
    previous: String,
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

  type Planets {
    edges: [Planet]
    pagination: Pagination
  }

  type People {
    birth_year: String
    eye_color: String    
    gender: String
    hair_color: String
    height: String
    homeworld: String
    mass: String
    name: String
    skin_color: String
    created: String
    edited: String    
    url: String
    vehicles: [String]
    species: [String]
    starships: [String]
    films: [String]
  }

  type Persons {
    edges: [People]
    pagination: Pagination
  }

  type Film {    
    created: String
    director: String
    edited: String
    episode_id: String
    opening_crawl: String    
    producer: String
    release_date: String
    title: String
    url: String
    planets: [String]
    characters: [String]
    species: [String]
    starships: [String]
    vehicles: [String]
  }

  type Films {
    edges: [Film]
    pagination: Pagination
  }

  type Starship {
    MGLT: String
    cargo_capacity: String
    consumables: String
    cost_in_credits: String
    created: String
    crew: String
    edited: String
    hyperdrive_rating: String
    length: String
    manufacturer: String
    max_atmosphering_speed: String
    model: String
    name: String
    passengers: String
    starship_class: String
    url: String
    films: [String]
    pilots: [String]
  }

  type Starships {
    edges: [Starship]
    pagination: Pagination
  }

  type Vehicle {
    cargo_capacity: String
    consumables: String
    cost_in_credits: String
    created: String
    crew: String
    edited: String
    length: String
    manufacturer: String
    max_atmosphering_speed: String
    model: String
    name: String
    passengers: String
    vehicle_class: String
    url: String
    pilots: [String]
    films: [String]
  }

  type Vehicles {
    edges: [Vehicle]
    pagination: Pagination
  }

  type Specie {
    average_height: String
    average_lifespan: String
    classification: String
    created: String
    designation: String
    edited: String
    eye_colors: String
    hair_colors: String
    homeworld: String
    language: String
    name: String
    skin_colors: String
    url: String
    people: [String]
    films: [String]
  }

  type Species {
    edges: [Specie]
    pagination: Pagination
  }

`);

// helpers
const fetchData = url => fetch(url).then(res => res.json());

const fetchDataWithPagination = url =>
  fetchData(url).then(responseWithPagination);

const responseWithPagination = data => {
  const { count, next, previous, results } = data;
  return Object.assign(
    {},
    {
      pagination: {
        count,
        next,
        previous
      },
      edges: results
    }
  );
};

// Root resolver
const root = {
  planet: args => fetchData(`https://swapi.co/api/planets/${args.id}`),
  planets: fetchDataWithPagination("https://swapi.co/api/planets/"),

  person: args => fetch(`https://swapi.co/api/people/${args.id}`),
  persons: fetchDataWithPagination("https://swapi.co/api/people/"),

  film: args => fetchData(`https://swapi.co/api/films/${args.id}`),
  films: fetchDataWithPagination("https://swapi.co/api/films"),

  starship: args => fetchData(`https://swapi.co/api/starships/${args.id}`),
  starships: fetchDataWithPagination("https://swapi.co/api/starships/"),

  vehicle: args => fetchData(`https://swapi.co/api/vehicles/${args.id}`),
  vehicles: fetchDataWithPagination("https://swapi.co/api/vehicles/"),

  specy: args => fetchData(`https://swapi.co/api/species/${args.id}`),
  species: fetchDataWithPagination("https://swapi.co/api/species/")
};

// Create an express server and Graphql endpoint
const app = express();
app.use(
  "/graphql",
  cors(),
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
