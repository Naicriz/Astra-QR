import Image from 'next/image'
import ItemImage from '/public/imagesushi.jpg';
export default function ItemCard() {
    return (
        <div className="relative max-w-md row-span-1 overflow-auto transition duration-300 scale-100 bg-white rounded-md shadow-md max-h-32 hover:scale-105 ">
            <div className="grid grid-flow-row grid-cols-6">
                <div className="relative items-center justify-center order-last col-span-2 overflow-hidden ">
                    <Image
                        src={ItemImage}
                        alt="Item tienda"
                        className="object-cover object-center h-full rounded-md rounded-l-none w-fit"
                        width={500}
                        height={500}
                        priority
                        quality={80}
                    />
                </div>
                <div className="relative grid-flow-row col-span-4 grid-rows-3 p-1 pl-2 overflow-hidden max-h-32 ">
                    <p className="block row-span-1 capitalize truncate cardTitle">
                        California ebi sake roll
                    </p>
                    <div className="flex items-baseline justify-start flex-auto row-span-1 -mt-1 gap-x-1">
                        <p className="block font-normal text-green-600 font-roboto text-md">
                            CLP 19.200
                        </p>
                        <p className="block text-sm font-thin font-roboto text-slate-600">
                            CLP 22.100
                        </p>
                    </div>
                    <p className="block row-span-1 pb-1 font-normal font-roboto overflow-ellipsis text-slate-500">
                        Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam, quod.
                    </p>
                </div>
            </div>
        </div>
    );
}