import React from "react";
import Image from 'next/image'

function BannerProfile() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full p-4 m-4 mx-auto rounded-lg shadow-xl mb-14 border-1 h-36 md:h-48">
            <div className="items-center">
                <Image
                    src="/banner1.png"
                    alt="Banner tienda"
                    className="object-cover w-full h-full rounded-lg"
                    fill={true}
                    priority
                    quality={90}
                />
            </div>
            <div className="absolute w-32 h-32 mx-auto my-auto overflow-hidden border-2 border-yellow-100 rounded-full shadow-xl md:w-36 md:h-36 -bottom-12">
                <Image
                    src="/openboxlogo.jpg"
                    alt="Profile tienda"
                    className="object-center w-full h-full"
                    height={1024}
                    width={1024}
                    priority
                    quality={90}
                />
            </div>
        </div>

    );
};

export default BannerProfile;