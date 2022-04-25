import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import StarshipItem from "../../components/Starhipitem/StarshipItem";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Starships.css";

function Starships() {
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() =>{
    axios.get(`https://swapi.dev/api/starships/?page=${page}`)
    .then(res =>{
        setStarships(prevStarships => prevStarships.concat(res.data.results));
    })
  }, [page]);

  const list = starships.map(ship =>  <StarshipItem key={(ship.url).slice(32, -1)} name={ship.name} model={ship.model} url={(ship.url).slice(32, -1)} />);

  return (
      <>
      <InfiniteScroll
      dataLength={starships.length}
      hasMore={true}
      next={() => setPage((prevPage) => prevPage + 1)}
      >
      <div className="starships-list">
      {list}
      </div>
      </InfiniteScroll>
      </>
  );
}

export default Starships;