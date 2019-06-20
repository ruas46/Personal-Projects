import React from 'react'
import './Nav.css'
import NavIcon from './NavIcon'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavIcon href="/" icon="home" label="Home" />
            <NavIcon href="/users" icon="users" label="Users" />
        </nav>
    </aside>