"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { userType } from "../_types/userType";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3000";

export const login = async (formData: FormData) => {
  try {
    const response = await axios.get(
      `${API_URL}/users?email=${formData.get("email")}&password=${formData.get(
        "password"
      )}`
    );
    const user: userType = response.data[0];

    if (!user) {
      throw new Error("Invalid credentials");
    }

    await setSession({ name: user.name, email: user.email, id: user.id });
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
  redirect("/contacts");
};

export const logout = async () => {
  await deleteSession();
  redirect("/login");
};
