import { useState } from 'react'
import './Hero.css'
import axios from "axios"

function Hero() {

  const [searchvalue, setSearchValue] = useState("");

  const logit = (event) => {
    setSearchValue(event.target.value)
  }
  const magic = async () => {
    console.log(searchvalue)
    // direct to url
    window.location.href = "/results/" + searchvalue;

  }

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Find the Right Medicine for You.</h1>
        <p>Discover the perfect medicine for your needs, and explore a range of alternatives to ensure you're making the best choice for your health.</p>
        <center>
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" onChange={logit} />
            <button type="submit" className="btn" onClick={magic}>SEARCH</button>
          </div>
        </center>

      </div>
    </div>
  )
}

export default Hero
