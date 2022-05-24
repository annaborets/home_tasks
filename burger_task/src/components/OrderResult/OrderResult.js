import React from 'react';
import './OrderResult.css'

function OrderResult(props) {
    return (
        <div className='resultsItem'>
            <div>Redirecting in 5 seconds...</div>

            {props.errorMessage && <>
                <div className='errorMsg'>Something went wrong. Try ordering again</div>
                <div>{props.errorMessage}</div>
            </>}

            {props.successMessage &&
                <div>The order is accepted for processing, wait for the courier's call</div>
            }

        </div>
    )
}

export default OrderResult