import React from 'react'
import styles from './Card.Module.css'
import { Card } from 'primereact/card';
export default function Movie({ movie }) {
    const header = (
        <img src={movie.posterUrl} alt="Poster" />
    )
    return (
        <div className={styles.card}>
            <Card title={movie.name} header={header} className="md:w-25rem">
                <div className={styles.content}>
                    <div className={styles.rating}>
                        <img src="https://pixner.net/boleto/demo/assets/images/movie/tomato.png" 
                        alt="Rating" />
                        &nbsp;&nbsp;
                        <span>
                            {movie.rating}
                        </span>
                    </div>
                </div>
            </Card>
        </div>
    )
}
