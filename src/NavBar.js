import React, { Component } from 'react';
import './index.css';

class NavBar extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;