
import { Link } from "react-router-dom"
import beerImage from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'

const Home = () =>{
    return(
        <div>
            <h1>Welcome to IronBeers!</h1>
            <div>
                <img src={beerImage} alt="beer images"/>
                <Link to="/listbeers">All Beers</Link>
            </div>
            <div>
                <img src={newBeer} alt="new beer"/>
                <Link to="/randombeer"> Random Beer</Link>
            </div>
            <div>
                <img src={randomBeer} alt="random beer"/>
                <Link to="/newbeer">New Beer</Link>
            </div>
        </div>
    )
}

export default Home

