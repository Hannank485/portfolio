import Navbar from "./navbar";
import "./project.css";
import weather from "../images/weather.png";

import number from "../images/number-guess.png";
import calculator from "../images/calculator.png";
import tasklist from "../images/tasklist.png";
import pokemon from "../images/pokemon.png";
import money from "../images/money.png";
const Project = () => {
  return (
    <>
      <Navbar />
      <div className="project-wrapper">
        <div className="weather card">
          <img src={weather} alt="picture of weather app" />
          <h1>Weather App</h1>
          <p>
            The weather app provides real-time weather updates, offering users
            accurate forecasts and current conditions for their location.
          </p>
        </div>
        <div className="number-guess card">
          {" "}
          <img src={number} alt="number-guess picture" />
          <h1>Number Guesser</h1>
          <p>
            The number guesser app challenges users by generating a random
            number for each round, providing an entertaining guessing
            experience.
          </p>
        </div>
        <div className="calculator card">
          {" "}
          <img src={calculator} alt="picture of calculator" />
          <h1>Calculator</h1>
          <p>
            The calculator app simplifies mathematical tasks, allowing users to
            perform quick and accurate calculations with ease.
          </p>
        </div>
        <div className="task-list card">
          <img src={tasklist} alt="picture of tasklist" />
          <h1>Task List</h1>
          <p>
            The task list app helps users stay organized by providing a simple
            platform to create, manage, and prioritize their daily tasks
            efficiently.
          </p>
        </div>
        <div className="pokeapi card">
          <img src={pokemon} alt="picture of tasklist" />
          <h1>Pokemon DB</h1>
          <p>
            The Pokémon Info app retrieves comprehensive details about any
            Pokémon, offering users quick access to information such as stats,
            abilities, and evolution data.
          </p>
        </div>
        <div className="money-exchange card">
          <img src={money} alt="picture of tasklist" />
          <h1>Money Exchange</h1>
          <p>
            The money exchange app calculates exchange rates in real-time for
            any currency, simplifying currency conversion on-the-go.
          </p>
        </div>
      </div>
    </>
  );
};
export default Project;
