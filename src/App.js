import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [status, setStatus] = useState();

  function addContacts(contact) {
    setContacts([...contacts, contact]);
  }
  function deleteContacts(id) {
    const newArr = contacts.filter((item) => item.id !== id);
    setContacts(newArr);
  }

  function vipButton(id) {
    <img
      src="https://cdn-icons-png.flaticon.com/512/5182/5182361.png"
      width={40}
      alt=""
    />;
  }
  return (
    <div className="App">
      <ContactForm addContacts={addContacts} />
      <ContactsList
        deleteContacts={deleteContacts}
        contacts={contacts}
        vipButton={vipButton}
        status={status}
        setStatus={setStatus}
      />
    </div>
  );
}

export default App;
