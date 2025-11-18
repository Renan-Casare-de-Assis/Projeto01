"use client";

import React, { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-pink-500 to-rose-400 p-8">
      <div className="w-full max-w-4xl rounded-3xl p-8 bg-gradient-to-br from-pink-300/30 to-rose-300/20 shadow-2xl">
        <div className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-10">
          <h1 className="text-4xl font-extrabold text-white mb-2">Bem-vindo</h1>
          <p className="text-white/80 mb-8">Entre com sua conta</p>

          <div className="max-w-md">
            <div className="space-y-5">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white/70">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8.5L12 13L21 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/20 text-white placeholder-white/70 rounded-xl py-4 pl-12 pr-4 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white/70">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7 11V8a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Senha"
                  className="w-full bg-white/20 text-white placeholder-white/70 rounded-xl py-4 pl-12 pr-12 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.94 17.94L6.06 6.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.58 10.58A3 3 0 0113.42 13.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-white/80 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  Lembrar-me
                </label>
                <a href="#" className="hover:underline">Esqueceu a senha?</a>
              </div>

              <button className="w-full bg-white rounded-xl py-4 font-semibold text-purple-600 shadow-lg mt-4">Entrar</button>

              <div className="flex gap-3 mt-4">
                <button className="flex-1 bg-white/10 text-white backdrop-blur rounded-xl py-3 flex items-center justify-center gap-3 border border-white/20">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.62 3.52-3.62 1.02 0 2.09.18 2.09.18v2.29h-1.17c-1.15 0-1.51.72-1.51 1.46v1.74h2.57l-.41 2.9h-2.16v7.02C18.34 21.25 22 17.09 22 12.07z" />
                  </svg>
                  Github
                </button>

                <button className="flex-1 bg-white/10 text-white backdrop-blur rounded-xl py-3 flex items-center justify-center gap-3 border border-white/20">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Google
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
