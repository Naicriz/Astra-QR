import React from "react";
import Image from 'next/image'

function CardItem() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-row-reverse max-w-2xl bg-white rounded-lg shadow-lg">
                <div className="flex flex-col justify-between w-auto">
                    <Image
                        src="/imagesushi.jpg"
                        alt="Item tienda"
                        className="object-cover w-32 h-32 rounded-lg rounded-l-none"
                        width={500}
                        height={500}
                        priority
                        quality={100}
                    />
                </div>
                <div className="flex flex-col justify-between w-64">
                    <div>
                        <h1 className="pt-0.5 pl-1.5 font-bold font-sans text-black">California Ebi Roll</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardItem;