import PropTypes from "prop-types";
import style from './Item.module.css';
import del from '../../../../img/multiply.svg';
import edit from '../../../../img/edit.svg';
import {useState} from "react";

const Item = ({id, number, name, deleteContact, doChangeName}) => {
    const [editMode, setEditMode] = useState(false);
    const [changedName, setChangedName] = useState(name)
    const [changedNumber, setChangedNumber] = useState(number);


    return (
        <div className={style.item}>
            <div>
                {editMode
                    ?
                    <>
                        <div className={style.name}>
                            <input type="text" value={changedName} onChange={(e) => setChangedName(e.target.value)}/>
                        </div>
                        <div>
                            <input type="text" value={changedNumber} onChange={(e) => setChangedNumber(e.target.value)}/>
                        </div>
                    </>
                    :
                    <>
                        <div className={style.name}>
                            {name}
                        </div>
                        <div>
                            {number}
                        </div>
                    </>}
            </div>
            <div>
                <span onClick={() => {
                    setEditMode(!editMode);
                    doChangeName(id, changedName, changedNumber);
                } }><img src={edit} className={style.edit} alt=""/></span>
                <span className={style.close} onClick={() => deleteContact(id)}><img src={del} className={style.del} alt=""/></span>
            </div>
        </div>
    )
}

Item.propTypes = {
    id: PropTypes.number,
    number: PropTypes.string,
    name: PropTypes.string,
    deleteContact: PropTypes.func,
    doChangeName: PropTypes.func
}

export default Item;
