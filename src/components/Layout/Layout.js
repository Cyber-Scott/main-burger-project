import React, {Fragment, Component} from 'react';
import classes from './Layout.css';
import Toolbar from '../Nav/Toolbar/Toolbar'
import Sidenav from '../Nav/Sidenav/Sidenav';


class Layout extends Component {

    state={
        showSidenav: false
    }

    showNavHandler = () => {
        this.setState(() => {
            return {showSidenav: !this.state.showSidenav}
        })
    }

    render() {
        return (
            <Fragment>
                <Toolbar showNavHandler={this.showNavHandler}/>
                <Sidenav 
                    showNavHandler={this.showNavHandler} 
                    showSidenav={this.state.showSidenav}/>
                <main className={classes.content} >
                    {this.props.children}
                </main>
            </Fragment>         
        );
    }
}

export default Layout;
