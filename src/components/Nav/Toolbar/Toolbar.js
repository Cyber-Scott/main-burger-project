import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationLink from '../Nabar/navLink';


const Toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
            <div onClick={props.showNavHandler} className={classes.DrawerToggle}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Logo/>
            <nav className={classes.PConly}>
                <NavigationLink/>
            </nav>
        </header>
    )
}

export default Toolbar;