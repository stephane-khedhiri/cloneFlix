import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const Navbar = ({links}) => {
    return (
        <ul>
            {links.map((item, index)=><li key={index} className={item.class}><Link to={item.path}>{item}</Link></li>)}
        </ul>
    )
}

Navbar.propTypes = {
    links: PropTypes.array.isRequired
}

export default Navbar