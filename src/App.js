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
    const [contactList, setContactList] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = () => {
            setContactList([
                {id: 1, number: '+3805957465', name: 'User1'},
                {id: 2, number: '+3809215421', name: 'User2'}
            ])
    }

    // fake API
    setTimeout(() => {
        setLoading(false);
        getData();
    }, 3000);

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

    return (
        <div className="App">
            <BrowserRouter>
                <div className="AppContent">
                    <Navbar/>
                    <Route render={() => <Add addNameToContact={addToContact}/>} path={'/add/'}/>

                    <Route render={() => <Contacts contactList={filterValue.length < 1 ? contactList : searchResult}
                                                   doFilter={doFilter} changeFilterValue={changeFilterValue}
                                                   filterValue={filterValue} deleteContact={deleteContact}
                                                   doChangeName={doChangeName} loading={loading}/>} path={'/contacts/'}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
