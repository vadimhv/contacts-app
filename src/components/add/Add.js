import {useState} from "react";

const Add = ({addNameToContact}) => {
    const [name, changeName] = useState('');
    const [number, changeNumber] = useState('');

    const submitAddingContact = () => {
        addNameToContact({name, number});
    }
    const addName = (e) => {

    }
    return (
        <div>
            <h1>
                Add a contact
            </h1>
            <form onSubmit={submitAddingContact}>
                <div>
                    <input type="text" placeholder='Name' value={name} onChange={addName}/>
                </div>
                <div>
                    <input type="text" placeholder='Number' value={number}/>
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default Add;
