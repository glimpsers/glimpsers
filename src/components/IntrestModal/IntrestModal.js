//package
import React, { Component } from 'react';
import ReactModal from 'react-modal';

//utilities

//components

//style

//view

export class IntrestModal extends Component {

  render() {
    console.log(this.props.parentState.art);
    return (
      <>
        <ReactModal
          isOpen={this.props.intrestModal}
          className="modalNewPost"
          overlayClassName="overlayNewPost"
        >
          <div className="btnGExit">
            <h2>Your Interest</h2>
            <button onClick={this.props.handleCloseIntrestModal} className="btnExitInfo">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="modalForm">
            <form>
              <label>Edit Your Interest?</label>
              <div>
                <label htmlFor="News" className="interestLabels">
                  {this.props.parentState.news ?
                    (<>
                      <input type="checkbox" id="News" name="News" value="News" checked onClick={this.props.updateNews} />
                    </>)
                    :
                    (<>
                      <input type="checkbox" id="News" name="News" value="News" onClick={this.props.updateNews} />
                    </>)
                  }
                  <div className="interestLabel">
                    <svg class="myInterest" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  News
                  </div>
                </label>
                <label htmlFor="Movie" className="interestLabels">
                  {this.props.parentState.movie ?
                    (<>
                      <input type="checkbox" id="Movie" name="Movie" value="Movie" checked onClick={this.props.updateMovie} />
                    </>)
                    :
                    (<>
                      <input type="checkbox" id="Movie" name="Movie" value="Movie" onClick={this.props.updateMovie} />
                    </>)
                  }
                  <div className="interestLabel">
                    <svg class="myInterest" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    Movie
                  </div>
                </label>
                <label htmlFor="Books" className="interestLabels">
                  {this.props.parentState.books ?
                    (<>
                      <input type="checkbox" id="Books" name="Books" value="Books" checked onClick={this.props.updateBooks} />
                    </>)
                    :
                    (<>
                      <input type="checkbox" id="Books" name="Books" value="Books" onClick={this.props.updateBooks} />
                    </>)
                  }

                  <div className="interestLabel">
                    <svg class="myInterest" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    Books
                  </div>
                </label>
                <label htmlFor="Art" className="interestLabels">
                  {this.props.parentState.art ?
                    (<>
                      <input type="checkbox" id="Art" name="Art" value="Art" checked onClick={this.props.updateArt} />
                    </>)
                    :
                    (<>
                      <input type="checkbox" id="Art" name="Art" value="Art" onClick={this.props.updateArt} />
                    </>)
                  }
                  <div className="interestLabel">
                    <svg class="myInterest" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    Art
                  </div>
                </label>
                <label htmlFor="Cats" className="interestLabels">
                  {this.props.parentState.cats ?
                    (<>
                      <input type="checkbox" id="Cats" name="Cats" value="Cats" checked onClick={this.props.updateCats} />
                    </>)
                    :
                    (<>
                      <input type="checkbox" id="Cats" name="Cats" value="Cats" onClick={this.props.updateCats} />
                    </>)
                  }
                  <div className="interestLabel">
                    <svg class="myInterest" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    Cats
                  </div>
                </label>
                <label htmlFor="Food" className="interestLabels">
                  {this.props.parentState.food ?
                    (<>
                      <input type="checkbox" id="Food" name="Food" value="Food" checked onClick={this.props.updateFood} />
                    </>)
                    :
                    (<>
                      <input type="checkbox" id="Food" name="Food" value="Food" onClick={this.props.updateFood} />
                    </>)
                  }
                  <div className="interestLabel">
                    <svg class="myInterest" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    Food
                  </div>
                </label>
              </div>
              <button
                className="btn btnNewAcc"
                onClick={(e) => {
                  this.props.updateIntrest(e);
                  // this.props.checkUser(); //  these two were commented because they re-render the set-up pop up
                  // this.props.updateSetupAccount();
                  this.props.handleCloseIntrestModal();
                }} >
                Update Interest</button>
            </form>
          </div>
        </ReactModal>
      </>
    );
  }
}

export default IntrestModal;
