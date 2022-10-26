import PropTypes from "prop-types";
// ajoute img du film https://image.tmdb.org/
const Card = ({item, width, children}) => {
    const handleClick = (e) => {
        e.preventDefault()

    }
    console.log(item)
    return (
        <div style={{width}}>
            <span>{item.name}</span>
            {children}
        </div>
    )
}

Card.propTypes = {
    width: PropTypes.number.isRequired,

}

export default Card