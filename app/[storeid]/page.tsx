import React from "react";
import BannerProfile from "./bannerProfile";
import SideBar from './sideBar';
import ItemCard from "@/app/[storeid]/itemCard";
import CardItem from "@/app/[storeid]/cardItem";

export default function StorePage() {
    return (
        <>
            <BannerProfile />
            {/* Contenedor de Sidebar e Itemcards con grid */}
            <div className="grid items-center justify-center gap-1 p-2 bg-red-100 lg:grid-cols-11 lg:gap-2">
                {/* <SideBar /> */}
                <div className="items-center justify-center hidden grid-cols-1 gap-4 p-4 bg-blue-200 lg:col-span-3 lg:grid">
                    <div className="text-center bg-blue-100">
                        soy un div normal juas juas - 1
                    </div>
                    <div className="text-center bg-blue-100 ">
                        soy un div normal juas juas - 2
                    </div>
                    <div className="text-center bg-blue-100">
                        soy un div normal juas juas - 3
                    </div>
                    <div className="text-center bg-blue-100">
                        soy un div normal juas juas - 4
                    </div>
                </div>


                {/* <Items Card Menú container?) /> */}
                <div className="grid items-center justify-center grid-cols-1 col-span-8 gap-4 p-4 bg-blue-200 md:grid-cols-2">
                    {/* <ItemCard /> */}
                    <div className="flex col-span-1 text-center bg-blue-100">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dolorum alias suscipit quis natus, doloribus debitis quae animi nesciunt itaque eos voluptas repellendus ex sed id. Non iusto optio facilis!
                    </div>
                    <div className="col-span-1 text-center bg-blue-100 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dolorum alias suscipit quis natus, doloribus debitis quae animi nesciunt itaque eos voluptas repellendus ex sed id. Non iusto optio facilis!
                    </div>
                </div>
            </div>
        </>
    );
}