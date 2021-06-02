import {useState} from "react";
import PropTypes from "prop-types";
import style from './Add.module.css';
import Message from '../common/message/Message'
import InputAdd from "../common/inputAdd/InputAdd";

const Add = ({addNameToContact}) => {
    const [name, changeName] = useState('');
    const [number, changeNumber] = useState('');
    const [errorName, changeErrorName] = useState(false);
    const [errorNumber, changeErrorNumber] = useState(false);
    const [success, changeSuccess] = useState(false);

    const numberValidation = () => {
        const num = /\+[0-9]{12}/;
        if (!num.test(String(number)) || number.length < 1) {
            changeErrorNumber(true);
            changeSuccess(false);
            return false
        } else {
            changeErrorNumber(false);
            return true
        }
    }

    const nameValidation = () => {
        if (name.length < 1 || name.length > 30) {
            changeErrorName(true);
            changeSuccess(false);
            return false
        } else {
            changeErrorName(false);
            return true
        }
    }

    const addContact = () => {
        addNameToContact({name, number});
        changeSuccess(true);
        changeName('');
        changeNumber('');
    }

    const submitAddingContact = (e) => {
        e.preventDefault();
        numberValidation(e);
        nameValidation();

        if(numberValidation() && nameValidation()) {
            addContact();
        }
    }

    return (
        <div className={style.add}>
            <h1>
                Add a contact
            </h1>
            <form onSubmit={submitAddingContact}>
                <InputAdd type={'name'} placeholder={'Name'}
                              value={name} func={(e) => [changeErrorName(), changeName(e.target.value)]} validation={nameValidation} />

                <Message message={errorName} text={'Troubles with name'} className={style.error}/>

                <InputAdd type={'tel'} placeholder={'Phone: +38'}
                          value={number} func={(e) => [changeErrorNumber(), changeNumber(e.target.value)]} validation={numberValidation}/>

                <Message message={errorNumber} text={'Bad format of the number'} className={style.error}/>

                <div>
                    <button type='submit'>Add</button>
                </div>

                <Message message={success} text={'Contact was added'} className={style.success}/>
            </form>
        </div>
    )
}

Add.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    addNameToContact: PropTypes.func
}

export default Add;
