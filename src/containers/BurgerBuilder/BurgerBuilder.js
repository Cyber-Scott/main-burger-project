import React, { Component, Fragment } from 'react';
import axios from '../../axios-orders';
import {connect} from 'react-redux';

import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actionTypes from '../../store/actions';

// import errorHandler from '../errorHandler/errorHandler';


// const INGREDIENT_PRICES = {
//     salad: 130,
//     meat: 200,
//     bacon: 100,
//     cheese: 260
// }

class BurgerBuilder extends Component {
    state = {
        // ingredients:null,
        // totalPrice: 100,
        // purchasable: false,
        purchasing: false
    }

    componentDidMount() {
        axios.get('https://react-my-burger-66acb-default-rtdb.firebaseio.com/ingredients.json')
        .then(res => {
        this.setState({ingredients: res.data})
        })
    }


    // updatePurchaseState (ingredients) {
    //     const sum = Object.keys(ingredients)
    //     .map((igkey) => {
    //         return ingredients[igkey];
    //     })
    //     .reduce((sum, el) => {
    //         return sum + el
    //     }, 0);

    //     this.setState({purchasable: sum > 0})        
    // }

    // addIngredients = (type) => {
    //     let ing = this.state.ingredients[type]
    //     ing = ing + 1

    //     let ingUpdate = {...this.state.ingredients}
    //     ingUpdate[type] = ing

    //     const ingPrice = INGREDIENT_PRICES[type]
    //     let updatedPrice = this.state.totalPrice
    //     updatedPrice = this.state.totalPrice + ingPrice 

    //     this.setState({ingredients: ingUpdate, totalPrice: updatedPrice});

    //     this.updatePurchaseState(ingUpdate)
    // }


    // removeIngredient = (type) => {
    //     let ing = this.state.ingredients[type]
    //     ing = ing - 1

    //     let ingUpdate = {...this.state.ingredients}
    //     ingUpdate[type] = ing

    //     const ingPrice = INGREDIENT_PRICES[type]
    //     let updatedPrice = this.state.totalPrice
    //     updatedPrice = this.state.totalPrice - ingPrice 

    //     this.setState({ingredients: ingUpdate, totalPrice: updatedPrice});

    //     this.updatePurchaseState(ingUpdate)
    // }


    purchaseHandler = () => {
        this.setState({purchasing: true})
    }
    NoPurchaseHandler = () => {
        this.setState({purchasing: false})
    }


    continuePurchase = () =>{
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Emmanuel Onyia',
        //         address: {
        //             street: 'NO. 12 Onyia street',
        //             zipCode: '042123',
        //             country: 'Biafra'
        //         },
        //         email: 'emmy@gmail.com',
        //     },
        //     deliveryMode: 'Fast'
        // };
        // axios.post('/orders.json', order)
        // .then(res => {
        //     // console.log(res);
        // })
        // .catch(err => 
        //     {console.log(err);
        // })

        // let queryParams = [];
        // for(let i in this.state.ingredients){
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        // }

        // let queryString = queryParams.join('&')

        this.props.history.push({pathname: '/checkout' })  
    }

    render(){
        let burger = <Spinner/>
        if(this.props.ings !== null){
            burger = <Fragment>
                <Modal 
                    ingredients={this.props.ings}
                    show={this.state.purchasing}
                    closeModal={this.NoPurchaseHandler}
                    price={this.props.price}
                    continue={this.continuePurchase}
                />
                <Burger ingredients={this.props.ings}/>
                <BurgerControls 
                    ingAdded={this.props.ingredientAdd}
                    ingRemoved={this.props.ingredientRemove}
                    price={this.props.price}
                    purchasable={this.props.purchasable}
                    purchase={this.purchaseHandler}/>
            </Fragment>
        }
        
        return(
            <Fragment>
                {burger}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        ings: state.ingredients,
        price: state.totalPrice,
        purchasable: state.disable
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        ingredientAdd: (ingName) => dispatch({type: actionTypes.addIngredient, ingredientName: ingName}),
        ingredientRemove: (ingName) => dispatch({type: actionTypes.removeIngredient, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);