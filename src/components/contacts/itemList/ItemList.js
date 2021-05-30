import Item from "./item/Item";
import PropTypes from "prop-types";

const ItemList = ({contactList}) => {
    return (
        <div>
            {contactList.map(c => {
                return <Item id={c.id} number={c.number} name={c.name}/>
            })}
        </div>
    )
}

Item.propTypes = {
    contactList: PropTypes.array,
    number: PropTypes.number,
    name: PropTypes.string
}

export default ItemList;
