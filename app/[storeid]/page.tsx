import React from "react";
import BannerProfile from "./bannerProfile";
import CardCategory from "./cardItem";

function StoreMenu() {
    return (
        <>
            <BannerProfile />
            <div className="text-center">
                PÁGINA CARTA QR - RESTAURANTE | TEXTO DE PRUEBA
            </div>
            <CardCategory />
        </>
    );
};

export default StoreMenu;