import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    <div className='navbar'>  
     
        <img className='navbar__img' src = {logo}  width= "80px" height="50px"/> 
          <p className='navbar__img navbar__img--modifier'>Online Library</p>
      

        <ul className='navbar__ul'>
            <li className='nabvar__li'> Inicio      </li>
            <li className='nabvar__li'> Alquiler    </li>
            <li className='nabvar__li'> Categorias  </li>
            <li className='nabvar__li'> Contacto    </li>
            <li className='nabvar__li nabvar__li--modifer'> Ingresar       </li>
        </ul> 
    </div>
  )
}
