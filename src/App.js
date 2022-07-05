import './App.css';
import React, {useState, useEffect} from 'react';
import StarShipCard from "./component/StarShipCard"

function App() {
  const [people, setPeople] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [films, setfilms] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/')
      let data = await res.json()
      setPeople(data.results);
    }
    async function fetchPlanet() {
      let res = await fetch('https://swapi.dev/api/planets/')
      let data = await res.json()
      setPlanet(data.results);
    }
    async function fetchFilms() {
      let res = await fetch('http https://swapi.dev/api/films/')
      let data = await res.json()
      setfilms(data.results);
    }
    async function fetchVehicles() {
      let res = await fetch('http https://swapi.dev/api/vehicles/')
      let data = await res.json()
      setVehicles(data.results);
    }
    async function fetchSpecies() {
      let res = await fetch('http https://swapi.dev/api/species/')
      let data = await res.json()
      setSpecies(data.results);
    }

    fetchPeople();
    fetchPlanet();
    fetchFilms();
    fetchVehicles();
    fetchSpecies();
  },)
  

  return (
    <div className="App">
      <StarShipCard/>
    </div>
  );
}

export default App;

