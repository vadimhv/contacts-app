import './App.css';
import Add from "./components/add/Add";
import Contacts from "./components/contacts/Contacts";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import {useState} from "react";

function App() {
    const [searchResult, setSearchResult] = useState([]);
    const [filterValue, changeFilterValue] = useState('');
    const [contactList, setContactList] = useState([
        {id: 1, number: '+380595746524', name: 'User1'},
        {id: 2, number: '+380595124524', name: 'User2'}
    ]);
    const [loading, setLoading] = useState(false);

    const addToContact = (data) => {
        const body = {
            id: contactList.length + 1,
            number: data.number,
            name: data.name
        }
        setContactList([...contactList, body]);
    }

    const doFilter = (text) => {
        if (text !== '') {
            const newContactList = contactList.filter(c => {
                return c.number.includes(text) || c.name.toLowerCase().includes(text.toLowerCase());
            });
            setSearchResult(newContactList);
        } else {
            setSearchResult(contactList);
        }
    }

    const deleteContact = (id) => {
        setContactList(contactList.filter(c => c.id !== id));
    }

    const doChangeName = (id, name, number) => {
        setContactList(contactList.filter(c => {
            if (c.id === id) {
                c.name = name;
                c.number = number;
            }
            return c;
        }));
    }


    // Validation
    const numberValidation = (e, setNumber, setNumberError) => {
        if (!Number.isNaN(+e.target.value) || e.target.value === '+') {
            setNumber(e.target.value.slice(0, 13));
            setNumberError(false);
            return true;
        } else {
            return false;
        }
    }
    const acceptNumber = (number, numberErrorFunction) => {
        if (number[0] !== '+' || number.length < 11) {
            numberErrorFunction(true);
            return false;
        } else {
            numberErrorFunction(false);
            return true;
        }
    }
    const acceptName = (name, errorNameFunction) => {
        if (!(name.length > 0 && name.length <= 30)) {
            errorNameFunction(true);
            return false
        } else {
            errorNameFunction(false);
            return true
        }
    }
    //

    return (
        <div className="App">
            <BrowserRouter>
                <div className="AppContent">
                    <Navbar/>
                    <Route render={() => <Add addNameToContact={addToContact} loading={loading}
                                              numberValidation={numberValidation}
                                              acceptNumberValidation={acceptNumber}
                                              acceptNameValidation={acceptName}/>} path={'/add/'}/>

                    <Route render={() => <Contacts contactList={filterValue.length < 1 ? contactList : searchResult}
                                                   doFilter={doFilter} changeFilterValue={changeFilterValue}
                                                   filterValue={filterValue} deleteContact={deleteContact}
                                                   doChangeName={doChangeName} loading={loading}
                                                   numberValidation={numberValidation}
                                                   acceptNumberValidation={acceptNumber}/>} path={'/contacts/'}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
