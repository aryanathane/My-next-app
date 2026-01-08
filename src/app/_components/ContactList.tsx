"use client"
import React from "react";
import { contactType } from "../_types/contactType";
import { FiMail, FiEdit, FiEye, FiUser } from "react-icons/fi";
import DeleteButton from "./DeleteButton";
import { deleteContactAction } from "../actions/contact";

type ContactListProps = {
  contacts: contactType[];
}

const ContactList = ({ contacts }: ContactListProps) => {
  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <FiUser className="text-blue-600 text-xl" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">
                  {contact.name || "No Name"}
                </h2>
                {contact.email && (
                  <p className="text-gray-600 text-sm mt-1 flex items-center gap-2">
                    <FiMail className="text-gray-400" />
                    {contact.email}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href={`/contacts/${contact.id}`}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm px-2 py-1 rounded hover:bg-blue-100 transition-colors"
                title="View contact"
              >
                <FiEye />
                View
              </a>

              <a
                href={`/contacts/edit/${contact.id}`}
                className="flex items-center gap-1 text-green-600 hover:text-green-800 text-sm px-2 py-1 rounded hover:bg-green-100 transition-colors"
                title="Edit contact"
              >
                <FiEdit />
                Edit
              </a>

               <DeleteButton action={deleteContactAction} contact={contact} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
