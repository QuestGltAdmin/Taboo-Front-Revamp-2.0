import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Headernew = () => {
  //============= open sidebar on hover ===================//
  const [open, setOpen] = useState(false);
  const showsidemenu = () => {
    setOpen(true)
    document
      .getElementById("side_menuID")
      .classList.add("show_side_bar_with_animation");
  };
  const closesidemenu = () => {
    setOpen(false)
    document
      .getElementById("side_menuID")
      .classList.remove("show_side_bar_with_animation");
  };
  //============= open sidebar on hover ===================//

  // =========on window scroll show header ==============//
  const controlNavbar = () => {
    if (window.scrollY > 20) {
      document.getElementById("headerId").classList.add("scroll-show");

    }
    if (window.scrollY == 0) {
      document.getElementById("headerId").classList.remove("scroll-show");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  // =========on window scroll show header end ==============//

  return (
    <>
      <div className='header-first-strip'>THE <b>PLAYBOY</b> OF <b>CRYPTO</b></div>
      <header className="header-new" id="headerId">

        <Link
          to="/"
          onClick={() => {
            localStorage.removeItem("date_now");
          }}
        >
          <h1><img alt="" src="user_assets/images/home-new/Taboo-logoWhite.svg" className="logo" /></h1>
        </Link>
        <div className="play-btn-row">
          <Link to="/" className="button-blue-taboo">
            <span>My Taboo</span>
          </Link>

          <a onMouseOver={() => {
            showsidemenu()
          }}  className="menu-btn"><img alt="" src="user_assets/images/home-new/menu-white.png" /></a>
        </div>
      </header>

      <div className="side-bar" id='side_menuID'>
        <div className='close_class'>
          <button onMouseOver={() => {
            closesidemenu()
          }}  className='close_button'><img alt="" src="user_assets/images/home-new/close.png" /></button>
        </div>
        <div>
          <div><img className="header-black-logo" alt="" src="user_assets/images/home-new/logo-black.svg" /></div>
          <div><img className='menu-banner' alt="" src="user_assets/images/home-new/about-us.jpg" /></div>
        </div>
        <div className='main_menu'>
          <ul className='m-0 p-0'>
            <li>
              <Link to="/models" >

                <h3>
                  MODELS
                </h3>
                <span className='arrow_side'><img alt="" src="user_assets/images/home-new/Lesserthan.svg" /></span>
              </Link>
            </li>
            <li >
              <Link to="" >

                <h3>
                  SECRETS
                </h3>
                <span className='arrow_side'><img alt="" src="user_assets/images/home-new/Lesserthan.svg" /></span>
              </Link>
            </li>
            <li >
              <Link to="" >

                <h3>
                  PRIVATE ROOMS
                </h3>
                <span className='arrow_side'><img alt="" src="user_assets/images/home-new/Lesserthan.svg" /></span>
              </Link>
            </li>

            <li>
              <a href="https://opensea.io/collection/taboopunks" target="_blank">

                <h3>
                  TABOO PUNKS
                </h3>
                <span className='arrow_side'><img alt="" src="user_assets/images/home-new/Lesserthan.svg" /></span>
              </a>
            </li>

            <li >
              <Link to="https://tabootoken.medium.com/" >

                <h3>
                  PRESS
                </h3>
                <span className='arrow_side'><img alt="" src="user_assets/images/home-new/Lesserthan.svg" /></span>
              </Link>
            </li>
            <li>
              <a href="" target="_blank">

                <h3>
                  BUY / STAKE TABOO
                </h3>
                <span className='arrow_side'><img alt="" src="user_assets/images/home-new/Lesserthan.svg" /></span>
              </a>
            </li>
            <li>
              <a href="" target="_blank">

                <h3>
                  BECOME A MODEL
                </h3>
                <span className='arrow_side'><img alt="" src="user_assets/images/home-new/Lesserthan.svg" /></span>
              </a>
            </li>






          </ul>
        </div>
      </div>
    </>
  )
}
