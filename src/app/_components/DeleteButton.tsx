"use client";
import React, { useActionState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { contactType } from "../_types/contactType";

type DeleteButtonProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact: contactType;
};

const DeleteButton = ({ action, contact }: DeleteButtonProps) => {
  const [state, formAction, isPending] = useActionState(action, null);
  
  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={contact?.id} />
      <button
        type="submit"
        disabled={isPending}
        className="flex items-center gap-2 px-3 py-1 border border-red-300 rounded text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={(e) => {
          if (!confirm("Are you sure you want to delete this contact?")) {
            e.preventDefault();
          }
        }}
      >
        <FiTrash2 />
        {isPending ? "Deleting..." : "Delete"}
      </button>
      {state?.error && (
        <p className="text-red-600 text-xs mt-1">{state.error}</p>
      )}
    </form>
  );
};

export default DeleteButton;