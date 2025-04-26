import React, { useState } from 'react';

export default function SignupFormPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('file', file);

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      console.log('Signed up successfully:', data);
      // Redirect to dashboard or profile page
    } else {
      console.error('Signup failed');
    }
  };

  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-soft w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">Create Account</h2>

        <label className="block mb-2 text-text-primary">Username</label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} required
          className="w-full p-2 border rounded mb-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" />

        <label className="block mb-2 text-text-primary">Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
          className="w-full p-2 border rounded mb-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" />

        <label className="block mb-2 text-text-primary">Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
          className="w-full p-2 border rounded mb-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" />

        <label className="block mb-2 text-text-primary">Upload DNA File (.txt)</label>
        <input type="file" accept=".txt" onChange={e => setFile(e.target.files[0])}
          className="w-full p-2 border rounded mb-6" required />

        <button type="submit" className="w-full bg-primary text-white py-2 rounded-2xl hover:bg-primary/90">
          Sign Up
        </button>
      </form>
    </div>
  );
}
