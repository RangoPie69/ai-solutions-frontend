import React, { useState } from "react";

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      onLogin(true);
    } catch (err) {
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5">
      <h2 className="text-2xl font-bold mb-5 text-gray-700 dark:text-white">
        Admin Login
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        <label className="text-sm font-medium dark:text-white">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mt-2 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white"
        />

        <label className="text-sm font-medium dark:text-white">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mt-2 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white w-full py-2 rounded-lg hover:opacity-90"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
