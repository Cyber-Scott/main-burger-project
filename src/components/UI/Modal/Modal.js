import React, {Fragment} from 'react';
import classes from './Modal.css';
import Button from '../Button/Button.jsx'



const Modal = props => {

    const ingSummary = Object.keys(props.ingredients)
    .map(igkey => {        
        return <li key={igkey}>{igkey}: {props.ingredients[igkey]}</li>
    })


    return(
        <Fragment>
            {props.show ? <div className={classes.Backdrop} onClick={props.closeModal}></div> : null} 
            <div className={classes.Modal}
                style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'}}>

                <h3>Your Order</h3>
                <p>A delicious burger containing</p>
                <ul>
                    {ingSummary}
                </ul>
                <p>Total Price: <strong>#{props.price}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType='Danger' clicked={props.closeModal}>CANCEL</Button>
                <Button btnType='Success' clicked={props.continue}>CONTINUE</Button>
            </div>
       </Fragment>     
    )
}

export default Modal; 