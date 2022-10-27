import {useEffect} from "react";
import PropTypes from "prop-types";
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import './style.scss'
import Cards from "../cards";

const Sliders = ({items, type, perView, gap}) => {
    const glide = new Glide('.glide', {
        type,
        focusAt: 'center',
        perView,
        gap,
    })

    useEffect(()=> {
        glide.mount({Controls})
    }, [items])

    return (
        <div className="glide">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {items.map((item, index) => <li key={index} className={'glide__slide'}><Cards item={item}/></li>)}
                </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
            </div>
        </div>
    )
}
Sliders.propTypes= {
    items: PropTypes.array.isRequired,
    type: PropTypes.string,
    perView: PropTypes.number,
    gap: PropTypes.number
}
Sliders.defaultProps= {
    type: 'carousel',
    perView: 5,
    gap:10
}

export default Sliders