import React, { Component } from 'react';

export class FoodCard extends Component {
  render() {
    return (
      <>
        {this.props.foodData.map((result, idx) =>
          <>
            {result !== null ? (
              <>
                <div className="card" key={idx}>
                  <img src={result.image_url} alt={result.label} title={result.label} />
                  <div className="data">
                    <h1>{result.label}</h1>
                    <>
                      <p>
                        Ingredients
                        {result.ingredients.map(result =>
                        <>
                          <p>{result}</p>
                        </>)}
                      </p>
                    </>
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

export default FoodCard;
