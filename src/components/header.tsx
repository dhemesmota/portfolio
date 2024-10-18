'use client';
import logo from '@/assets/icon-tech.svg';
import Image from 'next/image';
import { List, X } from 'phosphor-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full mx-auto max-w-screen-xl px-8 py-4 flex items-center justify-between">
      <h1 className="text-3xl font-extrabold align-middle">
        <Image src={logo} alt="Logo" className="w-10 h-10 inline-block mr-2" />
        <span>Dhemes Mota</span>
      </h1>
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-pinkDark">Home</a>
        <a href="#about" className="hover:text-pinkDark">Sobre</a>
        <a href="#portfolio" className="hover:text-pinkDark">Portfólio</a>
        <a href="#services" className="hover:text-pinkDark">Serviços</a>
        <a href="#resume" className="hover:text-pinkDark">Resumo</a>
        <a href="#contact" className="hover:text-pinkDark">Contato</a>
      </nav>

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={32} /> : <List size={32} />}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-16 right-0 bg-white p-6 shadow-md rounded-lg flex flex-col space-y-4 md:hidden">
          <a href="#home" className="hover:text-pinkDark">Home</a>
          <a href="#about" className="hover:text-pinkDark">Sobre</a>
          <a href="#portfolio" className="hover:text-pinkDark">Portfólio</a>
          <a href="#services" className="hover:text-pinkDark">Serviços</a>
          <a href="#resume" className="hover:text-pinkDark">Resumo</a>
          <a href="#contact" className="hover:text-pinkDark">Contato</a>
        </nav>
      )}
    </header>
  );
}
