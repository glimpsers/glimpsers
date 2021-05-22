/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from '../../assets/icons/login.svg';
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <a
        className="loginbtn"
        onClick={() => loginWithRedirect()}>
        <>
          <img
            className="button__icon"
            src={Login}
            alt="..." />
          log in
        </>
      </a>
    </>

  );
};

export default LoginButton;
