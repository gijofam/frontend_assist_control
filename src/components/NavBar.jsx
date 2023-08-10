import React from 'react'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-sm bg-primary navbar-dark'>
      <button className='navbar-toggler' type='button' data-bs-toggle= 'collapse' data-bs-target='#menu'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='menu'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a className='nav-link' href="#">Registro</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href="#">Reporte</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href="#">Soporte</a>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default NavBar