import React, { useState } from "react";

const ContactForm = ({ setContactList }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !number.trim()) {
      alert("Name and Number cannot be empty!");
      return;
    }
    // console.log(name, number);
    setContactList((prevent) => [...prevent, { id: Date.now(), name, number }]);
    setName("");
    setNumber("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-black flex flex-col gap-4 bg-white p-6 rounded-xl shadow-xl w-80
                 transition-all duration-300 hover:shadow-2xl"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name..."
        className="p-3 rounded-lg border border-gray-300 outline-none 
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
      />

      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Number..."
        className="p-3 rounded-lg border border-gray-300 outline-none
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
      />

      <button
        className="bg-blue-600 text-white py-3 rounded-lg font-semibold 
                   hover:bg-blue-700 transition active:scale-95 shadow-md"
        type="submit"
      >
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
