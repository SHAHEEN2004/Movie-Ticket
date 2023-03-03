import Navbar from '../Components/Navbar'
import Cover from '../Baner/Cover'
import './Home.css'
import Search from '../Components/Search/Search'
import Card from '../Components/MovieCard/Card'
import { useEffect, useState } from 'react'
export default function Home() {
  const [Movie, setMovie] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/api/movie')
      .then((response) => response.json())
      .then(Movie => {
        setMovie(Movie)
      })
  }, [])
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="cover">
          <Cover />
        </div>
        <div className="Seach">
          <Search />
        </div>
        <div className="row">
          {
            Movie.map(D =>
              <div key={D._id} className='map'>
                <a href="/movie/1">
                  <Card/> 
                </a>
              </div>)
          }
        </div>
      </div>
    </div>
  )
} 