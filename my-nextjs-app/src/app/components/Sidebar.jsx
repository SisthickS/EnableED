"use client";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", icon: "🏠", link: "/" },
    { name: "Events", icon: "📅", link: "/events" },
    { name: "Perks", icon: "🎁", link: "/perks" },
    { name: "Learn", icon: "📘", link: "/learn" },
    { name: "Pricing", icon: "💳", link: "/pricing" },
  ];

  return (
    <aside className="w-60 h-screen bg-black text-white flex flex-col p-6 fixed left-0 top-0">
      <h1 className="text-2xl font-bold mb-8">
        Enable<span className="text-yellow-400">ED</span>
      </h1>

      <ul className="flex flex-col gap-2 flex-grow">
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer transition
            ${active === item.name ? "bg-gray-800" : "hover:bg-gray-700"}`}
          >
            <span>{item.icon}</span>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-lg mb-3 hover:opacity-90">
        Check Eligibility →
      </button>

      <p className="text-sm text-gray-400 cursor-pointer hover:text-gray-200">
        Member Login
      </p>
    </aside>
  );
};

export default Sidebar;
