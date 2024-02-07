"use client";

import { useState } from "react";

export default function FormPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const showName = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fName = formData.get("firstName");
    const lName = formData.get("lastName");
    setFirstName(fName);
    setLastName(lName);
  };

  return (
    <form
      onSubmit={showName}
      className="flex w-full min-h-screen justify-center items-center flex-col gap-3"
    >
      <h1 className="text-xl font-semibold text-red-500">Form App</h1>

      <div className="flex flex-col gap-3 ">
        <input
          type="text"
          name="firstName"
          className="px-6 py-3 border-2 rounded border-black focus:outline-none focus:border-blue-500"
          placeholder="Enter your first name"
        />
        <input
          type="text"
          name="lastName"
          className="px-6 py-3 border-2 rounded border-black focus:outline-none focus:border-blue-500"
          placeholder="Enter your last name"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-400"
        >
          Submit
        </button>
      </div>
      <p className="text-xl font-bold text-blue-500">
        Your name is {firstName} {lastName}
      </p>
    </form>
  );
}
