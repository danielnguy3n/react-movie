import React from 'react'

export default function Nav() {
  return (
    <nav>
      <div className="row">
        <div className="nav__contents">
          <div className="logo">
            <img src="" alt="" />
            <h1 className="logo__text">OMDb</h1>
          </div>
          <ul className="nav__links">
            <li><a href="" className="nav__link">Home</a></li>
            <li><a href="" className="nav__link">Find a movie</a></li>
            <li><a href="" className="nav__link--primary">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
