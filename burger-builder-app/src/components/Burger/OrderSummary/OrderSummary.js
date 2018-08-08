import React, { Component }  from 'react';
import Aux from '../../../hoc/Auxx/Aux';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component{
    
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey =>{
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
                    </li> );
            });
        return(
            <Aux>
            <h3>You order</h3>
            <p>that are your ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Twoja Cena: {this.props.price.toFixed(2)}</strong></p>
            <p>chcesz kupic?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>NIE</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>TAK CHCE</Button>
        </Aux>
        );
    }
}

export default OrderSummary;