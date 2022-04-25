import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import PilotInfo from "../../components/PilotInfo/PilotInfo";
import Films from "../../components/Films/Films";
import { useParams } from "react-router-dom";
import "./Starshipinfo.css";

function StarshipInfo() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(0);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/${id}`).then((res) => {
      setVehicle(res.data);
    });
  }, []);

  return (
    <Fragment>
      <main>
        <div className="main-comtainer">
        <div className="starship-container">
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
            alt={vehicle.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
            }}
          />
          <div>
            <h1>{vehicle.name}</h1>
            <p>
              Lorem ipsum dolor sit ame. Vestibulum posuere lacus vitae lacus
              pretium, vitae malesuada justo porta. Nam quis imperdiet ligula.
              Praesent suscipit et lectus quis laoreet. Curabitur ultrices
              sapien leo, id dignissim nisi facilisis ac. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aliquam vestibulum auctor arcu
              sit amet condimentum. Donec posuere blandit sem, sit amet semper
              dolor viverra ac. Aenean sit amet tincidunt magna.
              {}
            </p>
          </div>
          <div className="features">
            <div>
              <p>Model: {vehicle.model}:</p>
              <p>Cost in credits: {vehicle.cost_in_credits}</p>
              <p>Atmospheric speed: {vehicle.max_atmosphering_speed}</p>
            </div>
            <div>
              <p>Manufacturer: {vehicle.manufacturer}</p>
              <p>Lenght: {vehicle.length}</p>
              <p>Crew: {vehicle.crew}</p>
            </div>
          </div>
        </div>
        <h2>Related Pilots</h2>
        <div className="pilot">{vehicle.pilots && vehicle.pilots.length > 0 ? vehicle.pilots.map(item =>  <PilotInfo  url={item}/>) : "There are no related items for this category"}</div>
        <h2>Related Films</h2>
        <div className="films">{vehicle.films && vehicle.films.length > 0 ? vehicle.films.map(item =>  <Films  url={item}/>) : ""}</div>
        </div>
      </main>
    </Fragment>
  );
}

export default StarshipInfo;
