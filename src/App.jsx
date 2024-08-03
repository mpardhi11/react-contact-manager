import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
function App() {
  const dummyContacts = [
    {
      name: "Ann Franks",
      email: "dui.nec.urna@yahoo.edu",
      guid: "01B9EE61-E816-E6AE-94B8-C4E336594C9E",
    },
    {
      name: "Martha Underwood",
      email: "lobortis.nisi@protonmail.net",
      guid: "951814AA-D78B-FD6C-2D91-A45CA6F25C55",
    },
    {
      name: "Mariko Eaton",
      email: "malesuada@icloud.edu",
      guid: "4031DE77-A6C2-274D-51C1-472AC1F292C6",
    },
    {
      name: "Dolan Keller",
      email: "enim.consequat.purus@protonmail.org",
      guid: "3D274334-6446-9821-6B3C-C6E14D67D451",
    },
    {
      name: "Joy Sparks",
      email: "lorem.sit@icloud.edu",
      guid: "4B8CCE55-85C6-259E-E268-9A59761840A1",
    },
  ];

  const [contacts, setContacts] = useState(dummyContacts);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  const removeContactHandler = (guid) => {
    const newContactList = contacts.filter((contact) => {
      return contact.guid !== guid;
    });

    setContacts(newContactList);
  };

  return (
    <>
      <div className="ui container">
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList
          contacts={contacts}
          deleteContactHandler={removeContactHandler}
        />
      </div>
    </>
  );
}

export default App;
