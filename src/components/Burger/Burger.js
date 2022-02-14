import React, { Component } from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

import classes from './Burger.css';

class Burger extends Component {
    render() { 
        let transformedIngredients = Object.keys(this.props.ingredients)
        .map( (igkey) => {
            return [...Array(this.props.ingredients[igkey])].map((_, i) => {
                return <BurgerIngredients key={igkey + i} type={igkey}/>
            })
        } )

        const g = this.props.ingredients
        if (g.salad === 0 && g.cheese === 0 && g.meat === 0 && g.bacon === 0){
            transformedIngredients = <p>Please add ingredients</p>
        }
        return ( 
            <div className={classes.Burger}>
                <BurgerIngredients type='bread-top'/>
                {transformedIngredients}
                <BurgerIngredients type='bread-bottom'/>
            </div>
         );
    }
}
 
export default Burger;