import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import SearchItem from "./SearchItem";

const ContactList = () => {
  const [contactList, setContactList] = useState([]);
  const [serachedContact, setSerachedContact] = useState(null);

  const handleDelete = (contactId) => {
    setContactList((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const handleSearch = (SearchName) => {
    // console.log(SearchName);
    setSerachedContact(
      contactList.find((contact) => contact.name === SearchName)
    );
  };
  return (
    <div className="flex flex-col items-center gap-6 bg-slate-800 p-8 rounded-2xl shadow-2xl">
      <h1 className="text-3xl font-bold text-white">Contact List</h1>
      <SearchItem onSearch={handleSearch} />
      <ContactForm setContactList={setContactList} />

      <ul className="flex flex-col gap-3 mt-4">
        {serachedContact === null ? (
          contactList.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <li className="bg-white p-4 rounded-xl shadow-md w-80 flex flex-row justify-between items-center transition hover:shadow-xl">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {serachedContact.name}
              </h3>
              <p className="text-slate-600">{serachedContact.number}</p>
            </div>

            <button
              // onClick={() => onDelete(contact.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-red-600 active:scale-95 transition shadow"
            >
              Delete
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
