import { useState } from "react";
import "./App.css";
import useLocalStorage from './components/LocalStorage';
import shortid from "shortid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

export default function App() {
  const [contacts, setContacs] = useLocalStorage('contacts',
    [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]);
  const [filter, setFilter] = useState('');
  
  const addContact = (name, number) => {
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
        name,
        number,
      id: shortid.generate(),
    };
    
    setContacs((prevState) => [...prevState, contact]);
  };
  
  const changeFilter = (filter) => {
    setFilter(filter);
  };
  
  const getVisibleFilter = () => {
     return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const deleteContact = (contactId) => {
    setContacs(contacts.filter(contact => contact.id !== contactId));
  };

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts]);
  
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={getVisibleFilter()} onDeleteContact={deleteContact} />
    </div>
  );
  
}


