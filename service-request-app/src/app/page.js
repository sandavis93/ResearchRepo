"use client";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Service Management
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Sign in to continue
        </p>

        <form className="space-y-4">

          <div>
            <label className="block text-gray-700 mb-1">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
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
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

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