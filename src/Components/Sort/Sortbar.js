import { useState } from 'react';

// Import Data
import movies from '../Data';

// Import Components
import MovieCard from '../MovieCard/MovieCard';

// Import CSS
import './Sortbar.css';

const Sortbar = () => {

    const [moviesSorted, setMoviesSorted] = useState(movies);

    const Ascending = () => {
        setMoviesSorted([...moviesSorted].sort((a, b) => {
            if (a.year < b.year) {
                return -1;
            } else {
                return 1;
            }
        }))
    };

    const Descending = () => {
        setMoviesSorted([...moviesSorted].sort((a, b) => {
            if (a.year < b.year) {
                return 1;
            } else {
                return -1;
            }
        }))
    };

    const BestRate = () => {
        setMoviesSorted([...moviesSorted].sort((a, b) => {
            if (a.rate < b.rate) {
                return 1;
            } else {
                return -1;
            }
        }))
    };

    const Genre = () => {
        setMoviesSorted([...moviesSorted].sort((a, b) => {
            if (a.genre < b.genre) {
                return -1;
            } else {
                return 1;
            }
        }))
    };

    const AZ = () => {
        setMoviesSorted([...moviesSorted].sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            } else {
                return 1;
            }
        }))
    };

    const ZA = () => {
        setMoviesSorted([...moviesSorted].sort((a, b) => {
            if (a.title < b.title) {
                return 1;
            } else {
                return -1;
            }
        }))
    };

    const Reload = () => {
        document.location.reload();
    };

    return ( 
    <div className='form'>
        <div>
            <button className='sortBtn' onClick={Ascending}>Sort by Date Ascending</button>
            <button className='sortBtn' onClick={Descending}>Sort by Date Descending</button>
            <button className='sortBtn' onClick={BestRate}>Best Rate</button>
            <button className='sortBtn' onClick={AZ}>A-Z</button>
            <button className='sortBtn' onClick={ZA}>Z-A</button>
            <button className='sortBtn' onClick={Genre}>Genre</button>
            <button className='sortBtn reload' onClick={Reload}>Reload</button>

        </div>

        <div className="database">
            {moviesSorted.map((movie, index) => (
            <MovieCard key={'MovieID' + index} title={movie.title} year={movie.year} director={movie.director} duration={movie.duration} genre={movie.genre} rate={movie.rate} />
            // <MovieCard key={'MovieID' + index} {...movie} />     
            )
            )}
        </div>
    </div> );
}
 
export default Sortbar;