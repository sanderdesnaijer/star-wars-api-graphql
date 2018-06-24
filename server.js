const express = require("express");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");
const fetch = require("node-fetch");

// https://youtu.be/Vs_CBxCfFHk?t=33m24s

// GraphQL Schema
const schema = buildSchema(`
  type Query {
    
    planet(id: Int!): Planet
    planets: [Planet]

    person(id: Int!) : People
    persons: [People]

    film(id: Int!): Film
    films: [Film]

    starship(id: Int!): Starship
    starships: [Starship] 

    vehicle(id: Int!): Vehicle
    vehicles: [Vehicle]

    specy(id: Int!): Specy
    species: [Specy]
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

  type Film {    
    created: String
    director: String
    edited: String
    episode_id: String
    opening_crawl: String
    planets: String
    producer: String
    release_date: String
    title: String
    url: String
    characters: [String]
    species: [String]
    starships: [String]
    vehicles: [String]
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

  type Specy {
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
`);

const getPlanet = args => {
  return fetch(`https://swapi.co/api/planets/${args.id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data;
    });
};
const getPlanets = args => {
  return fetch("https://swapi.co/api/planets/")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data.results;
    });
};

const getPerson = args => {
  return fetch(`https://swapi.co/api/people/${args.id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data;
    });
};
const getPersons = args => {
  return fetch("https://swapi.co/api/people/")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data.results;
    });
};

const getFilm = args => {
  return fetch(`https://swapi.co/api/films/${args.id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data;
    });
};
const getFilms = args => {
  return fetch("https://swapi.co/api/films/")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data.results;
    });
};

const getStarship = args => {
  return fetch(`https://swapi.co/api/starships/${args.id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data;
    });
};
const getStarships = args => {
  return fetch("https://swapi.co/api/starships/")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data.results;
    });
};

const getVehicle = args => {
  return fetch(`https://swapi.co/api/vehicles/${args.id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data;
    });
};
const getVehicles = args => {
  return fetch("https://swapi.co/api/vehicles/")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data.results;
    });
};

const getSpecy = args => {
  return fetch(`https://swapi.co/api/species/${args.id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data;
    });
};
const getSpecies = args => {
  return fetch("https://swapi.co/api/species/")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data.results;
    });
};

// Root resolver
const root = {
  planet: getPlanet,
  planets: getPlanets,

  person: getPerson,
  persons: getPersons,

  film: getFilm,
  films: getFilms,

  starship: getStarship,
  starships: getStarships,

  vehicle: getVehicle,
  vehicles: getVehicles,

  specy: getSpecy,
  species: getSpecies
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
