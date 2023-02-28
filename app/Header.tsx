"use client";

import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'

export default function HeaderStore() {
    return (
        <>
            <header>
                <div className="flex items-center justify-between bg-white shadow-md rounded-b-md">
                    <Link href="/" className="items-center justify-start m-1 overflow-hidden rounded-full">
                        <Image
                            src="/astraqr.png"
                            alt="Astra Logo"
                            className="relative object-cover w-11 h-11"
                            priority
                            height={500}
                            width={500}
                            quality={80}
                        />
                    </Link>
                    <br />
                    <Link href="/signin" className="flex flex-row px-6 py-1 my-1 mr-2 transition rounded-full md:mr-4 bg-slate-800 hover:bg-slate-600 focus:outline-none focus-visible:ring-1 focus-visible:ring-slate-500 focus-visible:ring-opacity-55">
                        <div className="font-medium text-white text-start">Registrar mi tienda</div>
                        <Image
                            src="/tienda.svg"
                            width={19}
                            height={19}
                            alt="Tienda Icon"
                            className="items-center justify-end ml-2"
                            quality={75}
                        />
                    </Link>
                </div>
            </header>
        </>
    )
};