//package
import React, { Component } from 'react';
import ReactModal from 'react-modal';

//utilities

//components

//style
import GitHubIcon from '../../assets/icons/github.svg';
import LinkedInIcon from '../../assets/icons/linked.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';

export class OurTeamModal extends Component {
  render() {
    return (
      <>
        <ReactModal
          isOpen={this.props.showMemberModal}
          className="OurTeamModal"
          overlayClassName="OurTeamOverlay"
        >
          <div className="btnGExit">
            <h2>{this.props.memberName}</h2>
            <button onClick={this.props.handleCloseModalMember} className="btnExitInfo">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="OurTeamModalInfo">
            <div className="whiteSpace"></div>
            <img src={this.props.memberImage} alt={this.props.memberName} />
            <div className="whiteSpace"></div>
            <p>{this.props.memberMassege}</p>
            <div className="socialMedia">
              {this.props.faceBookLink !== '' &&
                <>
                  <a href={this.props.faceBookLink} target="__block">
                    <img src={FacebookIcon} alt='Facebook' />
                  </a>
                </>
              }
              {this.props.gitHubLink !== '' &&
                <>
                  <a href={this.props.gitHubLink} target="__block">
                    <img src={GitHubIcon} alt='GitHubIcon' />
                  </a>
                </>
              }
              {this.props.linkedInLink !== '' &&
                <>
                  <a href={this.props.linkedInLink} target="__block">
                    <img src={LinkedInIcon} alt='LinkedIn' />
                  </a>
                </>
              }
              {this.props.twiterLink !== '' &&
                <>
                  <a href={this.props.twiterLink} target="__block">
                    <img src={TwitterIcon} alt='Twitter' />
                  </a>
                </>
              }
            </div>
          </div>
        </ReactModal>
      </>
    );
  }
}

export default OurTeamModal;
