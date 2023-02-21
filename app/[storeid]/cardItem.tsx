import React from "react";
import Image from 'next/image'

export default function CardItem() {
    return (
        <div className="flex-wrap flex justify-center">
            <div className="grid max-w-lg grid-cols-3 bg-white border border-gray-100 rounded-lg shadow-lg max-h-16 sm:max-h-md">
                <div className="relative order-last col-span-1 overflow-hidden">
                    <Image
                        src="/imagesushi.jpg"
                        alt="Item tienda"
                        className="object-cover object-center w-full h-full rounded-lg rounded-l-none"
                        width={500}
                        height={500}
                        priority
                        quality={70}
                    />
                </div>
                <div className="grid grid-flow-row col-span-2 bg-white rounded-l-lg">
                    <h3 className="row-span-1 font-sans text-xl font-medium truncate border border-blue-500 text-slate-800">
                        California Ebi Sake Roll
                    </h3>
                    <p className="font-sans text-lg font-normal border border-blue-500 text-slate-600">
                        CLP 19.200
                    </p>
                    <p className="overflow-hidden font-sans font-normal border border-blue-500 text-ellipsis text-slate-500">
                        Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam, quod.
                    </p>
                    <p className="overflow-hidden font-sans text-sm font-normal truncate border border-t border-blue-500 text-slate-400 border-slate">
                        texto p2
                    </p>
                </div>
            </div>
        </div>
    );
}