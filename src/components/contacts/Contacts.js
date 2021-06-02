import Filter from "./filter/Filter";
import ItemList from "./itemList/ItemList";
import style from './Contacts.module.css'
import PropTypes from "prop-types";

const Contacts = ({contactList, doFilter, changeFilterValue, filterValue, deleteContact, editContact, doChangeName}) => {
    return (
        <div className={style.contacts}>
            <h1>Contacts</h1>
            <Filter doFilter={doFilter} changeFilterValue={changeFilterValue} filterValue={filterValue}/>
            <ItemList contactList={contactList} deleteContact={deleteContact} editContact={editContact} doChangeName={doChangeName}/>
        </div>
    )
}

Contacts.propTypes = {
    contactList: PropTypes.array.isRequired,
    doFilter: PropTypes.func,
    changeFilterValue: PropTypes.func,
    filterValue: PropTypes.string,
    deleteContact: PropTypes.func,
    editContact: PropTypes.func,
    doChangeName: PropTypes.func
}

export default Contacts;
