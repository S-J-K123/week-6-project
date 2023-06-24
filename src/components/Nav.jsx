import React from 'react';

const Nav = () => {
    return (
        <div>
                     <nav>
            <a href="/">
              <div className="logo-img">
              <FontAwesomeIcon className="icon" icon={faClapperboard} />
                <h2 className="logo">movies</h2>
              </div>
            </a>
                   <ul>
                    <li className="lists"><a href="/"><span className="org-li">Home</span> </a></li>
                    <li className="lists"><a href="browse">Browse Movies</a></li>
                    <li className="lists"><a href="favourites">Favourites</a></li>
                   </ul>
                </nav>
        </div>
    );
}

export default Nav;
