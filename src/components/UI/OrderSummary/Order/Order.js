import React from 'react';
import classes from './Order.css'

const Order = (props) => {
    console.log(props, props.ingredients);
    
    let ingredients = []
    for(let ingName in props.ingredients){
        ingredients.push({
            name: ingName,
            amount: props.ingredients[ingName]
        })
    }

    const ingOutput = ingredients.map(ig => {
        return(
            <span style={{
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '6px 12px',
                borderRadius: '5px'
            }}>{ig.name} [{ig.amount}]</span>
        )
    })

    return(
        <div className={classes.Order}>
            <p>INGREDIENTS - {ingOutput}</p>
        </div>
    );    
}




export default Order;