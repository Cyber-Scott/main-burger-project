import React, { Component } from 'react';
import {connect} from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        customer: {
            name: {
                elementType: 'Input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: '',
                rules: {
                    required: true
                },
                valid: true
            },
            street: {
                elementType: 'Input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                rules: {
                    required: true
                },
                valid: true
            },
            zipCode: {
                elementType: 'Input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIPCODE'
                },
                value: '',
                rules: {
                    required: true
                },
                valid: true
            },
            email: {
                elementType: 'Email',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                rules: {
                    required: true
                },
                valid: true
            },
            deliveryMethod: {
                elementType: 'Select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest'
            },
        },
        loading: false,
        disable: true
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        let formData = {}
        for (let orderKey in this.state.customer){
            formData[orderKey] = this.state.customer[orderKey];
        }
        
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    inputHandler = (event, val) => {
        let updatedForm = {...this.state.customer}
        let updatedElement = {...updatedForm[val]}

        updatedElement.value = event.target.value;
        updatedElement.valid = this.Validation(updatedElement.value, updatedElement.rules);
        updatedForm[val] = updatedElement;

        this.setState({customer: updatedForm}); 
    }

    Validation = (value, rules) => {
        let isValid = true;

        // if(rules && rules.required){
        //     isValid = (value !== '')
        // }      
        if(value.length <= 6){
            isValid = false
        }      

        return isValid;
    }


    render () {
        let formArray = []
        for(let key in this.state.customer){
            formArray.push({
                id: key,
                setup: {...this.state.customer[key]}
            })}
        let form = (
            <form onSubmit={this.orderHandler}>
                {formArray.map(inputElement => {
                    return(
                        <Input 
                            key={inputElement.id} 
                            type={inputElement.setup.elementType}
                            setup={inputElement.setup.elementConfig}
                            value={inputElement.setup.value}
                            valid={inputElement.setup.valid}
                            clicked={(event) => this.inputHandler(event, inputElement.id)}/>
                    )
                })}             
                <Button btnType="Success" disabled={!this.state.disable} >ORDER</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData);