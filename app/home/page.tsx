"use client";

import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="mt-2 text-gray-600">Bem-vindo! Você está logado (simulação).</p>
      </div>
    </main>
  );
}
