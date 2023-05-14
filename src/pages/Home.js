
import { Link } from "react-router-dom"
import beerImage from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'

const Home = () =>{
    return(
        <div>
            {/* <h1>Welcome to IronBeers!</h1> */}
           
<div>
  <div>
    <img src={beerImage} alt="beer images" />
    <Link to="/listbeers" style={{ textDecoration: 'none', color: 'black' }}>
      <div className="link-text">All Beers</div>
    </Link>
  </div>
  <div>
    <img src={newBeer} alt="new beer" />
    <Link to="/randombeer" style={{ textDecoration: 'none', color: 'black' }}>
      <div className="link-text">Random Beer</div>
    </Link>
  </div>
  <div>
    <img src={randomBeer} alt="random beer" />
    <Link to="/newbeer" style={{ textDecoration: 'none', color: 'black' }}>
      <div className="link-text">New Beer</div>
    </Link>
  </div>
</div>
        </div>
    )
}

export default Home

