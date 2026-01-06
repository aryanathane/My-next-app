// set session cookie

import { cookies } from "next/headers";
import { userType } from "../_types/userType";

export const setSession = async (user: userType) => {
  (await cookies()).set("session", JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
};

// get session cookie
export const getSession = async (): Promise<userType | null> => {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;
  const user = JSON.parse(session) as userType;
  return user;
};

// delete session cookie
export const deleteSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("session");
};
