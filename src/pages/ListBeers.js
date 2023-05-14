import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListBeers() {
  const [listBeers, setListBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
          console.log("response.data", response.data);
          setListBeers(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .get(
          `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`
        )
        .then((response) => {
          console.log("response.data", response.data);
          setListBeers(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div class="container">
      {/* <h1>List of Beers</h1> */}
      <div class="mb-3">
        <input
          class="form-control"
          type="text"
          placeholder="Search beers"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div class="row">
        {listBeers.map((beer) => (
          <div class="col-md-4" key={beer._id}>
            <Link to={`/singlebeer/${beer._id}`}>
              <div class="card mb-1">
                <div class="row g-0">
                  <div class="col-3">
                    <img
                      src={beer.image_url}
                      class="card-img-top"
                      alt={beer.name}
                      style={{ width: "50px", height: "120px" }}
                    />
                  </div>
                  <div class="col-9">
                    <div class="card-body">
                      <h5 class="card-title">{beer.name}</h5>
                      <p class="card-text">{beer.tagline}</p>
                      <p class="card-text">
                        {" "}
                        <b>Create by:</b> {beer.contributed_by}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListBeers;
