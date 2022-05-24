import React from 'react';

function PromoResult(props) {
    return (
        <>
            {props.promoIsApplied && props.promoValue !== 0 ? <div>{props.promoValue} % promo is applied!</div> : <div>Can't find promo</div>}
        </>
    )
}

export default PromoResult