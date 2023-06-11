import React from 'react'
import { Link } from 'react-router-dom'

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
            
            <li><Link to='/' className='nav__link'> Home </Link></li>
            <li><Link to='/search' className='nav__link'> Find a Movie </Link></li>
            <li><a href="" className="nav__link--primary">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
