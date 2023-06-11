import Navbar from '../Components/Navbar'
import Cover from '../Baner/Cover'
import './Home.css'
import Search from '../Components/Search/Search'
import { useEffect, useState } from 'react'
import { MovieCard } from '../Components/MovieCard/MovieCard'
import { Link } from 'react-router-dom'
export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/movie")
      .then((res) => res.json())
      .then(movies => {
        setMovies(movies);
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
            movies.map(m =>
              <div key={m._id} className="col-md-3">
                {/* <a href="/movie/1">
                  <MovieCard key={m._id} movie={m} />
                </a> */}
                <Link to={`movie/${m._id}`}>
                <MovieCard key={m._id} movie={m} />
                </Link>
              </div>

            )
          }
        </div>
      </div>
    </div>
  )
} 