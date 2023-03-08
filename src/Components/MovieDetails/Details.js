import MTabs from '../MovieTabs/MTabs'
import Title from '../MovieTitle/Title'
import Navbar from '../Navbar'
import './Details.css'
export function Details() {
    return (
        <div>
            <Navbar />
            <div className='details'>
                <section className='sections'>
                    <img className='sectionImage' src="https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" alt="Image" />
                </section>
                <section className="mvt">
                    <Title />
                </section>
                <section className='baner'>
                    <a className='btn-tickets' href="#">
                        Book Tickets
                    </a>
                </section>
                <section className='baners'>
                    <div>
                        <img className="imgs" src="https://pixner.net/boleto/demo/assets/images/movie/tomato.png" alt="Rating" />
                        &nbsp;&nbsp;
                    </div>
                    <div className="para">
                        <span>
                            80%
                        </span>
                    </div>
                    <p className="p1">
                        TommotoMeter
                    </p>
                    &nbsp;&nbsp;

                    <div className="img2">
                        <img className="imgs2" src="https://pixner.net/boleto/demo/assets/images/movie/cake.png" alt="Rating" />
                        &nbsp;&nbsp;
                        <div className="para1">
                            <span>
                                80%
                            </span>
                        </div>
                        <p className="p2">
                            Audience Score
                        </p>
                    </div>
                </section>
                <section>
                    <MTabs />
                </section>
            </div>
        </div>
    )
}

