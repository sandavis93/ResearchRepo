"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const users = {
    manager: {
      password: "test",
      role: "Manager",
    },
    technician: {
      password: "test2",
      role: "Technician",
    },
  };
  const handleLogin = (event) => {
  event.preventDefault();

  const user = users[username];

  if (user && user.password === password) {
  setError("");

  localStorage.setItem("currentUser", username);

  router.push("/requests");
} else {
  setError("Invalid username or password.");
}
};
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Service Management
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Sign in to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-4">

          <div>
            <label className="block text-gray-700 mb-1">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">
            {error}
            </p>
          )}
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>

        </form>
      </div>
    </main>
  );
}