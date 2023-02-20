import React from "react";
import BannerProfile from "./bannerProfile";
import CardItem from "./cardItem";
import CardItem2 from './cardItem2';
import CardItemFeatured from "./cardItemFeatured";
import SideBar from './sideBar';

function StoreMenu() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center">Banner Perfil Tienda</h1>
            <BannerProfile />
            <h3 className="text-2xl font-bold text-center">Card Item 1</h3>
            <CardItem />
            <h3 className="text-2xl font-bold text-center">Card Item 2</h3>
            <CardItem2 />
            <CardItemFeatured />
            <SideBar />
        </>
    );
};

export default StoreMenu;