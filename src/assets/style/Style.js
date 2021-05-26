//package
import styled, { createGlobalStyle } from 'styled-components';
import 'normalize.css';

//utilities

//components

//style
import BG from '../img/bg.svg';

//font-title font-family: 'Oxygen', sans-serif;

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
  font-family: 'IBM Plex Sans', sans-serif;
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
  top:0;
  z-index: 99;
  user-select: none;
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
    min-width: 8rem;
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
  height: calc(89vh - var(--nav-size));
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
  width: calc(100vw - 160%);
  background-color: #F9F9F9;

  @media all and (max-width: 1100px){
    width: calc(100vw - 60%);
  }

  @media all and (max-width: 700px){
    p{
      text-align: center;
    }
    height: calc(100vh - 50%);
    width: calc(100vw - 2%);
  }
}

.grid {
  grid-template-columns:  1fr;
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
  
  margin-top: 56px;
    width: 260px;
    height: 260px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

 
 border-radius: 50%;

}

.profileDiv{
  margin: 0 auto;
  display:grid;
  place-items: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  padding-bottom: 56px;
  background: linear-gradient(#447fad, #0c161deb);
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 56px;
  margin-bottom: 56px;

  @media only screen and (max-width: 700px) {
    width: 100%;
    margin: 0;
  }

}
.intrestbtn{
  
  margin-right: 0px;
  
  :hover{
    background-color: #2D5573;
  }
}

.Modal, .OurTeamModal{
  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
  background: rgba(255, 255, 255, 0.88);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 4px;
  outline: none;
  padding: 20px;
  width: 60%;
  margin: 0 auto;
  border: 0;
  top: calc(20px + var(--nav-size));
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  z-index: 999;

  .navbar{
    display: none;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
  }
}

.OurTeamModal{
  width: 30%;

  @media only screen and (max-width: 1000px) {
    width: 50%;
    height: 84%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }


  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    transform: none;
  }
}

.Overlay, .OurTeamOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
}

.ReactModal__Body--open {
  overflow: hidden;
  z-index: 999;
}

.modalForm{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  place-items: center;
}

.newUesrAccimg{
  min-width: 40%;
  border-radius: 50%;
  border-style: solid;
  border-color: #161A1D;

  @media only screen and (max-width: 600px) {
    width: 60%;
  }
}

.modalForm form{
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  place-items: center;
}

