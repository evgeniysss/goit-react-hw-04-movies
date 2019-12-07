import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import routes from '../../routes';

const Navigation = () => {
  return (
    <ul className={s.navigationList}>
      <li>
        <NavLink activeClassName={s.activeLink} to={routes.HOME}>
          HOME PAGE
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={s.activeLink} to={routes.MOVIES_PAGE}>
          MOVIES
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
