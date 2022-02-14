import React, {Component} from  'react';
import classes from './BurgerIngredients.css'

class BurgerIngredients extends Component {
    render(){
        let ingredient = null;

        if (this.props.type === 'bread-bottom') {
            ingredient = <div className={classes.BreadBottom} ></div>
        } else if(this.props.type === 'bread-top'){
            ingredient = <div className={classes.BreadTop} >
                <div className={classes.Seeds1} ></div>
                <div className={classes.Seeds2} ></div>
            </div>
        } else if(this.props.type === 'meat'){
            ingredient = <div className={classes.Meat} ></div>
        } else if(this.props.type === 'cheese'){
            ingredient = <div className={classes.Cheese} ></div>
        } else if(this.props.type === 'salad'){
            ingredient = <div className={classes.Salad} ></div>
        } else if(this.props.type === 'bacon'){
            ingredient = <div className={classes.Bacon} ></div>
        }
    
        return ingredient;    
    }
}

export default BurgerIngredients;