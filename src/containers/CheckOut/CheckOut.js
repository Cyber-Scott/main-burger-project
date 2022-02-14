import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import ContactData from './ContactData/ContactData'


class CheckOut extends Component {

    //  componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search)
    //     let ingredients = {}
    //     for(let params of query.entries()){
    //         ingredients[params[0]] = +params[1];
    //         console.log(params);
    //     }
    //     this.setState({ingredients: ingredients});
    // }

     cancelHandler = () => {
        this.props.history.push('/')
     }

     continueHandler = () => {
        this.props.history.replace('/checkout/form')
    }


    render() { 
        return ( 
            <div>
                <CheckOutSummary 
                ingredients={this.props.ingredients}
                cancelHandler={this.cancelHandler}
                continueHandler={this.continueHandler}/>
                {/* <Route path='/ckeckout/form' component={ContactData} /> */}
            
                <Route 
                    path={this.props.match.path + '/form'}
                    render={(props) => (<ContactData ingredients={this.props.ingredients} {...props}/>)} />
            </div>
         );
    }
}

const mapToStateProps = state => {
    return {
        ingredients: state.ingredients
    }
}
 
export default connect(mapToStateProps)(CheckOut);