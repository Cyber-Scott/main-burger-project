import React from 'react';
import classes from './navLink.css';

import {NavLink} from 'react-router-dom';


const NavigationLink = props => {
    return(
        <ul className={classes.navLink}>
            <li>
              <NavLink to={'/'} activeClassName={classes.active} exact>Burger Builder</NavLink>
            </li>

            <li>
              <NavLink to={'/orders'} activeClassName={classes.active} exact >Orders</NavLink>
            </li>
        </ul>        
    )
}

export default NavigationLink;