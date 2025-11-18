import React, { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Tela de Login</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="hidden md:flex flex-col justify-center rounded-2xl p-10 text-white bg-gradient-to-br from-blue-600 to-purple-700">
            <h2 className="text-4xl font-bold mb-4">Bem-vindo de volta!</h2>
            <p className="text-blue-100">Conecte-se para continuar sua jornada conosco.</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <div className="font-semibold">Acesso total</div>
                  <div className="text-sm text-blue-100">Todos os recursos disponíveis</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <div className="font-semibold">Seguro e privado</div>
                  <div className="text-sm text-blue-100">Seus dados estão protegidos</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="font-semibold">Rápido e fácil</div>
                  <div className="text-sm text-blue-100">Login em segundos</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Login</h2>
            <p className="text-gray-600 mb-6">Entre com suas credenciais</p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <svg className="w-5 h-5 absolute left-3 top-3 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8.5L12 13L21 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
                <div className="relative">
                  <svg className="w-5 h-5 absolute left-3 top-3 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7 11V8a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="w-full border border-gray-300 rounded-lg pl-11 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.94 17.94L6.06 6.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.58 10.58A3 3 0 0113.42 13.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.6 12a17 17 0 0116.8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <label className="flex items-center text-gray-600 text-sm cursor-pointer">
                  <input type="checkbox" className="mr-2 rounded" />
                  Lembrar-me
                </label>
                <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Esqueceu a senha?</a>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg py-3 font-semibold hover:shadow-lg transition-all mt-4">
                Entrar
              </button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">ou continue com</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 font-medium text-gray-700">
                  {/* Facebook icon */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.62 3.52-3.62 1.02 0 2.09.18 2.09.18v2.29h-1.17c-1.15 0-1.51.72-1.51 1.46v1.74h2.57l-.41 2.9h-2.16v7.02C18.34 21.25 22 17.09 22 12.07z" />
                  </svg>
                  Facebook
                </button>

                <button className="border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 font-medium text-gray-700">
                  {/* Google / Chrome icon simplified */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
