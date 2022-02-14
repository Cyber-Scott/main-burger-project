import React, {Component,Fragment} from 'react';

import Logo from '../../Logo/Logo'
import NavLink from '../Nabar/navLink'
import classes from './Sidenav.css'


class Sidenav extends Component {

    render() {

        let navClass = [classes.SideDrawer, classes.Close];
        if(this.props.showSidenav){
            navClass = [classes.SideDrawer, classes.Open];
        }

        return (
            <Fragment>
            {this.props.showSidenav ? <div className={classes.Backdrop} onClick={this.props.showNavHandler}></div> : null} 
    
            <div className={navClass.join(' ')}>
            <div style={{height: '11%'}}>
                <Logo />
            </div>
                <nav >
                    <NavLink/>
                </nav>
            </div>
            </Fragment>             
        );
    }
}

export default Sidenav;