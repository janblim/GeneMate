import React from "react";
import { Link } from "react-router-dom";
import { PiDnaBold } from "react-icons/pi"; // DNA icon from react-icons

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary flex flex-col items-center justify-center px-6">
      {/* Logo with DNA icon */}
      <div className="flex items-center gap-3 mb-2">
        <PiDnaBold className="text-4xl text-accent" />
        <h1 className="text-5xl font-romantic text-accent">GeneMate</h1>
      </div>

      {/* Tagline split into two lines */}
      <div className="text-xl text-text-secondary mb-8 text-center max-w-xl leading-relaxed">
        Discover compatibility written in your DNA.
        <br />
        <span className="italic">Where science meets the heart.</span>
      </div>

      {/* Call to Action */}
      <Link to="/signup">
        <button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-2xl shadow-soft text-lg transition">
          Get Started
        </button>
      </Link>

      {/* Login link */}
      <div className="mt-12 text-center text-sm text-text-secondary">
        <p>Already have an account?</p>
        <Link to="/login" className="text-accent hover:underline">
          Log In
        </Link>
      </div>

      {/* Subtle slogan */}
      <div className="mt-16 opacity-20 text-sm italic">
        GeneMate™ 2025. All rights reserved.
      </div>
    </div>
  );
}
