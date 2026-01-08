import React from 'react'
import { getSession } from '../_lib/session'
import { getContacts } from '../api/contact';
import { contactType } from '../_types/contactType';

import { FiUserPlus, FiUsers } from 'react-icons/fi';
import { MdLogin } from 'react-icons/md';
import ContactList from '../_components/ContactList';

const ContactPage = async () => {
  const user = await getSession();
  
  if (!user) {
    return (
      <div className="p-4 text-center mt-8">
        <MdLogin className="mx-auto text-6xl text-gray-400 mb-4" />
        <p className="text-lg mb-2">
          Please{" "}
          <a href="/login" className="text-blue-600 hover:underline font-semibold">
            login
          </a>{" "}
          to view contacts.
        </p>
      </div>
    );
  }

  const contacts: contactType[] = await getContacts(user.id);
  
  if (!contacts || contacts.length === 0) {
    return (
      <div className="p-4 text-center mt-8">
        <FiUsers className="mx-auto text-6xl text-gray-400 mb-4" />
        <p className="text-lg mb-2">You don't have any contacts yet.</p>
        <p className="text-gray-600 mb-4">
          Get started by adding your first contact.
        </p>
        <a 
          href="/contacts/new" 
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          <FiUserPlus className="text-xl" />
          Add Your First Contact
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <FiUsers className="text-3xl" />
          Your Contacts
        </h1>
        <a 
          href="/contacts/new" 
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          <FiUserPlus />
          Add Contact
        </a>
      </div>

      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactPage;