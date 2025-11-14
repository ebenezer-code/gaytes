"use client";
import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Gaytes Solutions</h1>
      <button
        onClick={() => {
          setDark(!dark);
          document.documentElement.classList.toggle("dark");
        }}
        className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        Toggle {dark ? "Light" : "Dark"}
      </button>
    </header>
  );
}
