import './BuilderItem.css'
const BuilderItem = (props) => {
    return (
        <>
            <div className='ingredient'>
                {props.imgSrc ? <img alt='prod name' src={props.imgSrc} /> : <div className='doNotHaveItem' >We still don't have an image for this ingredient. We're working on it</div>}
            </div>
        </>
    )
}

export default BuilderItem