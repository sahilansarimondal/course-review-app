"use client";
import { signIn, signOut } from "next-auth/react";
import React from "react";
export function Button({ name }: { name: React.ReactNode }) {
  if (name === "signin") {
    return (
      <button
        onClick={() => signIn()}
        className=" bg-yellow-500  py-1 px-2 rounded-md hover:border-slate-900 hover:bg-yellow-600"
      >
        Sign In
      </button>
    );
  }
  return (
    <button
      onClick={() => signOut()}
      className=" bg-yellow-500  py-1 px-2 rounded-md hover:border-slate-900 hover:bg-yellow-600"
    >
      Log Out
    </button>
  );
}
