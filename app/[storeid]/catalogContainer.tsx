import ItemCard from "./itemCard"

export default function CatalogContainer() {
    return (
        <div className="relative grid col-span-11 grid-rows-1 row-start-1 p-2 bg-white border border-gray-100 rounded-md shadow-sm bg-black-400 md:col-span-8">
            <div className="relative grid h-16 grid-rows-2 mb-2 text-start">
                <span className="block mb-2 font-sans text-2xl uppercase text-slate-700">
                    sushi
                </span>
                <span className="block mt-2 font-sans text-xl uppercase border-t text-slate-600">
                    avocado rolls
                </span>
            </div>
            <div className="relative grid grid-cols-1 gap-1 lg:grid-cols-2">
                {/* <ItemCard /> */}
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    );
}