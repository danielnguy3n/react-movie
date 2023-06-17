import React from "react";
import { Link } from "react-router-dom";
import IconMovieSearchOutline from "./ui/IconMovieSearchOutline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <nav>
      <div className="row">
        <div className="nav__contents">
          <div className="logo">
            <IconMovieSearchOutline className="logo__img" />
            <h1 className="logo__text"><Link to='/'>OMDb</Link></h1>
          </div>
          <ul className="nav__links">
            <li>
              <Link to="/" className="nav__link">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to="/search" className="nav__link">
                {" "}
                Find a Movie{" "}
              </Link>
            </li>
            <li>
              <p className="nav__link--primary">Contact</p>
            </li>
          </ul>

          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>

          <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
              <FontAwesomeIcon icon="times" />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <Link to="/" className="menu__link">
                  Home
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/search" className="menu__link">
                  Find a Movie
                </Link>
              </li>
              <li className="menu__list">
                <p className="menu__link--contact">Contact</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}
