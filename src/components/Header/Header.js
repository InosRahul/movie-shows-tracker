import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Home</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/watchlist">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/watchtime">Watch Time</Link>
            </li>

            <li>
              <Link to="/discover" className="btn btn-main">
                Discover
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
