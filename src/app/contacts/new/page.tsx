import ContactForm from '@/app/_components/ContactForm'
import { createContactAction } from '@/app/actions/contact'
import React from 'react'

const NewContact = () => {
  return (
    <div>
      <h1>Create new contact</h1>
      <ContactForm action={createContactAction}/>
    </div>
  )
}

export default NewContact
