
"use client";
import React, { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    function onClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <nav className="relative z-50 bg-gray-900 text-white flex justify-between items-center px-4 h-16">
      <Link href="/" className="flex items-center gap-2 font-bold text-lg">
        <img src="tea.gif" alt="Logo" width={36} />
        Buy Me a Coffee!
      </Link>

      <div className="relative" ref={containerRef}>
        {session ? (
          <>
            <button
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen(o => !o)}
              className="relative z-50 bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded transition"
            >
              Account ▼
            </button>

            {open && (
              <ul
                className="absolute right-0 mt-2 w-44 bg-white text-gray-800 rounded shadow-lg z-50"
                role="menu"
                aria-label="Account menu"
              >
                <li role="none">
                  <Link
                    href="/dashboard"
                    role="menuitem"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href={`/${session.user.name}`}
                    role="menuitem"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Your Page
                  </Link>
                </li>
                <li role="none">
                  <button
                    role="menuitem"
                    onClick={() => signOut()}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            )}
          </>
        ) : (
          <Link href="/login">
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
