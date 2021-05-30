import './App.css';
import Add from "./components/add/Add";
import Contacts from "./components/contacts/Contacts";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import { Route } from "react-router";
import {useState} from "react";

function App() {
    const [contactList, changeContactList] = useState([
        {id: 1, number: '3809997465', name: 'Sasha'},
        {id: 2, number: '3809997465', name: 'Vadym'}
    ]);

    const addNameToContact = (data) => {
        const body = {
            id: contactList.length + 1,
            number: data.number,
            name: data.name
        }
        changeContactList([...contactList, body])
    }

  return (
      <div className="App">
        <BrowserRouter>
                <Navbar />
                <div className="AppContent">
                    <Route render={() => <Add />} path={'/add/'} addNameToContact={addNameToContact} />
                    <Route render={() => <Contacts contactList={contactList}/>} path={'/contacts/'} />
                </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
