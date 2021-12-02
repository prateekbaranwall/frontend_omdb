import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <div>
            <nav className="bottom">
                <div className="searchBar">
                   <input type="text" placeholder="Search Movie" className="search" name="movie" />
                </div>
            </nav>
        </div>
    )
}
