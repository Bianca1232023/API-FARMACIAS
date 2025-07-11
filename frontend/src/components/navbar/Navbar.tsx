'use client';

import { FaUser, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-blue-100 shadow">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="CefetFarma" className="h-10" />
        <span className="text-sm text-blue-800 font-semibold cursor-pointer">
          Todas as categorias
        </span>
      </div>

      <input
        type="text"
        placeholder="Pesquisar medicamentos, produtos e mais"
        className="px-4 py-2 border border-gray-300 rounded-md w-1/2 text-sm"
      />

      <div className="flex items-center gap-6 text-blue-800">
        <button className="flex items-center gap-1 text-sm hover:underline">
          <FaUser size={18} />
          Entrar / Cadastrar
        </button>
        <FaShoppingCart size={20} className="cursor-pointer" />
      </div>
    </nav>
  );
}
