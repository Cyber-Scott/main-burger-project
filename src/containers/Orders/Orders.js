import React, { Component } from 'react';
import Order from '../../components/UI/OrderSummary/Order/Order';

import axios from '../../axios-orders';

class Orders extends Component {
    state={
        orders: [],
        loading: true
    }

    componentDidMount(){
        axios.get('/orders.json')
        .then(res => {
            let fetchedData = []; 
            for(let key in res.data){
                fetchedData.push({...res.data[key] ,id: key})  
                // console.log(res.data, key);              
            }   
            this.setState({loading: false, orders: fetchedData})      
        })
        .catch(err => {
            alert(err)
        })

    }

    render() { 
        return ( 
            <div>
                {this.state.orders.map(order => {
                    return(
                        <Order key={order.id}
                        ingredients={order.ingredients}/>                     
                    )
                })}
            </div>
         );
    }
}
 
export default Orders;