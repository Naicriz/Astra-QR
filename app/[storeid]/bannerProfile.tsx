import React from "react";
import Image from 'next/image'
import bannerStore1 from "public/bannerstore1.png";
import bannerStore3 from "public/bannerstore3.jpg";

export default function BannerProfile() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full m-1 mx-auto border-4 rounded-lg shadow-lg mb-14 h-36 md:h-48 border-slate-200 group">
            <div className="relative items-center justify-center w-full h-full">
                <Image
                    src={bannerStore3}
                    alt="Picture banner tienda"
                    className="absolute object-cover w-full h-full rounded-lg"
                    quality={90}
                    priority
                />
            </div>
            <div className="absolute w-32 h-32 mx-auto my-auto overflow-hidden border-4 rounded-full shadow-md border-slate-200 md:w-36 md:h-36 -bottom-12">
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