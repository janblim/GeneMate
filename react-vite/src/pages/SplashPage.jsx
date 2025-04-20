import React from "react";
import { Link } from "react-router-dom";

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <h1 className="text-5xl font-romantic text-accent mb-4">GeneMate</h1>

      {/* Tagline */}
      <p className="text-lg text-text-secondary mb-8 text-center max-w-xl">
        Where science meets the heart. Upload your DNA and find love through genetic compatibility.
      </p>

      {/* Call to Action */}
      <Link to="/signup">
        <button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-2xl shadow-soft text-lg transition">
          Get Started
        </button>
      </Link>

      {/* Decorative section */}
      <div className="mt-12 text-center text-sm text-text-secondary">
        <p>Already have an account?</p>
        <Link to="/login" className="text-accent hover:underline">
          Log In
        </Link>
      </div>

      {/* Optional animated DNA line (placeholder) */}
      <div className="mt-16 opacity-20 text-sm italic">
        “Love, decoded.”
      </div>
    </div>
  );
}
