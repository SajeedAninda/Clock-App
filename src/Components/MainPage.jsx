import React from 'react';
import dayTimeBGImg from "../assets/desktop/daytime.jpg";

const MainPage = () => {
    return (
        <div className="relative w-full h-[100vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${dayTimeBGImg})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10">
                Hey
            </div>
        </div>
    );
};

export default MainPage;
