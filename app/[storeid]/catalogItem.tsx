import ItemCard from "./itemCard"

export default function CatalogItem() {
    return (
        <menu className="grid col-span-11 mx-1 bg-white rounded-md shadow-sm lg:col-span-8">
            <div className="grid h-16 grid-rows-2 mb-2 text-start">
                <p className="block pt-1 pl-2 text-3xl font-medium tracking-wider uppercase font-roboto text-slate-700">
                    sushi
                </p>
                <p className="block pt-1 pl-2 m-1 text-xl font-medium tracking-wider uppercase border-t font-roboto text-slate-600">
                    avocado rolls
                </p>
            </div>
            <div className="grid grid-cols-1 gap-2 lg:mx-2 lg:my-1 xl:mx-4 xl:my-3 md:grid-cols-2">
                {/* <ItemCard /> */}
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </menu>
    );
}