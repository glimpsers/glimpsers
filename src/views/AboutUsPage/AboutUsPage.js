//package
import React, { Component } from 'react';
import ReactModal from 'react-modal';

//utilities
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator';

//components

//style
import { Title } from '../../assets/style/Style';
import TestImage from '../../assets/img/testImage.jpg';
import MoviesImage from '../../assets/img/movies.jpg';
import Abukhurma from '../../assets/profile/abukhurma.jpg';
import Abumatter from '../../assets/profile/abumatter.jpg';
import Ameen from '../../assets/profile/ameen.jpg';
import Jaradat from '../../assets/profile/jaradat.jpg';
import Rula from '../../assets/profile/rula.jpg';
import Tamimi from '../../assets/profile/tamimi.jpg';

export class AboutUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showModal: false,
      serviceName: '',
      serviceImage: '',
      serviceDescription: ''
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.getNewsServive = this.getNewsServive.bind(this);
    this.getMovieServive = this.getMovieServive.bind(this);
    this.getBooksServive = this.getBooksServive.bind(this);
    this.getArtServive = this.getArtServive.bind(this);
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true,
    });
  }

  handleCloseModal() {
    this.setState({
      showModal: false,
      serviceName: '',
      serviceImage: '',
      serviceDescription: ''
    });
  }

  getNewsServive = () => {
    this.setState({
      serviceName: 'News',
      serviceImage: MoviesImage,
      serviceDescription: 'AN ADVICE: FORGET ABOUT NEWS, ITS CAUSING HEADACHE'
    });
    this.handleOpenModal();
  }

  getMovieServive = () => {
    this.setState({
      serviceName: 'Movies',
      serviceImage: MoviesImage,
      serviceDescription: 'AN ADVICE: DONT WASTE A LOT OF TIME WATCHIMG MOVIES'
    });
    this.handleOpenModal();
  }

  getBooksServive = () => {
    this.setState({
      serviceName: 'Books',
      serviceImage: MoviesImage,
      serviceDescription: 'AN ADVICE: YOU READ MORE BOOKS YOU GET MORE INFORMATION'
    });
    this.handleOpenModal();
  }

  getArtServive = () => {
    this.setState({
      serviceName: 'Art',
      serviceImage: MoviesImage,
      serviceDescription: 'AN ADVICE: FOR ME ARTS IT JUST A WASTE OF TIME BECAUSE I DONT UNDERSTAND THEM'
    });
    this.handleOpenModal();
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <>
            loading...
          </>
        ) : (
          <>
            <MeatDecorator
              title={`glimpsers | About Us`}
              description={'glimpsers description About Us Page'}
            />

            <Title>About Us Page</Title>
            <img src={TestImage} alt='' />
            <h1>SERVICES</h1>
            <img onClick={this.getNewsServive} src={MoviesImage} alt='' />
            <img onClick={this.getMovieServive} src={MoviesImage} alt='' />
            <img onClick={this.getBooksServive} src={MoviesImage} alt='' />
            <img onClick={this.getArtServive} src={MoviesImage} alt='' />
            <hr />
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example"
            >
              <button onClick={this.handleCloseModal}>Close Modal</button>
              <h1>{this.state.serviceName}</h1>
              <img src={this.state.serviceImage} alt={this.state.serviceName} />
              <p>{this.state.serviceDescription}</p>
            </ReactModal>
            <hr />
            <h1>OUR TEAM</h1>
            <img src={Abukhurma} alt='Abukhurma' />
            <img src={Abumatter} alt='Abumatter' />
            <img src={Ameen} alt='Ameen' />
            <img src={Jaradat} alt='Jaradat' />
            <img src={Rula} alt='Rula' />
            <img src={Tamimi} alt='Tamimi' />
          </>
        )
        }
      </>
    );
  }
}

export default AboutUsPage;
