"use client";

import React from "react";
import BannerProfile from "./bannerProfile";
import NavBarMenu from './navbarMenu';
import CatalogItem from './catalogItem';
import ItemCardFeatured from "./itemCardfFeatured";


export default function StorePage() {
    return (
        <>
            <BannerProfile />
            {/* Contenedor de Sidebar e Itemcards con grid */}
            <div className="grid items-center justify-center mx-auto">
                <div className="grid items-center grid-cols-1 row-start-1 gap-1 lg:gap-8 lg:items-start lg:grid-cols-11">
                    <NavBarMenu />
                    <div className="grid col-span-11 gap-2 bg-transparent lg:row-start-1 bg-black-400 lg:col-span-8">
                        <CatalogItem />
                        <CatalogItem />
                        <CatalogItem />
                    </div>
                </div>
            </div>
        </>
    );
}
