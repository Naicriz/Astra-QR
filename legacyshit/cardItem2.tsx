import React from "react";
import Image from 'next/image'

export default function CardItem2() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-row-reverse max-w-xl bg-white border border-gray-100 rounded-lg shadow-lg max-h-24 md:max-h-34">
                <div className="relative flex-shrink-0 flex overflow-hidden max-w-24 md:max-w-34 max-h-24 md:max-h-34">
                    <Image
                        src="/imagesushi.jpg"
                        alt="Item tienda"
                        className="object-cover w-full h-full rounded-lg rounded-l-none"
                        width={500}
                        height={500}
                        priority
                        quality={90}
                    />
                </div>
                <div className="flex bg-white border border-blue-500 rounded-l-lg flex-col">
                    <h3 className="mb-1 ml-2 font-sans text-lg font-medium text-gray-900 border border-blue-100 text-ellipsis">
                        California Ebi Roll
                    </h3>
                    <p className="mx-2 mb-1 font-sans text-gray-800 border border-blue-200 text-ellipsis">
                        Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam, quod.
                    </p>
                    <h3 className="flex flex-row mx-2 font-sans text-lg text-gray-900 border border-blue-300">
                        $ 14.990
                    </h3>
                </div>
            </div>
        </div>
    );
}