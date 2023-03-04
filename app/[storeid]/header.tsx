"use client";

import { FaStore } from 'react-icons/fa';
import Image from 'next/image'
import Link from 'next/link'
import LogoAstra from '/public/astraqrlogo.svg';

export default function HeaderStore() {
    return (
        <>
            <header>
                <div className="flex items-center justify-between bg-white rounded-b-sm shadow-md">
                    <Link href="/" className="items-center content-center justify-center ml-2 rounded-full">
                        <Image
                            src={LogoAstra}
                            alt="Astra Logo"
                            className="w-11 h-11"
                            priority
                            quality={80}
                        />
                    </Link>
                    <Link href="/signin" className="flex flex-row px-6 py-1 mr-4 space-x-4 font-medium text-justify text-white transition-all duration-300 rounded-full bg-slate-800 hover:bg-slate-600 focus:outline-none focus-visible:ring-1 focus-visible:ring-slate-500 focus-visible:ring-opacity-55">
                        <span className=''>Registrar mi tienda</span>
                        <span className='items-center mt-1'><FaStore /></span>
                    </Link>
                </div>
            </header>
        </>
    )
};