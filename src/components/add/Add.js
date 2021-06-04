import {useState} from "react";
import PropTypes from "prop-types";
import style from './Add.module.css';
import Message from '../common/message/Message'
import InputAdd from "../common/inputAdd/InputAdd";
import Loader from "../common/loader/Loader";

const Add = ({addNameToContact, loading, numberValidation, acceptNumberValidation, acceptNameValidation}) => {
    const [name, changeName] = useState('');
    const [number, setNumber] = useState('');
    const [errorName, setNameError] = useState(false);
    const [errorNumber, setNumberError] = useState(false);
    const [success, changeSuccess] = useState(false);

    const acceptNumber = () => {
        return !!acceptNumberValidation(number, setNumberError);
    }

    const acceptName = () => {
        return !!acceptNameValidation(name, setNameError)
    }

    const addContact = () => {
        addNameToContact({name, number});
        changeSuccess(true);
        changeName('');
        setNumber('');
    }

    const submitAddingContact = (e) => {
        e.preventDefault();
        acceptNumber();
        acceptName();
        if (acceptName() && acceptNumber()) {
            addContact();
        }
    }

    return (
        <div className={style.add}>
            <h1>
                Add a contact
            </h1>
            {
                loading ? <Loader/> : <form onSubmit={submitAddingContact}>
                    <InputAdd type={'name'} placeholder={'Name'}
                              value={name} functions={(e) => [setNameError(false), changeName(e.target.value)]}
                              validation={acceptName}/>

                    <Message message={errorName} text={'Troubles with name'} className={style.error}/>

                    <InputAdd type={'tel'} placeholder={'Phone: +38'}
                              value={number}
                              functions={(e) => [setNumberError(false), numberValidation(e, setNumber, setNumberError)]}
                              validation={acceptNumber}/>

                    <Message message={errorNumber} text={'Bad format of the number'} className={style.error}/>

                    <div>
                        <button type='submit'>Add</button>
                    </div>

                    <Message message={success} text={'Contact was added'} className={style.success}/>
                </form>
            }
        </div>
    )
}

Add.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    addNameToContact: PropTypes.func
}

export default Add;
