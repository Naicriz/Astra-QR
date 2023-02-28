"use client";

import React from "react";
import BannerProfile from "./bannerProfile";
import SideBar from './sideBar';
import CatalogContainer from './catalogContainer';
import ItemCardFeatured from "./itemCardfFeatured";
import NavBar from "./navBar";

export default function StorePage() {
    return (
        <>
            <BannerProfile />
            {/* Contenedor de Sidebar e Itemcards con grid */}
            <div>
                <div className="container relative items-center justify-center">
                    <div className="grid-cols-1 grid-rows-1 row-span-1 sm:mx-6 lg:mx-10 lg:grid-cols-11 lg:gap-4">
                        <ItemCardFeatured />
                    </div>
                    <div className="grid-cols-1 grid-rows-1 row-span-1 sm:mx-6 lg:mx-10 lg:grid-cols-11 lg:gap-4">
                        <NavBar />
                    </div>
                    <div className="grid items-center grid-cols-1 grid-rows-2 row-span-1 sm:mx-6 lg:mx-10 lg:grid-cols-11 lg:gap-4">
                        <SideBar />
                        <CatalogContainer />
                    </div>
                </div>
            </div>
        </>
    );
}