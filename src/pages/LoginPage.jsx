import React, { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUSername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="Login" className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">Sign in</h1>
        <form className="mt-6">
          <div className="mb-2">
            <label for="username" className="block text-sm font-semibold text-gray-800">
              Username
            </label>
            <input type="username" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className="mb-2">
            <label for="password" className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input type="password" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
