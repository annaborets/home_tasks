import React from 'react';
import PromoResult from '../PromoResult/PromoResult'

import './BurgerInfo.css'

class BurgerInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            promo: ''
        }

        this.onPromoChange = this.onPromoChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onPromoChange(e) {
        e.preventDefault();

        this.setState(oldState => {
            return {
                ...oldState,
                promo: e.target.value
            }
        })
    }

    onFormSubmit(e) {
        e.preventDefault();

        this.props.applyDiscount(this.state.promo)
    }

    render() {
        return (
            <>
                <div className='container'>
                    <div className='border'>
                        <div className="burgerInfo"> Your burger costs {this.props.totalPrice} $. It includes:
                            {[...this.props.productWithCount].map((array) => {
                                const [name, count] = array
                                return (
                                    <div key={name}>{name} X {count}</div>
                                )
                            })}
                        </div>
                        <form onSubmit={this.onFormSubmit} className='inputItem'>
                            <div className='txt'>Enter your promo:</div>
                            <input className='input mr mb' placeholder='XXXX' value={this.state.promo} onChange={this.onPromoChange}></input>
                            <button className='btn_1 mb'>Apply discount</button>
                        </form>
                        <div className='confirmBtn'>
                            <button className='btn_1 mr mb' onClick={this.props.confirmButton}>Confirm</button>
                            <button className='btn_1 mb' onClick={this.props.cancelButton}>Cancel</button>
                        </div>

                        {this.props.promoIsApplied && <PromoResult
                            promoValue={this.props.discountValue}
                            promoIsApplied={this.props.promoIsApplied}
                        />}
                    </div>
                </div>
            </>
        )
    }

}

export default BurgerInfo
