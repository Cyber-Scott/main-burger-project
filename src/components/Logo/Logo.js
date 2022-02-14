import React from 'react';
import classes from './Logo.css'

import burgerLogo from '../../assets/image/burger-logo.png'


const Logo = props => {
    return(
        <div className={classes.Logo}>
            <img src={burgerLogo} alt='burger-logo'></img>
        </div>
    )
}

export default Logo;