import React, { Component } from 'react';
import classes from "./Input.css";

class Input extends Component {

    render() { 
        let inputElement = null;
        let inputStyle = [classes.inputElement];
        if(this.props.valid === false){
            inputStyle.push(classes.invalid)
        }

        switch (this.props.type) {
            case ('Input'):
                inputElement = <input className={inputStyle.join(' ')}
                {...this.props.setup}
                value={this.props.value}
                onChange={this.props.clicked} required/>;
                break;
            case ('Email'):
                inputElement = <input className={inputStyle.join(' ')} 
                {...this.props.setup} 
                value={this.props.value}
                onChange={this.props.clicked}/>;
                break;
            case ('Select'):
                inputElement = <select className={classes.inputElement} 
                value={this.props.value}
                onChange={this.props.clicked}>
                            {this.props.setup.options.map(option => (
                                <option value={option.value} key={option.value}>
                                    {option.displayValue}
                                </option>
                            ))}
                </select>;
                break;               
            default:
                inputElement = <input className={inputStyle.join(' ')} {...this.props.setup}/>;
        }


        return ( 
            <div className={classes.Input}>
                <label>{this.props.label}</label>
                {inputElement}
            </div>
         );
    }
}
 
export default Input;