import CounterItem from './CounterItem/CounterItem'

const Counter = (props) => {
    if (Object.keys(props.products).length === 0) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className="prodCont">
                {Object.keys(props.products).map(prodName => (
                    <CounterItem
                        key={prodName}
                        products={props.products}
                        price={props.products[prodName]}
                        prodName={prodName}
                        addOneIsDisabled={props.countIngredient(prodName) >= 5}
                        removeneIsDisabled={!props.countIngredient(prodName)}
                        addOne={(e) => props.addOne(e, prodName)}
                        removeOne={(e) => props.removeOne(e, prodName)}
                        ingredientCount={props.countIngredient(prodName)}
                    />
                ))}
            </div>
        </>
    )
}
export default Counter
