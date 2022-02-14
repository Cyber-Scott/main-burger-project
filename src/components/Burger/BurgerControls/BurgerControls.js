import React, {Component} from 'react';
import classes from './BurgerControls.css'

const control = [
    {label: 'Salad' , type: 'salad'},
    {label: 'Meat' , type: 'meat'},
    {label: 'Cheese' , type: 'cheese'},
    {label: 'Bacon' , type: 'bacon'}
]


class BurgerControls extends Component {
    render (){
        return(
            <div className={classes.BuildControls}>
            <h3>Current Price: <strong>${this.props.price}</strong></h3>
            {control.map( (ctr) => {
                return (
                 <div className={classes.BuildControl} key={ctr.label}>
                    <div className={classes.Label}>{ctr.label}</div>
                    <button className={classes.Less} onClick={() => this.props.ingRemoved(ctr.type)}>Reduce -</button>
                    <button className={classes.More} onClick={() => this.props.ingAdded(ctr.type)} >Add +</button>
                </div>    
                ) 
            })}
            <button 
                className={classes.OrderButton}
                onClick={this.props.purchase}
                disabled={this.props.purchasable}
                >PLACE ORDER</button>
            </div>
        )

    }

}
 
export default BurgerControls;