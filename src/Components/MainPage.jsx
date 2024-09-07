import React from 'react';
import dayTimeBGImg from "../assets/desktop/daytime.jpg";
import refreshIcon from "../assets/desktop/icon-refresh.svg";

const MainPage = () => {
    return (
        <div className="relative w-full h-[100vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${dayTimeBGImg})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 w-[80%] pt-16 mx-auto ">
                <div className='w-[55%] flex justify-between'>
                    <div className='w-[90%]'>
                        <p className='text-white text-[18px] font-medium'>
                            "
                            If it turns out that there is a God, I don't think that he's evil. But the worst that you can say about him is that basically he's an underachiever.
                            "
                        </p>

                        <h4 className='text-white text-[18px] font-bold mt-4'>
                            Woody Allen
                        </h4>
                    </div>
                    <div className='w-[10%]'>
                        <img className='cursor-pointer hover:shadow-2xl' src={refreshIcon} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MainPage;
