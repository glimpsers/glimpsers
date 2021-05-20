import styled, { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
:root{
  
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
`;

export const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  box-shadow: rgb(0 0 0 / 75%) 0px 14px 14px -14px;
  @media all and (max-width: 990px){
    flex-direction: column;
  }
  @media all and (max-width: 600px){
  }
`;

export const Logo = styled.h1`
  margin: 0 0 0 .45em;
  && a{
    color: rgb(255, 255, 255);
    text-decoration: none;
    letter-spacing: .45rem;
  }
  @media all and (max-width: 990px){
    margin: 0;
  }
  @media all and (max-width: 600px){
    margin: .25em 0;
    align-self: left;
  }
`;

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  && a {
    display: block;
    text-decoration: none;
    padding: 1em;
    cursor: pointer;
    :hover{
      color: rgba(190,50,60,.9);
    }
  }
  @media all and (max-width: 990px){
    width: 100%;
    justify-content: space-around;
  }
  @media all and (max-width: 600px){
    flex-direction: column;
    display: none;
    && a {
      text-align: center; 
      padding: 10px;
      border-top: 1px solid rgba(255,255,255,0.3); 
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }
    && li:last-of-type a{
      border-bottom: none;
    }
  }
`;

