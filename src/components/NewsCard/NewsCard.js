import React, { Component } from 'react';

export class MewsCard extends Component {

  formatDate = (date) => new Date(date).toISOString().replace(/T/, ' ').replace(/\..+/, '');

  render() {
    return (
      <>
        {this.props.newsData.map((result, idx) =>
          <>
            {result !== null ? (
              <>
                <div className="card" key={idx}>
                  <img src={result.urlToImage} alt={result.description} title={result.title} />
                  <div className="data">
                    <h1>{result.title}</h1>
                    <p>Description: {result.description}</p>
                    <p>Published at: {this.formatDate(`${result.publishedAt}`)}</p>
                  </div>
                  <div className="btnCardGroup">
                    <a
                      className="btnCard"
                      href={result.url}
                      target="__block"
                    >Read More</a>
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

export default MewsCard;