.modalForm form label{
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.modalForm form input{
  display: none;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}

.interestLabel{
  display: inline-flex;
  align-content: center;
  align-items: center;
  margin-right: 0.25rem;
  cursor: pointer;
  user-select: none;
  .myInterest{
    margin-right: 0.25rem;
  }
}

.interestLabels{
  :hover .myInterest{
    fill: #BD2E2E;
  }
}

.modalForm form label input[type="checkbox"]:checked + .interestLabel .myInterest {
  fill: #d03333;
}


.btn {
  border: 0;
}

.btnNewAcc{
  margin-top: 2rem;
  background-color: #3e68ff;
  padding: 0.5rem;
  width: 15rem;
  border-radius: 12px;
  cursor: pointer;
  color: #F9F9F9;

  :hover{
    background-color: #2c56ea;
  }
}

.profileEmail{
  text-align: center;
}
.profileName{
  color: #f9f9f9;
  margin-bottom: 0;
}

.boxCards{
  text-align: center;
  margin: 1rem;

  h2{
    font-size: 2rem;
  }
}

.cards{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
}

.card{
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  width: 350px;
  border-radius: 10px;
  margin: 1rem;

  img{
    max-width: 100%;
  }

  .data {
    padding: 1rem;
  }
}

.btnCardGroup {
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
}

.btnCard{
  text-decoration: none;
  cursor: pointer;
  bottom: 0;
  border: 0;
  font-size: 1rem;
  border: 0;
  width: 8.8rem;
  height: 1.8rem;
  background-color: #3e68ff;
  margin: 0 auto;
  margin-bottom: -1rem;
  display: flex;
  align-content: center;
  justify-content: center;
  place-items: center;
  color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 8px;
  &&:focus{
    outline: 0;
  }
  :hover{
    background-color: #2c56ea;
  }
}

.btnFloating{
  position: fixed;
  right: 24px;
  bottom: 60px;
  transition: all 500ms ease 0s;
  z-index: 7;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  align-items: flex-end;
}

.floating__btn{
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    pointer-events: all;
    border: 0;
    cursor: pointer;
    display: grid;
    align-items: center;
    align-content: center;
    justify-content: center;
    place-items: center;
    background-color: #447FAD;

    :hover{
      background-color: transparent;
      border: 0.1875rem #2D5573 solid;
    }

    svg {
      display: block;
      border-radius: 50%;
      /* width: 100%;
      height: 100%; */
    }

    :hover svg{
      stroke: #2D5573;
    }

    :first-child {
      margin-bottom: 1rem;
    }
  
  }

.ReactModalPortal{
  z-index: 999;
}

.modalNewPost {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0;
  background: #f9f9f9;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 4px;
  outline: none;
  padding: 20px;
  width: 75%;
  height: 53%;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  z-index: 999;

  @media only screen and (min-width: 1200px) {
    width: 50%;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 60%;
  }
}

.overlayNewPost {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
}

.ReactModal__Body--open {
  overflow: hidden;
  z-index: 999;
}

.btnNewPost{
  border: none;
  cursor: pointer;
  border: 0;
  border-radius: 0;
}

.weitePost{

}

.weitePost textarea {
  resize: none;
  width: 100%;
  height: 10rem;
  border: 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  padding: 1.2rem;
  font-size: 1.3rem;
  border-radius: 6px;

  :focus{
    outline: 0;
  }
}

.NewPostProfile{
  display: flex;
  /* align-items: flex-end; */
  align-items: center;
  align-content: center;
  margin-bottom: 2rem;
}

.NewPostProfile img{
  border-radius: 50%;
  width: 60px;
  height: 60px;
}

.NewPostProfile p{
  font-size: 1.2rem;
  margin-left: 0.8rem;
  margin-top: -0.8rem;
}

.NewPostBtnG{
  display: flex;
  justify-content: flex-end;
}

.NewPostBtnGPost,
.NewPostBtnGExit{
  margin-top: 1rem;
  margin-left: 1rem;
  width: 10rem;
  height: 2rem;
  border: 0;
  border-radius: 6px;
  box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px;
  background-color: #2c56ea;
  color: #F9F9F9;
  font-size: 1.2rem;
  cursor: pointer;
  :hover{
    background-color: #2D5573;
  }
}

.NewPostBtnGExit{
  background-color: #F9F9F9;
  color: #161A1D;
  width: 5rem;
  margin-left: 0;
  :hover{
    background-color: #F9F9F9;
  }
}


.PostBtnGText{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  svg{
    margin-right: 0.50rem;
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;

  .cardPostContainer{
    max-width: 90%;
    margin: 0 auto;

    .cardPost{
      text-align: justify;
      display: flex;
      flex-direction: column;
      margin-top: 5em;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
      scroll-padding-top: 1rem;
      height: 23rem;
      position: relative;

    .dropdownOptions{
      position: absolute;
      right: 0;
      margin-right: 0.25rem;
      margin-top: 0.25rem;

        .optionsBtn{
        border: 0;
        background: transparent;
        cursor: pointer;

        svg{
          stroke: #161A1D;
        }
      }

      .dropdownOptionsContent{
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        right: 29px;
        top: 2px;
        justify-content: center;
        flex-direction: column;
        border-radius: 5px;

        .OptionContentBtnDelete, .OptionContentBtnEdit {
          color: black;
          padding: 12px 16px;
          display: block;
          border: 0;
          cursor: pointer;
          background-color: transparent;

          ::focus{
            outline: 0;
          }
        }

        ::before{
          content: "";
          display: block;
          width: 0; 
          height: 0; 
          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
          border-left: 12px solid #f9f9f9;
          position: absolute;
          top: -2px;
          right: -12px;
        }

        .OptionContentBtnText{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          align-content: center;
          svg{
            margin-right: 0.25rem;
          }
        }

        .OptionContentBtnDelete{
          :hover{
            .OptionContentBtnText svg{
              fill: #d03333;
            }
          }
        }

        .OptionContentBtnEdit{
          :hover{
            .OptionContentBtnText svg{
              fill: #2c56ea;
            }
          }
        }
      }

      :hover .dropdownOptionsContent {
        display: flex;
      }
    }
      

      .data{
        padding: 1rem;

        img{
          border-radius: 50%;
          width: 90px;
          height: 90px;
        }

        p{
          font-size: 1.8rem;
          margin-left: 0.8rem;
        }
        .postDescription{
          font-size: 1.2rem;
          margin: 1rem;
          height: 10rem;
          overflow-y: auto;
        }

        .PostBtnG{
          display: flex;
          justify-content: flex-start;

          .PostBtnGLike,
          .PostBtnGComment{
            width: 8rem;
            margin-right: 1rem;
            border: 0;
            height: 2rem;
            cursor: pointer;
          }
          .PostBtnGComment{
            margin-right: 0;
          }
        }
      }

      width: 80vw;

      @media only screen and (min-width: 1200px) {
        width: 50vw;
      }

      @media only screen and (max-width: 700px) {
        width: 80%;
        margin-right: 10rem;
        margin-left: 1rem;
      }

    }
  }

}

.postContainer{
  margin-bottom: 3rem;
}

.commentContainer{
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  box-shadow: rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 16px 0px;
  padding: 2rem;
  border-radius: 10px;
}

.deleteCommentBox{
  position: relative;

  .deleteCommentBtn{
    position: absolute;
    right: 15px;
    margin-right: 0.25rem;
    margin-top: 0.25rem;
    bottom: 30px;
    border: 0;
    background: transparent;
    cursor: pointer;

    .deleteCommentIcon{
      display: flex;
      align-items: center;
      align-content: center;
    }

    :hover .deleteCommentIcon svg{
      stroke: #BD2E2E;
    }
  }
}

.banner{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30rem;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-content: center;
  justify-content: center;
  /* margin-top: calc(var(--nav-size)); */
  margin-top: 0;

  @media only screen and (max-width: 700px) {
    /* margin-top: calc(var(--nav-size) + 0.625rem); */
  }

  .bannerImgBox {
    grid-area: 1/1/2/2;
  }

  .bannerOverlay {
    grid-area: 1/1/2/2;
  }

  .bannerTextBox {
    grid-area: 1/1/2/2;
  }
}

.bannerImg {
  /* display: grid; */
  display: block;
  min-width: 21.875rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bannerOverlay {
  display: grid;
  max-width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.bannerTextBox {
  display: grid;
  align-items: center;
  justify-self: center;
  margin-left: 15px;
  margin-right: 15px;
}

.bannerTitle {
  font-size: 4rem;
  color: #f9f9f9;
  font-family: 'Oxygen', sans-serif;
}

.whiteSpace {
  width: 100%;
  height: 5.45rem;
}

.cardsServices, .cardsOurTeams{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
}

.cardService, .cardOurTeam{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 1rem;
  position: relative;

  img{
    width: 100%;
    height:  100%;
    border-radius: 50%;
    cursor: pointer;
  }

  .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  opacity: 0;
  transition: .5s ease;
  background-color: #2D5573;

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    color: #F9F9F9;
    font-size: 2.5rem;
    font-weight: bold;
    position: absolute;
    user-select: none;
    cursor: pointer;
    opacity: 1;
    }
  }

  :hover .overlay {
    opacity: 0.8;
  }
}

  .cardOurTeam{
    width: 350px;
    height: 350px;
  }

.serviceTitle, .ourTeamTitle{
  font-size: 2.5rem;
  text-align: center;
  font-family: 'Oxygen', sans-serif;
}

.btnGExit{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;

  h2{
    margin-top: -0.50rem;
    font-size: 2rem;
    font-family: 'Oxygen';
  }
}

.btnExitInfo{
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  user-select: none;
  pointer-events: all;
  border: 0;
  cursor: pointer;
  margin-bottom: 1rem;
  background-color: #161A1D;
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;
  place-items: center;

  :hover{
    background-color: #BD2E2E;
  }

  svg{
    display: block;
    border-radius: 50%;
    width: 80%;
    height: 80%;
  }
}

.servicesModalInfo, .OurTeamModalInfo{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  img{
    width: 50%;
  }
  
  .whiteSpace {
    height: 2.45rem;
  }

  p{
    text-align: center;
    font-weight: bold;
  }

}

.OurTeamModalInfo{
  .socialMedia{
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img{
      width: 30px;
      margin: 0.5rem;
      cursor: pointer;
    }
  }
}

.settingBtn{
  font-size: 1.5rem;
  border: 0;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  cursor: pointer;
  background-color: #447FAD;
  color: #f9f9f9;

  .settingBtnText{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;

    svg{
      margin-right: 0.25rem;
    }
  }
}

.loader{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.footer{
  width: 100%;
  background: #2D5573;
  --footer-height: 80px;
  height: var(--footer-height);
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #f9f9f9;
  font-size: 1.2rem;

  .linkfooter{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 50%;

    a{
      color: #f9f9f9;
      border-bottom: #f9f9f9 1px solid;
    }
  }
}

`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-family: 'Oxygen', sans-serif;
`;
