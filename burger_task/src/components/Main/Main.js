import React from 'react';
import './Main.css'

const products = {
    bacon: 2,
    pickles: 1,
    cheddar: 2,
    salad: 1,
    chilly: 2,
}

const INITIAL_PRICE = 5;

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            ingredients: {
                bacon: 0,
                pickles: 0,
                cheddar: 0,
                salad: 0,
                chilly: 0,
            }
        }
    }

    render() {
        return (
            <>
                <div className='main'>
                    <h2>Add something to your classic burger:)</h2>
                    <div className="prodCont">
                        {Object.keys(products).map(prodName => (
                            <div className="prodClass" key={prodName}>
                                <button className='btn' disabled={this.totalIngredientsCount() >= 5} onClick={(e) => this.addOne(e, prodName)}>+</button>
                                <button className='btn' disabled={!this.state.ingredients[prodName]} onClick={(e) => this.removeOne(e, prodName)}>-</button>
                                <span className='prodName'>{prodName} <span>{products[prodName]}$ X {this.state.ingredients[prodName]}</span></span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button className='checkoutBtn' disabled={!this.totalIngredientsCount()} onClick={this.checkout}>Checkout</button>
                    </div>
                    <div className='total'>Total price: {this.getTotalPrice()}$</div>
                </div>
            </>
        )
    }
    s
    addOne = (e, name) => {
        this.setState(oldState => {
            return {
                ...oldState,
                ingredients: { ...oldState.ingredients, [name]: oldState.ingredients[name] + 1 }
            }
        });
    }

    removeOne = (e, name) => {
        this.setState(oldState => {
            return {
                ...oldState,
                ingredients: { ...oldState.ingredients, [name]: oldState.ingredients[name] - 1 }
            }
        });
    }

    getTotalPrice() {
        let sum = 0;

        for (const ingredientName in this.state.ingredients) {
            sum += products[ingredientName] * this.state.ingredients[ingredientName]
        }

        return sum + INITIAL_PRICE;
    }

    totalIngredientsCount() {
        const ingredientsValues = Object.values(this.state.ingredients);

        let sum = 0;

        for (const ingredientValue of ingredientsValues) {
            sum += ingredientValue
        }

        return sum;
    }

    checkout = () => {
        let message = `Your burger costs ${this.getTotalPrice()} $.  It includes: \n`

        for (const ingredientName in this.state.ingredients) {
            message += `${ingredientName} X ${this.state.ingredients[ingredientName]}\n`
        }

        alert(message)
    }
}

export default Main