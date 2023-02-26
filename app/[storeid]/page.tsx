import React from "react";
import BannerProfile from "./bannerProfile";
import SideBar from './sideBar';
import CatalogContainer from './catalogContainer';

export default function StorePage() {
    return (
        <>
            <BannerProfile />
            <div className="grid items-center justify-center">

            </div>
            {/* Contenedor de Sidebar e Itemcards con grid */}
            <div className="relative grid items-center justify-center sm:mx-6 lg:mx-8 lg:grid-cols-11 lg:gap-4">
                <SideBar />
                <CatalogContainer />
            </div>
        </>
    );
}