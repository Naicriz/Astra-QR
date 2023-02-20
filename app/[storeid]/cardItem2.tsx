import React from "react";
import Image from 'next/image'

function CardItem2() {
    return (
        <div className="flex justify-center border border-blue-500">
            <div className="flex flex-row-reverse max-w-xl bg-white border border-gray-100 rounded-lg shadow-lg max-h-28 md:max-h-34">
                <div className="relative flex overflow-hidden max-w-28 md:max-w-34 max-h-28 md:max-h-34">
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
                <div className="grid bg-white border border-blue-500 rounded-l-lg grid-col">
                    <h3 className="mb-1 ml-2 font-sans text-lg font-medium text-gray-900 truncate border border-blue-500 text-ellipsis">
                        California Ebi Roll
                    </h3>
                    <p className="mx-2 mb-1 overflow-hidden font-sans text-gray-800 truncate border border-blue-500 text-ellipsis">
                        Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam, quod.
                    </p>
                    <h3 className="flex flex-row mx-2 font-sans text-lg text-gray-900 border border-blue-500">
                        $ 14.990
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default CardItem2;