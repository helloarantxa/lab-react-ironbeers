import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""  ,
  });

  const navigate = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((result) => {
        console.log("result", result.data);

        navigate("/listbeers");
      })
      .catch((err) => console.log(err));
  };

  const handleTextChange = (e) => {
    setNewBeer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNumberChange = (e) => {
    setNewBeer((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <div className="mb-3 d-flex flex-column align-items-center">
          <div className="text-center">
            <label htmlFor="name" className="form-label">
              Name
            </label>
          </div>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={newBeer.name}
            onChange={handleTextChange}
            style={{ width: "60%" }}
          />
        </div>

        <div className="mb-3 d-flex flex-column align-items-center">
          <label htmlFor="tagline" className="form-label">
            Tagline
          </label>
          <input
            type="text"
            className="form-control"
            id="tagline"
            name="tagline"
            value={newBeer.tagline}
            onChange={handleTextChange}
            style={{ width: "60%" }}
          />
        </div>

        <div className="mb-3 d-flex flex-column align-items-center">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={newBeer.description}
            onChange={handleTextChange}
            style={{ width: "60%" }}
          />
        </div>

        <div className="mb-3 d-flex flex-column align-items-center">
          <label htmlFor="first_brewed" className="form-label">
            First Brewed
          </label>
          <input
            type="text"
            className="form-control"
            id="first_brewed"
            name="first_brewed"
            value={newBeer.first_brewed}
            onChange={handleTextChange}
            style={{ width: "60%" }}
          />
        </div>

        <div className="mb-3 d-flex flex-column align-items-center">
          <label htmlFor="brewers_tips" className="form-label">
            Brewers Tip
          </label>
          <input
            type="text"
            className="form-control"
            id="brewers_tips"
            name="brewers_tips"
            value={newBeer.brewers_tips}
            onChange={handleTextChange}
            style={{ width: "60%" }}
          />
        </div>

        <div className="mb-3 d-flex flex-column align-items-center">
          <label htmlFor="attenuation_level" className="form-label">
            Attenuation Level
          </label>
          <input
            type="number"
            className="form-control"
            id="attenuation_level"
            name="attenuation_level"
            value={newBeer.attenuation_level}
            onChange={handleNumberChange}
            style={{ width: "60%" }}
          />
        </div>

        <div className="mb-3 d-flex flex-column align-items-center">
          <label htmlFor="contributed_by" className="form-label">
            Contributed By
          </label>
          <input
            type="text"
            className="form-control"
            id="contributed_by"
            name="contributed_by"
            value={newBeer.contributed_by}
            onChange={handleTextChange}
            style={{ width: "60%" }}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: "60%" }}>
          ADD NEW
        </button>
      </form>
    </div>
  );
}
export default NewBeer;
