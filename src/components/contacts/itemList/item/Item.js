import PropTypes from "prop-types";

const Item = ({number, name}) => {
    return (
        <div>
            <div>
                {number} {name}
            </div>
        </div>
    )
}

Item.propTypes = {
    number: PropTypes.number,
    name: PropTypes.string
}

export default Item;
