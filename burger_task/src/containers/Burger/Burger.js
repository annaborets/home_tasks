import axios from 'axios';
import React from 'react';
import './Burger.css'
import Counter from '../../components/Counter/Counter';
import Builder from '../../components/Builder/Builder'
import BurgerInfo from '../../components/BurgerInfo/BurgerInfo';
import DeliveryForm from '../../components/DeliveryForm/DeliveryForm';
import OrderResult from '../../components/OrderResult/OrderResult'
import OrderHistory from '../../components/OrdersHistory/OrdersHistory'

const INITIAL_PRICE = 1;

const PROMOS = {
    '1234': 5,
    '4567': 10,
    '7890': 15
}

const PAGES = {
    builder: 'builder',
    promo: 'promo',
    checkout: 'checkout',
    orderResult: 'orderResult',
    ordersHistory: 'ordersHistory',
}

const initialState = {
    ingredients: [],
    products: {},
    discountValue: 0,
    promoIsApplied: false,
    ordersHistory: [],
    addOrderError: null,
    addOrderSuccess: null,
    currentPage: PAGES.builder,
}

class Burger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...initialState
        }

        this.addOne = this.addOne.bind(this)
        this.removeOne = this.removeOne.bind(this)
        this.countIngredient = this.countIngredient.bind(this)
        this.checkout = this.checkout.bind(this)
        this.checkoutClick = this.checkout.bind(this)
        this.applyDiscount = this.applyDiscount.bind(this)
        this.cancelButton = this.cancelButton.bind(this)
        this.confirmButton = this.confirmButton.bind(this)
        this.completeOrder = this.completeOrder.bind(this)
        this.loadOrdersHistory = this.loadOrdersHistory.bind(this)
        this.returnToBuilder = this.returnToBuilder.bind(this)
    }

    countIngredient(ingredientName) {
        return this.state.ingredients.filter(ing => ing === ingredientName).length
    }

    componentDidMount() {
        axios.get('https://beetroot-burger-app.herokuapp.com/ingredients')
            .then(res => {
                const { ingredients } = res.data[0];

                const products = ingredients.reduce((acc, el) => {
                    const { name, price } = el

                    return { ...acc, [name]: price }
                }, {})

                this.setState(oldState => {
                    return {
                        ...oldState,
                        products
                    }
                })
            })
            .catch(console.log)
    }

    loadOrdersHistory() {
        axios.get('https://beetroot-burger-app.herokuapp.com/orders')
            .then(res => {
                this.setState(oldState => {
                    return {
                        ...oldState,
                        ordersHistory: [...res.data].reverse(),
                        currentPage: PAGES.ordersHistory
                    }
                })
            })
            .catch(console.log)
    }

    returnToBuilder() {
        this.setState(oldState => {
            return {
                ...oldState,
                currentPage: PAGES.builder
            }
        })
    }

    addOne(e, name) {
        this.setState(oldState => {
            return {
                ...oldState,
                ingredients: [...oldState.ingredients, name]
            }
        });
    }

    removeOne(e, name) {
        this.setState(oldState => {
            const lastIndex = this.state.ingredients.lastIndexOf(name);

            return {
                ...oldState,
                ingredients: [...this.state.ingredients.slice(0, lastIndex), ...this.state.ingredients.slice(lastIndex + 1)]
            }
        });
    }

    getTotalPrice() {
        let sum = INITIAL_PRICE;

        for (const ingredientName of this.state.ingredients) {
            sum += this.state.products[ingredientName]
        }


        return (sum - (sum / 100 * this.state.discountValue)).toFixed(2);
    }

    totalIngredientsCount() {
        return this.state.ingredients.length
    }

    checkout = () => {
        this.setState(oldState => {
            return {
                ...oldState,
                currentPage: PAGES.promo,
            }
        })
    }

    countIngredientsForCheckout() {
        const productWithCount = {};


        for (const ingredientName of this.state.ingredients) {
            let existingIngredientCount = productWithCount[ingredientName];

            if (existingIngredientCount) {
                productWithCount[ingredientName] = existingIngredientCount + 1;
            } else {
                productWithCount[ingredientName] = 1;
            }
        }
        return Object.entries(productWithCount)
    }

    applyDiscount(promo) {
        const foundPromo = PROMOS[promo];

        this.setState(oldState => {
            return {
                ...oldState,
                promoIsApplied: true,
                discountValue: foundPromo || 0
            }
        })
    }

    cancelButton() {
        this.setState(oldState => {
            return {
                ...oldState,
                currentPage: PAGES.builder,
            }
        })
    }

    confirmButton() {
        this.setState(oldState => {
            return {
                ...oldState,
                currentPage: PAGES.checkout,
            }
        })
    }

    completeOrder(values) {
        this.setState(oldState => {
            return {
                ...oldState,
                currentPage: PAGES.orderResult,
            }
        })

        const {
            address,
            fastDelivery,
            firstName,
            phone,
        } = values;


        const data = {
            orderName: firstName,
            orderPhone: phone,
            orderFast: fastDelivery,
            orderAddress: address,
            orderProducts: this.state.ingredients,
            orderPrice: this.getTotalPrice()

        }

        axios.post('https://beetroot-burger-app.herokuapp.com/orders', data)
            .then(res => {
                this.setState(oldState => {
                    return {
                        ...oldState,
                        addOrderSuccess: res.data
                    }
                })
            })
            .catch(err => {
                this.setState(oldState => {
                    return {
                        ...oldState,
                        addOrderError: err.message,
                    }
                })
            })

        setTimeout(() => {
            this.setState(oldState => {
                return {
                    ...initialState,
                    products: oldState.products
                }
            })
        }, 5000)
    }

    render() {
        let content;

        switch (this.state.currentPage) {
            case PAGES.builder:
                content = < div className='main' >
                    <button className='historyBtn' onClick={this.loadOrdersHistory}>Load orders history</button>
                    <h2>Add something to your classic burger:)</h2>
                    <Counter
                        products={this.state.products}
                        addOne={this.addOne}
                        removeOne={this.removeOne}
                        countIngredient={this.countIngredient}
                    />

                    <Builder
                        ingredients={this.state.ingredients}
                    />
                    <div>
                        <button className='checkoutBtn' disabled={!this.totalIngredientsCount()} onClick={this.checkout}>Checkout</button>
                    </div>

                    <div className='total'>Total price: {this.getTotalPrice()}$</div>

                </div >
                break;

            case PAGES.promo:
                content = <BurgerInfo
                    productWithCount={this.countIngredientsForCheckout()}
                    totalPrice={this.getTotalPrice()}
                    ingredients={this.state.ingredients}
                    applyDiscount={this.applyDiscount}
                    discountValue={this.state.discountValue}
                    promoIsApplied={this.state.promoIsApplied}
                    cancelButton={this.cancelButton}
                    confirmButton={this.confirmButton}
                />
                break;

            case PAGES.checkout:
                content = <DeliveryForm
                    completeOrder={this.completeOrder}
                />
                break;

            case PAGES.orderResult:
                content = <OrderResult
                    errorMessage={this.state.addOrderError}
                    successMessage={this.state.addOrderSuccess}
                />
                break;

            case PAGES.ordersHistory:
                content = <OrderHistory
                    orders={this.state.ordersHistory}
                    returnToBuilder={this.returnToBuilder}
                />
                break;

            default:
                content = "ERROR"
                break;
        }

        return (
            <>
                {content}
            </>
        )
    }
}


export default Burger