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
import GitHubIcon from '../../assets/icons/github.svg';
import LinkedIn from '../../assets/icons/linked.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Twitter from '../../assets/icons/twitter.svg';

export class AboutUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showModal: false,
      showMemberModal: false,
      serviceName: '',
      serviceImage: '',
      serviceDescription: '',
      memberName: '',
      memberImage: '',
      memberMassege: '',
      gitHubLink: '',
      linkedInLink: '',
      faceBookLink: '',
      twiterLink: ''
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.getNewsServive = this.getNewsServive.bind(this);
    this.getMovieServive = this.getMovieServive.bind(this);
    this.getBooksServive = this.getBooksServive.bind(this);
    this.getArtServive = this.getArtServive.bind(this);
    // team information
    this.handleOpenModalMember = this.handleOpenModalMember.bind(this);
    this.handleCloseModalMember = this.handleCloseModalMember.bind(this);
    this.getAbukhurmaData = this.getAbukhurmaData.bind(this);
    this.getAbumatterData = this.getAbumatterData.bind(this);
    this.getAmmenData = this.getAmmenData.bind(this);
    this.getJaradatData = this.getJaradatData.bind(this);
    this.getRulaData = this.getRulaData.bind(this);
    this.getTamimiData = this.getTamimiData.bind(this);
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
      serviceDescription: 'Check out the latest news around the world and catch up with all the breaking news.'
    });
    this.handleOpenModal();
  }

  getMovieServive = () => {
    this.setState({
      serviceName: 'Movies',
      serviceImage: MoviesImage,
      serviceDescription: 'Bring all of your friends and get ready for \'movie night\' that you will never forget. '
    });
    this.handleOpenModal();
  }

  getBooksServive = () => {
    this.setState({
      serviceName: 'Books',
      serviceImage: MoviesImage,
      serviceDescription: 'Discove new adventure and soar away with your imagination and land in new unfamiliar life roles.'
    });
    this.handleOpenModal();
  }

  getArtServive = () => {
    this.setState({
      serviceName: 'Art',
      serviceImage: MoviesImage,
      serviceDescription: 'Indulge your senses with extraordinary taste and style of in our special collection of artwork.'
    });
    this.handleOpenModal();
  }
  // taem data functions
  handleOpenModalMember = () => {
    this.setState({
      showMemberModal: true,
    });
  }

  handleCloseModalMember = () => {
    this.setState({
      showMemberModal: false,
      memberName: '',
      memberImage: '',
      memberMassege: ''
    });
  }

  getAbukhurmaData = () => {
    this.setState({
      memberName: 'Abdallah Abu Khurma',
      memberImage: Abukhurma,
      memberMassege: 'Hey ! my name is Abdallah Abu Khurma and I studied civil engineering in Near East University in Cyprus and Im a full stack developer.',
      gitHubLink: 'https://github.com/AbdallahAbuKhurma',
      linkedInLink: 'https://www.linkedin.com/in/abdallah-abu-khurma-460192209/',
      faceBookLink: 'https://web.facebook.com/abdulla.abukharma.3',
      twiterLink: ''
    });
    this.handleOpenModalMember();
  }

  getAbumatterData = () => {
    this.setState({
      memberName: 'Mohammad Abu Matter',
      memberImage: Abumatter,
      memberMassege: 'My name is Mohammad Abu Mattar, Im a 👨‍💻 Software Engineer. I graduated in 2018 from Al-Isra university, I 🔧 build stuff for 🌐 the web.',
      gitHubLink: 'https://github.com/MKAbuMattar',
      linkedInLink: '',
      faceBookLink: '',
      twiterLink: ''
    });
    this.handleOpenModalMember();
  }

  getAmmenData = () => {
    this.setState({
      memberName: 'Ameen Saleh',
      memberImage: Ameen,
      memberMassege: 'Extremely motivated to constantly develop my skills and grow professionally. I am confident in my ability to come up with interesting ideas for unforgettable marketing campaigns',
      gitHubLink: 'https://github.com/AmeenBassamSaleh',
      linkedInLink: 'https://www.linkedin.com/in/ameenbetawi/',
      faceBookLink: 'https://www.facebook.com/Ameenbetawi',
      twiterLink: 'https://twitter.com/ameenbassam111?fbclid=IwAR1CLTsq4KEKdkRohZ55T0trqCfiBvy1baoTW7K0sJtajPkNiSYYGi95P90'
    });
    this.handleOpenModalMember();
  }

  getJaradatData = () => {
    this.setState({
      memberName: 'Mohammad Jaradat',
      memberImage: Jaradat,
      memberMassege: 'My name is Mohammad Jaradat. I have a bachelors degree in chemistry from Yarmouk University . I am  interested in this course because I want to develop my skills.',
      gitHubLink: 'https://github.com/morjaradat/react-app',
      linkedInLink: 'https://www.linkedin.com/in/mohammad-jaradat-977305209/',
      faceBookLink: 'https://web.facebook.com/mjradat3/',
      twiterLink: ''
    });
    this.handleOpenModalMember();
  }

  getRulaData = () => {
    this.setState({
      memberName: 'Rula ALqasem',
      memberImage: Rula,
      memberMassege: 'Im a biomedical engineer graduate in 2020 from JUST and I am looking forward to improving my ability in programming.',
      gitHubLink: 'https://github.com/RulaAlqasem',
      linkedInLink: '',
      faceBookLink: '',
      twiterLink: ''
    });
    this.handleOpenModalMember();
  }

  getTamimiData = () => {
    this.setState({
      memberName: 'Mohammad ALtamimi',
      memberImage: Tamimi,
      memberMassege: 'Hey ! My name is Mohammad Altamimi, I am a mechanical engineer and my goal is to kick-start a career path in software development.',
      gitHubLink: 'https://github.com/MohammadAltamimi98',
      linkedInLink: 'https://www.linkedin.com/in/mohammad-mech-eng',
      faceBookLink: 'https://web.facebook.com/m98altamimi',
      twiterLink: 'https://twitter.com/MuhammadT98'
    });
    this.handleOpenModalMember();
  }

  link = (e) => {
    console.log(e);
    window.open(e);
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
            <img onClick={this.getAbukhurmaData} src={Abukhurma} alt='Abukhurma' />
            <img onClick={this.getAbumatterData} src={Abumatter} alt='Abumatter' />
            <img onClick={this.getAmmenData} src={Ameen} alt='Ameen' />
            <img onClick={this.getJaradatData} src={Jaradat} alt='Jaradat' />
            <img onClick={this.getRulaData} src={Rula} alt='Rula' />
            <img onClick={this.getTamimiData} src={Tamimi} alt='Tamimi' />
            <hr />
            <ReactModal
              isOpen={this.state.showMemberModal}
              contentLabel="Minimal Modal Example"
            >
              <button onClick={this.handleCloseModalMember}>Close Modal</button>
              <h1>{this.state.memberName}</h1>
              <img src={this.state.memberImage} alt={this.state.memberImage} />
              <p>{this.state.memberMassege}</p>
              <img onClick={() => this.link(this.state.faceBookLink)} src={Facebook} alt='Facebook' />
              <img onClick={() => this.link(this.state.gitHubLink)} src={GitHubIcon} alt='GitHubIcon' />
              <img onClick={() => this.link(this.state.linkedInLink)} src={LinkedIn} alt='LinkedIn' />
              {this.state.twiterLink !== '' &&
                <img onClick={() => this.link(this.state.twiterLink)} src={Twitter} alt='Twitter' />
              }
            </ReactModal>
          </>
        )
        }
      </>
    );
  }
}

export default AboutUsPage;
