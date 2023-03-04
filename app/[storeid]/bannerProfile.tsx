import React from "react";
import Image from 'next/image'
import bannerStore from "public/bannerstore3.jpg";
import logoStore from "public/openboxlogo.jpg";

export default function BannerProfile() {
    return (
        <div className="relative flex flex-col items-center justify-center w-screen mx-auto mt-1 border-white shadow-md border-y-2 mb-14 h-36 sm:h-52 group">
            <div className="absolute items-center justify-center w-full h-full">
                <Image
                    src={bannerStore}
                    alt="Picture banner tienda"
                    className="absolute object-cover w-full h-full"
                    quality={90}
                    priority
                />
            </div>
            <div className="relative z-50 w-32 h-32 overflow-hidden transition duration-300 scale-100 border-2 border-white rounded-full shadow-md sm:w-36 sm:h-36 -bottom-8 sm:-bottom-14">
                <Image
                    src={logoStore}
                    alt="Picture profile tienda"
                    className="relative object-contain object-center w-full h-full"
                    height={1024}
                    width={1024}
                    priority
                    quality={80}
                />
            </div>
        </div>

    );
}