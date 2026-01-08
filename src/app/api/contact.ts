import axios from "axios";
import { contactType } from "../_types/contactType";

const API_URL = "http://localhost:3000/contacts";

export const getContacts = async (userId: string) => {
    const response = await axios.get(`${API_URL}?userId=${userId}`);
    return response.data;
};

export const getContactsById = async (id: string) => {
    const response = await axios.get(`${API_URL}/${id}`); // ✅ Fixed
    return response.data;
};

export const createContact = async (contact: contactType) => {
    const response = await axios.post(API_URL, contact); // ✅ Fixed
    return response.data;
};

export const updateContact = async (id: string, contact: contactType) => {
    const response = await axios.put(`${API_URL}/${id}`, contact); // ✅ Fixed
    return response.data;
};

export const deleteContact = async (id: string) => {
    const response = await axios.delete(`${API_URL}/${id}`); // ✅ Already correct
    return response.data;
};