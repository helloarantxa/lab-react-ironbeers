import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ListBeers() {
  const [listBeers, setListBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (searchQuery.trim() === '') {
      axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
          console.log('response.data', response.data);
          setListBeers(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

    } else {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`)
        .then((response) => {
          console.log('response.data', response.data);
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
    <div>
      <h1>List of Beers</h1>
      <input type="text" placeholder='Search beers' value={searchQuery} onChange={handleSearch}/>
      {listBeers.map((beer) => (
        <Link to={`/singlebeer/${beer._id}`} key={beer._id}>
          <div>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ListBeers;
