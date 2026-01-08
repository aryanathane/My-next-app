import ContactForm from '@/app/_components/ContactForm'
import { updateContactAction } from '@/app/actions/contact'
import { getContactsById } from '@/app/api/contact';
import React, { use } from 'react'

const EditPage = ({params}:{params:Promise<{id:string}>}) => {
  const {id}=use(params) ;
  const contact= use(getContactsById(id));
  console.log(contact);
  
  return (
    <div>
      <h1>Edit contact</h1>
      <ContactForm action={updateContactAction} contact={contact}/>
    </div>
  )
}

export default EditPage
