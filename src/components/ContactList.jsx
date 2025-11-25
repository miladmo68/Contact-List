import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const [contactList, setContactList] = useState([]);

  return (
    <div className="flex flex-col items-center gap-6 bg-slate-800 p-8 rounded-2xl shadow-2xl">
      <h1 className="text-3xl font-bold text-white">Contact List</h1>

      <ContactForm setContactList={setContactList} />

      <ul className="flex flex-col gap-3 mt-4">
        {contactList.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
