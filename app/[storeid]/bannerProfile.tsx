import React from "react";
import Image from 'next/image'
import bannerStore from "public/bannerstore1.png";

export default function BannerProfile() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full p-1 m-4 mx-auto border-2 rounded-lg shadow-xl mb-14 h-36 md:h-48 border-b-inherit">
            <div className="relative items-center justify-center w-full h-full">
                <Image
                    src={bannerStore}
                    alt="Picture banner tienda"
                    className="absolute object-cover w-full h-full rounded-lg shadow-lg"
                    quality={90}
                    priority
                />
            </div>
            <div className="absolute w-32 h-32 mx-auto my-auto overflow-hidden border-4 rounded-full shadow-xl border-inherit md:w-36 md:h-36 -bottom-12">
                <Image
                    src="/openboxlogo.jpg"
                    alt="Profile tienda"
                    className="object-contain object-center w-full h-full"
                    height={1024}
                    width={1024}
                    priority
                    quality={80}
                />
            </div>
        </div>

    );
}