import React from "react";

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className="bg-white p-4 rounded-xl shadow-md w-80 flex flex-row justify-between items-center transition hover:shadow-xl">
      <div>
        <h3 className="text-lg font-bold text-slate-900">{contact.name}</h3>
        <p className="text-slate-600">{contact.number}</p>
      </div>

      <button
        // onClick={() => onDelete(contact.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-red-600 active:scale-95 transition shadow"
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
