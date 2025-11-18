"use client";

import React, { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4f4f4f] via-[#3f3f3f] to-[#2f2f2f] p-8">
      <div className="w-full max-w-4xl rounded-3xl p-8 bg-gradient-to-br from-[#4f4f4f]/25 via-[#3f3f3f]/20 to-[#2f2f2f]/15 shadow-2xl">
        <div className="relative rounded-2xl bg-white/6 backdrop-blur-md border border-white/10 p-10">
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
                  className="w-full bg-white/20 text-white placeholder-white/70 rounded-xl py-4 pl-12 pr-4 border border-white/20 hover:border-white/30 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors"
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
                  className="w-full bg-white/20 text-white placeholder-white/70 rounded-xl py-4 pl-12 pr-12 border border-white/20 hover:border-white/30 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors cursor-pointer"
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
                <label className="flex items-center gap-2 cursor-pointer hover:text-white/95">
                  <input type="checkbox" className="w-4 h-4 rounded cursor-pointer" />
                  Lembrar-me
                </label>
                <a href="#" className="hover:underline hover:text-white/95 transition-colors">Esqueceu a senha?</a>
              </div>

              <button className="w-full bg-white rounded-xl py-4 font-semibold text-[#333333] shadow-lg mt-4 hover:shadow-2xl hover:scale-[1.02] transition transform cursor-pointer">Entrar</button>

              <div className="flex gap-3 mt-4">
                <button className="flex-1 bg-white/10 text-white backdrop-blur rounded-xl py-3 flex items-center justify-center gap-3 border border-white/20 group hover:bg-white/20 hover:scale-[1.02] transition transform cursor-pointer">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.1 1.3-3.3 3.2-3.3.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.62-1.3 1.3V12h2.2l-.35 2.9h-1.85v7A10 10 0 0022 12z" />
                  </svg>
                  <span className="group-hover:text-white transition-colors">Facebook</span>
                </button>

                <button className="flex-1 bg-white/10 text-white backdrop-blur rounded-xl py-3 flex items-center justify-center gap-3 border border-white/20 group hover:bg-white/20 hover:scale-[1.02] transition transform cursor-pointer">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 7v3h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 12a4 4 0 11-8 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="group-hover:text-white transition-colors">Google</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
