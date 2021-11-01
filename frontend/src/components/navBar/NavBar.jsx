import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import './NavBar.css'

function NavBar(props) {
    return (
        <div class="navBar">
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">devWeb</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">News Feed</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Friends</a>
                            </li>
                        </ul>
                        <SearchBar />
                    </div>
        </nav>     
    </div>
    );
}
export default NavBar;