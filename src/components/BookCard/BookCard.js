import React, { Component } from 'react';

export class BookCard extends Component {
  render() {
    return (
      <>
        {this.props.booksData.map((result, idx) =>
          <>
            {result !== null ? (
              <>
                <div className="card" key={idx}>
                  <div className="data">
                    <h1>{result.title}</h1>
                    <p>Description: {result.description}</p>
                    <p>Author: {result.author}</p>
                    <p>Publisher: {result.publisher}</p>
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

export default BookCard;
