import React, { Component } from 'react';

export class CatCard extends Component {
  render() {
    return (
      <>
        {this.props.catsData.map((result, idx) =>
          <>
            {result !== null ? (
              <>
                <div className="card" key={idx}>
                  <img src={result.image} alt={result.description} title={result.name} />
                  <div className="data">
                    <h1>{result.name}</h1>
                    <p>Origin: {result.origin}</p>
                    <p>Description: {result.description}</p>
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

export default CatCard;
