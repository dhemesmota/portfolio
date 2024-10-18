'use client';
import logo from '@/assets/icon-tech.svg';
import Image from 'next/image';
import { List, X } from 'phosphor-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='mx-auto flex w-full max-w-screen-xl items-center justify-between px-8 py-4'>
      <h1 className='align-middle text-3xl font-extrabold'>
        <Image src={logo} alt='Logo' className='mr-2 inline-block h-10 w-10' />
        <span>Dhemes Mota</span>
      </h1>
      <nav className='hidden space-x-6 md:flex'>
        <a href='#home' className='hover:text-pinkDark'>
          Home
        </a>
        <a href='#about' className='hover:text-pinkDark'>
          Sobre
        </a>
        <a href='#portfolio' className='hover:text-pinkDark'>
          Portfólio
        </a>
        <a href='#services' className='hover:text-pinkDark'>
          Serviços
        </a>
        <a href='#resume' className='hover:text-pinkDark'>
          Resumo
        </a>
        <a href='#contact' className='hover:text-pinkDark'>
          Contato
        </a>
      </nav>

      <div className='md:hidden'>
        <button onClick={toggleMenu}>
          {isOpen ? <X size={32} /> : <List size={32} />}
        </button>
      </div>

      {isOpen && (
        <nav className='absolute right-0 top-16 flex flex-col space-y-4 rounded-lg bg-white p-6 shadow-md md:hidden'>
          <a href='#home' className='hover:text-pinkDark'>
            Home
          </a>
          <a href='#about' className='hover:text-pinkDark'>
            Sobre
          </a>
          <a href='#portfolio' className='hover:text-pinkDark'>
            Portfólio
          </a>
          <a href='#services' className='hover:text-pinkDark'>
            Serviços
          </a>
          <a href='#resume' className='hover:text-pinkDark'>
            Resumo
          </a>
          <a href='#contact' className='hover:text-pinkDark'>
            Contato
          </a>
        </nav>
      )}
    </header>
  );
}
