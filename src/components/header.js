import React from 'react'


const Header = () => {
    return(
        <header className='header'>
            <div className='logo-container'>
                STL Crime
            </div>
            <ul className='nav-items'>
                <a className='navItem' href='/'>Maps</a>
                <a className='navItem' href='/'>Data</a>
                <a className='navItem' href='/'>About</a>
            </ul>
        </header>
    )
}

export default Header;