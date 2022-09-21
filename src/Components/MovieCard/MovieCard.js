import './MovieCard.css';

const MovieCard = (props) => {
    return (
        <div className='Movie'>
            <div className='Card'>
                <h4>{props.title}</h4>
                <p>{props.year}</p>
                <p>{props.director}</p>
                <p>{props.duration}</p>
                <p>{props.rate}</p>
                {props.genre.map((genre, index) => <p key={props.title + 'genre' + index} className='GenreDiv'>{genre}</p>)}
            </div>
        </div>
    );
}

export default MovieCard