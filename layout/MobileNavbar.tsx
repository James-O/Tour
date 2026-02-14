'use client';
import type { Dispatch, SetStateAction } from 'react';
import { navLinks } from '@/constant/constant';
import Link from 'next/link';

type MobileNavbarProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MobileNavbar({ open, setOpen }: MobileNavbarProps) {
    return (
        <div>
            {/* OVERLAY */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/45 bg-opacity-40 z-[900] lg:hidden"
                />
            )}

            {/* SLIDE-IN MOBILE MENU */}
            <div
                className={`
          fixed top-[12vh] left-0 h-[88vh] w-[75%] max-w-[300px] bg-blue-950 z-[950]
          transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:hidden
        `}
            >
                <div className="flex flex-col items-start p-6 space-y-4 my-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.url}
                            onClick={() => setOpen(false)}
                        >
                            <p className="text-white text-lg font-medium hover:text-yellow-300 transition">
                                {link.label}
                            </p>
                        </Link>
                    ))}

                    <button className='w-full mb-5 py-3 text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
}
