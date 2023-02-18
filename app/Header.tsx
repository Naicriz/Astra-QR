"use client";

import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header>
                <div className="flex items-center justify-between p-2 bg-gray-100 rounded-b-sm shadow-md">
                    <div className="absolute items-center justify-center m-1 overflow-hidden bg-gray-200 rounded-lg shadow-lg">
                        <Link href="/">
                            <Image
                                src="/astraqr.png"
                                alt="Astra Logo"
                                className="relative object-cover w-11 h-11"
                                priority
                                height={500}
                                width={500}
                                quality={100}
                            />
                        </Link>
                    </div>
                    <div>

                    </div>
                    <button className="py-2 m-1 font-medium text-white bg-black rounded-md px-14 text-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Crea tu tienda
                        <Image
                            src="/tienda.svg"
                            width={12}
                            height={12}
                            alt="tienda"
                            className=""
                        />
                    </button>
                </div>
            </header>
        </>
    )
};