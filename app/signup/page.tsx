"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  function handleSignup() {
    // Simulação de cadastro. Em produção, chamar API e tratar erros.
    router.push('/home');
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-4">Cadastre sua conta</h1>

        <label className="block text-sm text-gray-700">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-md p-2 mt-1 mb-4"
          placeholder="seu@exemplo.com"
        />

        <label className="block text-sm text-gray-700">Senha</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="w-full border rounded-md p-2 mt-1 mb-4"
          placeholder="Senha"
        />

        <button
          type="button"
          onClick={handleSignup}
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Cadastrar
        </button>

        <p className="text-sm text-gray-500 mt-4">Ao se cadastrar você concorda com os termos (simulado).</p>
      </div>
    </main>
  );
}
