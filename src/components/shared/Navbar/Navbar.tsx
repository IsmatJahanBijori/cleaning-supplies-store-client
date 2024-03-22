"use client"
import Container from '@/components/Container';
import Link from 'next/link';
import React, { useState } from 'react'
import { LuMenu, LuXCircle } from 'react-icons/lu';

const Navbar = () => {
    // 1. handling menu dropdown
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className='p-4 bg-slate-100'>
            <Container>
                <div className="mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold block">Aid <span>Dispatch Central</span></span>

                    </div>
                    <div className="hidden lg:block">
                        <Link className="mr-5" href="/">Home</Link>
                        <Link className="mr-5" href="/catergories">Catergories</Link>
                        <Link className="mr-5" href="/Products">Products</Link>
                        <Link className="mr-5" href="/flashsales">Flashsales</Link>
                        <Link className="mr-5" href="/about-us">About Us</Link>
                        <Link className="mr-5" href="/contact-us">Contact Us</Link>


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
                    <div className="lg:hidden mt-3 transition-all"
                    >
                        <Link className="mr-5 hover:bg-gray-300 flex place-items-center hover:font-semibold hover:rounded-md" href="/">Home</Link>
                        <Link className="mr-5 hover:bg-gray-300 flex place-items-center hover:font-semibold hover:rounded-md" href="/catergories">Catergories</Link>
                        <Link className="mr-5 hover:bg-gray-300 flex place-items-center hover:font-semibold hover:rounded-md" href="/Products">Products</Link>
                        <Link className="mr-5 hover:bg-gray-300 flex place-items-center hover:font-semibold hover:rounded-md" href="/flashsales">Flashsales</Link>
                        <Link className="mr-5 hover:bg-gray-300 flex place-items-center hover:font-semibold hover:rounded-md" href="/about-us">About Us</Link>
                        <Link className="mr-5 hover:bg-gray-300 flex place-items-center hover:font-semibold hover:rounded-md" href="/contact-us">Contact Us</Link>

                    </div>
                )}
            </Container>
        </nav>
    );
}

export default Navbar