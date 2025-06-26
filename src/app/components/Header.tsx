"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logobomboskuy from '../../../public/BOMBOSKUY!.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Define navigation links in one place for consistency
    const navLinks = [
        { href: '#', label: 'Beranda' },
        { href: '#', label: 'Produk' },
        { href: '#', label: 'Tentang Kami' },
        { href: '#', label: 'Berita' },
        { href: '#', label: 'Charity' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image className="max-w-40" src={logobomboskuy} alt="Bomboskuy Logo" />
                        </Link>
                    </div>

                    {/* Desktop Navigation & Actions */}
                    <nav className="hidden lg:flex md:flex items-center text-lg space-x-8 mx-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-gray-600 hover:text-primary-hover transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden lg:flex md:flex items-center gap-3">
                        <Link
                            href="#"
                            className="bg-primary text-white px-6 py-2 rounded-xl shadow-lg shadow-primary font-semibold hover:bg-primary-hover transition-transform transform hover:scale-105"
                        >
                            Masuk
                        </Link>
                        <Link
                            href="#"
                            className="text-primary border border-primary px-6 py-2 rounded-xl shadow-lg shadow-primary font-semibold hover:bg-primary-hover hover:text-white transition-transform transform hover:scale-105"
                        >
                            Daftar
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-primary focus:outline-none">
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <nav className="flex flex-col space-y-2 px-2 pt-2 pb-3">
                            {navLinks.map((link) => (
                                <Link key={link.label} href={link.href} className="text-gray-600 hover:bg-gray-100 hover:text-primary transition-colors block px-3 py-2 rounded-md text-base font-medium">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                        {/* Mobile CTA Buttons */}
                        <div className="px-2 pt-2 flex flex-col gap-3">
                            <Link href="#" className="w-full text-center bg-primary text-white px-6 py-2 rounded-xl shadow-lg shadow-primary font-semibold hover:bg-primary-hover transition-transform transform hover:scale-105">
                                Masuk
                            </Link>
                            <Link href="#" className="w-full text-center text-primary border border-primary px-6 py-2 rounded-xl shadow-lg shadow-primary font-semibold hover:bg-primary-hover hover:text-white transition-transform transform hover:scale-105">
                                Daftar
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;