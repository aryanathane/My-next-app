import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

import { getSession } from "../_lib/session";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Contact Manager
        </Link>
        <div className="flex items-center space-x-6">
          {session ? (
            <>
              <Link
                href="/contacts"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contacts
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
               <Link
                href="/login"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
