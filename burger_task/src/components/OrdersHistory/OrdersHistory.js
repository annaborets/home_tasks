import React from 'react';
import './OrdersHistory.css'

function OrderHistory(props) {
    return (
        <div className='historyMain'>
            <button className='backBtn' onClick={props.returnToBuilder}>Back</button>

            {props.orders.map(order => {
                const {
                    orderName,
                    orderPhone,
                    orderFast,
                    orderAddress,
                    orderPrice,
                    orderProducts
                } = order;



                return <div className="historyItem">
                    <div> Name: {orderName}</div>
                    <div>Phone: {orderPhone}</div>
                    <div>Fast Delivery: {orderFast}</div>
                    <div>Adress: {orderAddress}</div>
                    <div>TotalPrice: {orderPrice}</div>
                    <div>Order: {JSON.stringify(orderProducts)}</div>
                </div>
            })}
        </div>
    )
}

export default OrderHistory
