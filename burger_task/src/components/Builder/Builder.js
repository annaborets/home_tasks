import BuilderItem from './BuilderItem/BuilderItem'

import './Builder.css'

import cheddar from '../../images/cheddar.png';
import bottomBun from '../../images/bottomBun.png';
import chop from '../../images/chop.png';
import pickles from '../../images/pickles.png';
import salad from '../../images/salad.png';
import tomatos from '../../images/tomatos.png';
import topBun from '../../images/topBun.png';

const images = {
    cheese: cheddar,
    bottomBun: bottomBun,
    meat: chop,
    pickle: pickles,
    salad: salad,
    tomatos: tomatos,
    topBun: topBun,
}

const Builder = (props) => {
    const content = !props.ingredients.length
        ? 'Start by adding ingredents to your burger'
        : [...props.ingredients].reverse().map((ingredient, index) => (
            <BuilderItem
                key={`${ingredient}_${index}`}
                imgSrc={images[ingredient]}
            />
        ))

    return (
        <div className="builder">
            <BuilderItem imgSrc={images.topBun} />

            {content}

            <BuilderItem imgSrc={images.bottomBun} />
        </div>
    )
}

export default Builder;
