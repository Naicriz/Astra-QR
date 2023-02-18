import React from "react";
import Image from 'next/image'

function CardItem() {
    return (
        <div className="relative flex h-32 max-w-md p-4 m-2 mx-auto bg-gray-100 rounded-lg shadow-lg w-124">
            <div className="absolute inset-y-0 right-0 items-center justify-center w-32 overflow-hidden bg-blue-100 rounded-md">
                <Image
                    src="/imagesushi.jpg"
                    alt="Item tienda"
                    className="object-cover w-full h-full"
                    fill={true}
                    priority
                    quality={100}
                />
            </div>
        </div>

    );
};

export default CardItem;