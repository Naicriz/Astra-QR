import ItemCard from "./itemCard"

export default function CatalogContainer() {
    return (
        <div className="grid grid-rows-1 p-2 bg-white border border-gray-100 rounded-md shadow-lg bg-black-400 md:col-span-8">
            <div className="grid text-start">
                <span className="row-auto text-2xl">
                    SUSHI
                </span>
            </div>

            <span className="row-auto text-lg">
                Avocado Rolls
            </span>
            <div className="grid items-center justify-center grid-cols-1 gap-1 md:grid-cols-2">
                {/* <ItemCard /> */}
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    );
}