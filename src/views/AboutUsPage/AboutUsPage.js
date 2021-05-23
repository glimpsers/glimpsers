//package
import React, { Component } from 'react';

//utilities
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator';

//components

//style
import { Title } from '../../assets/style/Style';

export class AboutUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
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
          </>)

        }
      </>
    );
  }
}

export default AboutUsPage;
