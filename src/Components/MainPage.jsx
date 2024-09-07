import React, { useEffect, useState } from 'react';
import dayTimeBGImg from "../assets/desktop/daytime.jpg";
import refreshIcon from "../assets/desktop/icon-refresh.svg";

const MainPage = () => {
    const [quotes, setQuote] = useState(null);

    const fetchQuote = () => {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(json => setQuote(json));
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="relative w-full h-[100vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${dayTimeBGImg})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 w-[80%] pt-16 mx-auto">
                <div className='w-[55%] flex justify-between gap-3'>
                    <div className='w-[90%]'>
                        {quotes ? (
                            <>
                                <p className='text-white text-[18px] font-medium'>
                                    "{quotes.content}"
                                </p>
                                <h4 className='text-white text-[18px] font-bold mt-4'>
                                    {quotes.author}
                                </h4>
                            </>
                        ) : null}
                    </div>
                    <div className='w-[10%]'>
                        <img
                            className='cursor-pointer hover:shadow-2xl'
                            src={refreshIcon}
                            alt="Refresh Quote"
                            onClick={fetchQuote}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
