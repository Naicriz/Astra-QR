"use client";

import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header>
                <div className="flex items-center justify-between p-2 bg-white rounded-b-sm shadow-md">
                    <Link href="/" className="absolute items-center justify-center m-1 overflow-hidden bg-gray-200 rounded-full shadow-lg">
                        <Image
                            src="/astraqr.png"
                            alt="Astra Logo"
                            className="relative object-cover w-11 h-11"
                            priority
                            height={500}
                            width={500}
                            quality={90}
                        />
                    </Link>
                    <div>

                    </div>
                    <button className="flex flex-row flex-initial px-6 py-1 m-1 border border-gray-500 rounded-lg bg-cyan-900 md:py-1.5 md:px-9 hover:bg-cyan-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <div className="mr-4 font-medium text-white text-md">
                            Crea tu tienda
                        </div>
                        <Image
                            src="/tienda.svg"
                            width={12}
                            height={12}
                            alt="Store Icon"
                            className="items-center justify-center w-6 h-6 ml-4"
                            quality={85}
                        />
                    </button>
                </div>
            </header>
        </>
    )
};