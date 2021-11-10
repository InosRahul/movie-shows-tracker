import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from 'context';

export const Header = () => {
  const { watched } = useContext(GlobalContext);
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
            {watched?.length ? (
              <li>
                <Link to="/watchtime">Watch Time</Link>
              </li>
            ) : (
              <></>
            )}

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
