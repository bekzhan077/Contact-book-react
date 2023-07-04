import React from "react";
import ContactItem from "./ContactItem";

const ContactsList = ({ contacts, deleteContacts, vipStatus }) => {
  console.log(contacts);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {contacts.map((item) => (
        <ContactItem
          key={item.id}
          item={item}
          deleteContacts={deleteContacts}
          vipStatus={vipStatus}
        />
      ))}
    </div>
  );
};

export default ContactsList;
