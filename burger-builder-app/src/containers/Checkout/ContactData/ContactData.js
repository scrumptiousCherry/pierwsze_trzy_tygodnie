import React, { Component } from 'react';
import axios from '../../../axios-orders'

import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component{
    state= {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true})
        const order= {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer :{
                name: 'Wiki',
                adress :{
                    street: 'Sezamkowa 3',
                    zipCode: 45466,
                    country: 'Polska'
                },
                email: 'testtest@gmss.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then( response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
        .catch(error => {
            this.setState({loading: false});
        });
    }

    render(){
        let form = (
            <form>
                    <input className={classes.Input} type='text' name='name' placeholder='imie'/>
                    <input className={classes.Input} type='text' name='email' placeholder='email'/>
                    <input className={classes.Input} type='text' name='street' placeholder='ulica'/>
                    <input className={classes.Input} type='text' name='postalCode' placeholder='kod pocztowy'/>
                    <Button btnType='Success' clicked={this.orderHandler}>POTWIERDZ</Button>
                </form>
        );
        if(this.state.loading){
            form = <Spinner/>
        }
        return(
            <div className={classes.ContactData}>
                <h4>Powiedz gdzie mamy dostarczyc:</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;