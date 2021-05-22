import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Logout from '../../assets/icons/logout.svg';
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <>
      <a
        href
        className="menu-item"
        onClick={() => logout({ returnTo: window.location.origin })}>
        <span className="icon-button">
          <img
            src={Logout}
            alt="..." />
        </span>
        Log Out
      </a>
    </>
  );
};

export default LogoutButton;
