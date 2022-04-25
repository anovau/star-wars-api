import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pilotinfo.css";

function PilotInfo(props) {

    const [pilot, setPilot] = useState({})

    useEffect(() => {
        axios.get(props.url).then((res) => {
          setPilot(res.data);
        });
      }, []);

      const idImagen = (props.url).slice(29, -1);

    return (
      <div className="card">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${idImagen}.jpg`} alt={pilot.name}/>
          <h3>{pilot.name}</h3>
          <p>Height: {pilot.height}</p>
          <p>Mass: {pilot.mass}</p>
          <p>Gender: {pilot.gender}</p>
      </div>
    );
  }
  
  export default PilotInfo;
  