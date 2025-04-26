import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginFormPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log('Logged in:', data);
      navigate('/profile'); // Or wherever you want to go after login
    } else {
      console.error('Login failed');
    }
  };

  const handleDemoLogin = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'demo@genemate.com',
        password: 'password', // Your demo password
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log('Demo login successful:', data);
      navigate('/profile');
    } else {
      console.error('Demo login failed');
    }
  };

  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center px-6">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-2xl shadow-soft w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">Welcome Back</h2>

        <label className="block mb-2 text-gray-800 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="w-full p-2 border rounded mb-4 text-gray-800 placeholder-gray-400"
        />

        <label className="block mb-2 text-gray-800 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
          className="w-full p-2 border rounded mb-6 text-gray-800 placeholder-gray-400"
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-2xl hover:bg-primary/90 mb-3 transition"
        >
          Log In
        </button>

        <button
          type="button"
          onClick={handleDemoLogin}
          className="w-full bg-secondary text-text-primary py-2 rounded-2xl hover:bg-secondary/90 border transition"
        >
          Demo User
        </button>
      </form>
    </div>
  );
}
