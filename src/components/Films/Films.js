import React, { useEffect, useState } from "react";
import axios from "axios";

function Films(props) {

    const [film, setFilm] = useState({})

    useEffect(() => {
        axios.get(props.url).then((res) => {
          setFilm(res.data);
        });
      }, []);

      const idImagen = (props.url).slice(28, -1);

    return (
      <div className="card">
        <img src={`https://starwars-visualguide.com/assets/img/films/${idImagen}.jpg`} alt={film.title}/>
          <h3>{film.title}</h3>
          <p>Director: {film.director}</p>
          <p>Producer: {film.producer}</p>
      </div>
    );
  }
  
  export default Films;
  