//package
import styled, { createGlobalStyle } from 'styled-components';
import 'normalize.css';

//utilities

//components

//style
import BG from '../img/bg.svg';

export const GlobalStyle = createGlobalStyle`
:root{
  --bg: #242526;
  --bg-navbar: #F9F9F9;
  --text-color: #dadce1;
  --nav-size: 60px;
  --border-radius: 8px;
  --speed: 500ms;
}

html {
  font-size: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  line-height: 1.3;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

/* Top Navigation Bar */

/* <nav> */
.navbar {
  height: var(--nav-size);
  background-color: var(--bg-navbar);
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  box-shadow: rgb(0 0 0 / 75%) 0px 14px 14px -14px;
}

.navbar .logoLink {
  max-width: 100%;
  height: 70%;
}

.navbar .logo {
  max-width: 100%;
  height: 100%;
}

/* <ul> */
.navbar-nav {
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}

/* <li> */
.nav-item {
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* Icon Button */
.icon-button {
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: #447FAD;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
}

.icon-button:hover {
  filter: brightness(1.2);
}

.icon-button svg {
  fill: var(--text-color);
  width: 20px;
  height: 20px;
}


.loginbtn{ 
  text-decoration: none;
  border: none;
  font-family: inherit;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: start;
  font-size: 1.5rem;
  background-color: #447FAD;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);

  &:not(.icon-button) {
    padding: 0.25em 0.75em;
    min-width: 7.89rem;
    /* min-height: 1rem; */
  }

  text-align: center;
  line-height: 1.1;
  transition: 220ms all ease-in-out;

  &:hover,
  &:active {
    background-color: scale-color(#3e68ff, $lightness: -20%);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px scale-color(#3e68ff, $lightness: -40%);
  }

  margin-right: 75px;
  margin-top: 0.7rem;
}

.button__icon {
  width: 0.9em;
  height: 0.9em;
  fill: #fff;
  margin-right: 0.5em;

  &--end {
    margin-right: 0;
    margin-left: 0.5em;
  }
}

/* Dropdown Menu */

.dropdown {
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background-color: var(--text-color);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;
  transition: height var(--speed) ease;
  box-shadow: rgb(0 0 0 / 75%) 0px 14px 14px -14px;
}

.menu-item {
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;
  color: var(--bg);
}

.menu-item .icon-button {
  margin-right: 0.5rem;
}


.menu-item .icon-button:hover {
  filter: none;
}

.menu-item:hover {
  background-color: #525357;
  color: #f9f9f9;
}

#root > nav > ul > li:nth-child(2) > div > a:nth-child(4):hover > span{
  background-color: transparent;
  box-shadow: 0;
}

.dropdown > .menu-item:nth-child(4):hover{
  background-color: #BD2E2E;
}

#main {
  display: table;
  width: 100%;
  height: 100vh;
  text-align: center;
}

.fof {
  transition: all 0.6s;
  display: table-cell;
  vertical-align: middle;
}

.fof h1 {
  font-family: 'Lato', sans-serif;
  color: #888;
  font-size: 50px;
  display: inline-block;
  padding-right: 12px;
  animation: type .5s alternate infinite;
}

@keyframes type {
  from {
    box-shadow: inset -3px 0px 0px #888;
  }

  to {
    box-shadow: inset -3px 0px 0px transparent;
  }
}

.fof a {
  text-decoration: none;
  color: rgb(32, 23, 161);
}

.profilePic{
  border-radius: 50%;
  min-width: 150%;
}

.landingPage{
  background:linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.45)
    ), url(${BG});
  width: 100vw;
  height: calc(100vh - var(--nav-size));
  background-size:cover;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  display: grid;
  justify-content: center;
    justify-items: center;
    align-items: center;
}

.landingPage .container {
  height: calc(100vh - 60%);
  width: calc(100vw - 60%);
  background-color: #F9F9F9;

  @media all and (max-width: 700px){
    p{
      text-align: center;
    }
    height: calc(100vh - 50%);
    width: calc(100vw - 2%);
  }
}

.grid {
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: center;

  @media all and (max-width: 700px){
    grid-template-columns: 1fr;
  }

  .loginbtn{
    margin: 0;
    width: 15rem;
    height: 3rem;
    margin-top: 1.5rem;
  }
}

.profileImg{
  
  width: 300px;
 border-radius: 50%;

}

.profileDiv{
  
  text-align-last: center;

}
#intrestbtn{
  
  margin-right: 0px;

}

`;

export const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
`;
