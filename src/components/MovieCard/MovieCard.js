import React, { Component } from 'react';

export class MovieCard extends Component {
  render() {
    return (
      <>
        {this.props.movieData.map((result, idx) =>
          <>
            {result !== null && result.image !== undefined && !(result.image).toLowerCase().includes('null'.toLowerCase()) ? (
              <>
                <div className="card" key={idx}>
                  <img src={result.image} alt={result.title} title={result.title} />
                  <div className="data">
                    <h1>{result.title}</h1>
                    <p>Release Date: {result.releaseDate}</p>
                    <p>Rating: {result.rating}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
              </>
            )}
          </>
        )}
      </>
    );
  }
}

export default MovieCard;
