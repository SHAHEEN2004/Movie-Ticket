import "./MovieCard.css"
import { Card } from 'primereact/card';
export  function MovieCard({ movie }) {
    const header = (

        <img src={movie.posterUrl} alt="Poster" className="img w-100">
        </img>
    )
    return (
        <div className="card">
            <Card title={movie.name} header={header} className="titles">
                <div className="content">
                    <hr />
                    <div className="rating">
                        <div>
                        <img className="img" src="https://pixner.net/boleto/demo/assets/images/movie/tomato.png" alt="Rating" />
                        &nbsp;&nbsp;
                        <span>
                            {movie.rating}
                        </span>
                        <span>80%</span>
                        </div>
                        <div>
                        <img className="img" src="https://pixner.net/boleto/demo/assets/images/movie/cake.png" alt="Rating" />
                        &nbsp;&nbsp;
                        <span>
                            {movie.rating}
                        </span>
                        </div>
                     </div>
                </div>
            </Card>
        </div>
    )
}
