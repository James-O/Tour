'use client';

import React, { useEffect, useState } from 'react'
import { Globe, Menu, X } from 'lucide-react';
import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import MobileNavbar from './MobileNavbar';

export default function MainNavbar() {
    const [open, setOpen] = useState(false);
    const [navbg, setNavbg] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setNavbg(true);
            }
            if (window.scrollY < 90) {
                setNavbg(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        // <div className={`transition-all duration-200 h-[12vh] z-[1000] relative ${navbg ? 'bg-blue-950' : 'fixed'}`}>
        <div
            className={`fixed w-full h-[12vh] z-[1000]
                transition-all duration-200 bg-blue-950
                ${navbg ? 'bg-blue-950 shadow-md' : 'fixed'}
            `}
        >
            <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>

                {/* logo */}
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center'>
                        <Globe className='text-white' />
                    </div>
                    <span className='text-white font-semibold text-lg'>Travel Tour</span>
                </div>

                {/* desktop menu */}
                <div className='hidden lg:flex items-center space-x-6'>
                    {navLinks.map((link) => (
                        <Link key={link.id} href={link.url}>
                            <p className="hover:border-b-3 hover:border-yellow-300 relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:origin-right text-white duration-300 font-medium">
                                {link.label}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* button */}
                <div className='hidden lg:flex items-center space-x-4'>
                    <button className='lg:px-12 lg:py-2.5 px-8 py-2 text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>
                        Book Now
                    </button>
                </div>

                {/* burger icon */}
                <div className='lg:hidden flex items-center'>
                    <button onClick={() => setOpen(!open)}>
                        {open ? <X className='text-white' /> : <Menu className='text-white' />}
                    </button>
                </div>
            </div>
            {/* mobile menu */}
            <MobileNavbar open={open} setOpen={setOpen} />
            {/* <MobileNavbar /> */}
        </div>
    )
}
