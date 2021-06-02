import Item from "./item/Item";
import PropTypes from "prop-types";
import style from './ItemList.module.css'
import Loader from "../../common/loader/Loader";

const ItemList = ({contactList, deleteContact, editContact, doChangeName, loading}) => {

    return (
        <div>
            {
                loading
                    ? <Loader />
                    : contactList.length !== 0 ? contactList.map(c => {
                            return <Item key={c.id} id={c.id} number={c.number} name={c.name} deleteContact={deleteContact}
                                         editContact={editContact} doChangeName={doChangeName}/>
                        }) : <p className={style.noContacts}>No contacts</p>
            }
        </div>
    )
}

Item.propTypes =
    {
        contactList: PropTypes.array,
        number: PropTypes.string,
        name: PropTypes.string,
        deleteContact: PropTypes.func,
        editContact: PropTypes.func,
        doChangeName: PropTypes.func
    }

export default ItemList;
