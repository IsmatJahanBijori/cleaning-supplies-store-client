"use client"
import Container from '@/components/Container';
import Link from 'next/link';
import React, { useState } from 'react'
import { LuMenu, LuXCircle } from 'react-icons/lu';
import "../Navbar/Navbar.css"
const Navbar = () => {
    // 1. handling menu dropdown
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className='p-4 bg-gradient-to-r from-emerald-50 via-emerald-100 to-[#ecf5f1]'>
            <Container>
                <div className="mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold block">Scrubs Emporium</span>

                    </div>
                    <div className="hidden lg:block ">
                        <Link className="nav-link" href="/">Home</Link>
                        <Link className="nav-link" href="/catergories">Catergories</Link>
                        <Link className="nav-link" href="/products">Products</Link>
                        <Link className="nav-link" href="/flashsales">Flashsales</Link>
                        <Link className="nav-link" href="/about-us">About Us</Link>
                        <Link className="nav-link" href="/contact-us">Contact Us</Link>


                    </div>
                    <div className="lg:hidden">
                        {isOpen ? (
                            <LuXCircle className="text-black text-2xl cursor-pointer transition-all" onClick={toggleMenu} />
                        ) : (
                            <LuMenu className="text-black text-2xl cursor-pointer transition-all" onClick={toggleMenu} />
                        )}
                    </div>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden mt-3 transition-all flex flex-col"
                    >
                        <Link className="nav-link" href="/">Home</Link>
                        <Link className="nav-link" href="/catergories">Catergories</Link>
                        <Link className="nav-link" href="/products">Products</Link>
                        <Link className="nav-link" href="/flashsales">Flashsales</Link>
                        <Link className="nav-link" href="/about-us">About Us</Link>
                        <Link className="nav-link" href="/contact-us">Contact Us</Link>

                    </div>
                )}
            </Container>
        </nav>
    );
}

export default Navbar