import Image from 'next/image'

export default function ItemCard() {
    return (
        <div className="h-32 row-span-1 bg-white border border-gray-100 rounded-md shadow-sm w-38">
            <div className="grid grid-flow-row grid-cols-6">
                <div className="relative items-center justify-center order-last w-auto col-span-2 overflow-hidden">
                    <Image
                        src="/imagesushi.jpg"
                        alt="Item tienda"
                        className="object-cover object-center w-full h-32 rounded-md rounded-l-none"
                        width={500}
                        height={500}
                        priority
                        quality={80}
                    />
                </div>
                <div className="h-32 grid-flow-row col-span-4 grid-rows-3 p-1 overflow-hidden">
                    <p className="row-span-1 font-sans text-lg font-medium capitalize truncate text-slate-800">
                        California ebi sake roll
                    </p>
                    <div className="flex items-baseline justify-start flex-auto row-span-1 gap-1">
                        <p className="font-sans font-normal text-green-600 text-md">
                            CLP 19.200
                        </p>
                        <p className="font-sans text-sm font-thin line-through text-slate-500">
                            CLP 22.100
                        </p>
                    </div>
                    <p className="row-span-1 font-sans font-normal text-ellipsis text-slate-500">
                        Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam, quod.
                    </p>
                </div>
            </div>
        </div>
    );
}