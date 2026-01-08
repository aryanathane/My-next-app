"use server";
import { getSession } from "../_lib/session";
import { contactType } from "../_types/contactType";
import { createContact, deleteContact, updateContact } from "../api/contact";
import { revalidatePath } from "next/cache";

export const createContactAction = async (
  prevState: any,
  formData: FormData
) => {
  if (!formData) {
    return { error: "from data is missing." };
  }

  const user = await getSession();

  const newContact: contactType = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    userId: user?.id,
  };
  try {
    await createContact(newContact);
    revalidatePath("/contacts");
    return { sucess: true };
  } catch (error) {
    console.error("Error deleting contact:", error);
    return { success: false, message: "Failed to delete contact" };
  }
};

export const updateContactAction = async (
  prevState: any,
  formData: FormData
) => {
  if (!formData) {
    return { error: "from data is missing." };
  }
  const id = formData.get("id") as string;
  const user = await getSession();

  const updatedContact: contactType = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    userId: user?.id,
  };
  try {
    await updateContact(id,updatedContact);
    revalidatePath("/contacts");
    return { sucess: true };
  } catch (error) {
    console.error("Error deleting contact:", error);
    return { success: false, message: "Failed to upadte contact" };
  }
};

export const deleteContactAction = async (
  prevState: any,
  formData: FormData
) => {
  const id = formData.get("id") as string;

  try {
    await deleteContact(id);
    revalidatePath("/contacts");
    return { success: true, message: "Contact deleted successfully" };
  } catch (error) {
    console.error("Error deleting contact:", error);
    return { success: false, message: "Failed to delete contact" };
  }
};
