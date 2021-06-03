import PropTypes from "prop-types";
import style from './Item.module.css';
import del from '../../../../img/multiply.svg';
import edit from '../../../../img/edit.svg';
import {useState} from "react";
import Message from "../../../common/message/Message";

const Item = ({id, number, name, deleteContact, doChangeName}) => {
    const [editMode, setEditMode] = useState(false);
    const [changedName, setChangedName] = useState(name)
    const [changedNumber, setChangedNumber] = useState(number);
    const [numberError, setNumberError] = useState(false);

    const editContact = () => {
        if (changedNumber[0] !== '+' || changedNumber.length < 11) {
            setNumberError(true);
        } else {
            setEditMode(!editMode);
            doChangeName(id, changedName, changedNumber);
        }
    }

    const numberValidation = (e) => {
        if (!Number.isNaN(+e.target.value) || e.target.value === '+') {
            setChangedNumber(e.target.value.slice(0, 13));
            setNumberError(false);
            return true;
        } else {
            return false;
        }
    }
    return (
        <div className={style.item}>
            <div>
                {editMode
                    ?
                    <>
                        <div className={style.name}>
                            <input type="text" value={changedName} onChange={(e) => {
                                setChangedName(e.target.value.slice(0, 30));
                            }
                            }/>
                        </div>
                        <div>
                            <input type="text" value={changedNumber} onChange={numberValidation}/>
                            {
                                <Message message={numberError} text={'Bad format of phone number'}
                                         className={style.error}/>
                            }
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
                <span onClick={editContact}><img src={edit} className={style.edit} alt=""/></span>
                <span className={style.close} onClick={() => deleteContact(id)}><img src={del} className={style.del}
                                                                                     alt=""/></span>
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
