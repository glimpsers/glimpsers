import React, { Component } from 'react';

export class ArtCard extends Component {
  render() {
    return (
      <>
        {this.props.artData.map((result, idx) =>
          <>
            {result !== null ? (
              <>
                <div className="card" key={idx}>
                  <img src={result.image} alt={result.title} title={result.title} />
                  <div className="data">
                    <h1>{result.title}</h1>
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

export default ArtCard;
