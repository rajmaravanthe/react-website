import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h2>
        <NavLink to='/' activeClassName={classes.active}>
          <img
            className={classes.homeImage}
            src='https://africa.worldfis.com/wp-content/uploads/2021/12/tradepass-red-logo.png'
          />
        </NavLink>
      </h2>
      <nav>
        <ul>
          <li>
            <NavLink to='/home' activeClassName={classes.active}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to='/upComingEevents' activeClassName={classes.active}>
              UPCOMING EVENTS
            </NavLink>
          </li>
          <li>
            <NavLink to='/speakers' activeClassName={classes.active}>
              SPEAKERS
            </NavLink>
          </li>
          <li>
            <NavLink to='/sponsors' activeClassName={classes.active}>
              SPONSORS
            </NavLink>
          </li>
          <li>
            <NavLink to='/gallery' activeClassName={classes.active}>
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink to='/contactUs' activeClassName={classes.active}>
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
