"use client"
import React, { useActionState, useEffect } from 'react'
import { contactType } from '../_types/contactType';
import { useRouter } from 'next/navigation';


type contactFormProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact?: contactType;
};

const ContactForm = ({action,contact}:contactFormProps) => {
  const [state,fromAction]=useActionState(action,null);
  const router=useRouter();
  useEffect(()=>{
    if(state?.success){
      router.push("/contacts")
    }
  },[state,router])

  return (
    <form action={fromAction} className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
       <input type="hidden" name="id" value={contact?.id} />
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              placeholder="Enter your name" 
              defaultValue={contact?.name||""}
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              placeholder="Enter your email" 
              defaultValue={contact?.email||""}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors font-medium shadow-sm hover:shadow-md"
          >
            Save Contact
          </button>
        </form>
  )
}

export default ContactForm