import Filter from "./filter/Filter";
import ItemList from "./itemList/ItemList";

const Contacts = ({contactList}) => {
    return (
        <div>
            <Filter />
            <ItemList contactList={contactList}/>
        </div>
    )
}

export default Contacts;
