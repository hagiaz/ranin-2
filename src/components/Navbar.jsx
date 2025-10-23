import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/ranin-logo.webp';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // <-- detect current route

  const navLinks = [
    { label: 'Beranda', link: '/' },
    { label: 'Tentang Kami', link: '/about' },
    { label: 'Layanan Kami', link: '/services' },
    { label: 'Legalitas', link: '/legal' },
    { label: 'Informasi', link: '/info' },
  ];

  return (
    <nav className="z-50 fixed top-0 left-0 right-0 font-jost bg-ranin-dark border-gray-200 py-2.5 shadow-md">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto my-1">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-8 me-3" alt="Logo" />
          <span className="text-white self-center text-xl font-faculty font-semibold whitespace-nowrap hidden md:block">
            RANIN MANDIRI INDONESIA
          </span>
          <span className="text-white self-center text-xl font-faculty font-semibold whitespace-nowrap block md:hidden">
            RANIN MANDIRI
          </span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-200 rounded-lg lg:hidden hover:bg-ranin-dark focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav Links */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`}>
          <ul className="flex flex-col mt-4 font-medium bg-ranin-main rounded-lg lg:bg-transparent lg:flex-row lg:space-x-8 lg:mt-0">
            {navLinks.map(({ label, link }) => {
              const isActive = location.pathname === link;
              return (
                <li key={label}>
                  <Link
                    to={link}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0 ${
                      isActive
                        ? 'text-ranin-dark lg:text-ranin-main'
                        : 'text-white hover:text-yellow-400'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
