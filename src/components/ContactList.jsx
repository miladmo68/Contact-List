import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import SearchItem from "./SearchItem";

const ContactList = () => {
  const [contactList, setContactList] = useState([]);
  const [searchedContact, setSearchedContact] = useState(null);

  // وقتی کانتکت حذف می‌کنی
  const handleDelete = (contactId) => {
    setContactList((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
    // بعد از حذف، از حالت سرچ هم خارج شو
    setSearchedContact(null);
  };

  // هر تغییری روی لیست (از سمت فرم) بیاد، این تابع اجرا میشه
  // به جای اینکه خود setContactList رو بدیم به فرم، اینو می‌دیم
  const handleUpdateContactList = (updater) => {
    // پشتیبانی از هر دو حالت:
    // 1) setContactList(prev => [...prev, newContact])
    // 2) setContactList(newArray)
    setContactList((prev) =>
      typeof updater === "function" ? updater(prev) : updater
    );

    // هر بار که لیست عوض شد (مثلا Add شد)، سرچ رو خالی کن
    setSearchedContact(null);
  };

  const handleSearch = (searchName) => {
    if (!searchName || !searchName.trim()) {
      setSearchedContact(null);
      return;
    }

    const normalized = searchName.toLowerCase();

    const found = contactList.find(
      (contact) => contact.name.toLowerCase() === normalized
    );

    setSearchedContact(found || null);
  };

  const handleClearSearch = () => {
    setSearchedContact(null);
  };

  return (
    <div className="flex flex-col items-center gap-6 bg-slate-800 p-8 rounded-2xl shadow-2xl">
      <h1 className="text-3xl font-bold text-white">Contact List</h1>

      {/* سرچ */}
      <SearchItem onSearch={handleSearch} />

      {/* فرم اضافه کردن کانتکت */}
      {/* به جای setContactList اصلی، ورژن رَپ‌شده رو می‌دیم */}
      <ContactForm setContactList={handleUpdateContactList} />

      {/* لیست کانتکت‌ها */}
      <ul className="flex flex-col gap-3 mt-4">
        {searchedContact === null ? (
          // حالت عادی: همه‌ی کانتکت‌ها
          contactList.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDelete={handleDelete}
            />
          ))
        ) : (
          // حالت سرچ: فقط کانتکت پیدا شده + دکمه × برای خروج از سرچ
          <li className="bg-white p-4 rounded-xl shadow-md w-80 flex flex-row justify-between items-center transition hover:shadow-xl">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {searchedContact.name}
              </h3>
              <p className="text-slate-600">{searchedContact.number}</p>
            </div>

            <button
              onClick={handleClearSearch}
              aria-label="Clear search"
              className="ml-4 text-slate-400 hover:text-slate-700 text-2xl font-bold leading-none
                         transition transform hover:scale-110"
            >
              ×
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
