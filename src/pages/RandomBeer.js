import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        console.log("response.data", response.data);
        setBeer(response.data);
      });

  }, []);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img
        src={beer.image_url}
        alt={beer.name}
        style={{ width: "70px", height: "200px" }}
      />
      <div style={{ textAlign: "left" }}>
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>First Brewed: {beer.first_brewed}</p>
        <p>Attenuation Level: {beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>Contributed By: {beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeer;