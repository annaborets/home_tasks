const CounterItem = (props) => {
    return (
        <>
            <div className="prodClass" key={props.prodName}>
                <button className='btn' disabled={props.addOneIsDisabled} onClick={props.addOne}>+</button>
                <button className='btn' disabled={props.removeneIsDisabled} onClick={props.removeOne}>-</button>
                <span className='prodName'>{props.prodName} <span>{props.price}$ X {props.ingredientCount}</span></span>
            </div>
        </>
    )
}

export default CounterItem
