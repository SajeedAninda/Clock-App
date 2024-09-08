import React, { useEffect, useState } from 'react';
import dayTimeBGImg from "../assets/desktop/daytime.jpg";
import nightTimeImg from "../assets/desktop/bg-image-nighttime.jpg";
import refreshIcon from "../assets/desktop/icon-refresh.svg";
import sunIcon from "../assets/desktop/icon-sun.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";
import arrowIcon from "../assets/desktop/icon-arrow-up.svg";

const MainPage = () => {
    const [quotes, setQuote] = useState(null);
    const [timeData, setTimeData] = useState(null);

    const fetchQuote = () => {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(json => setQuote(json));
    };

    const fetchTimeData = () => {
        fetch('http://worldtimeapi.org/api/ip')
            .then(response => response.json())
            .then(json => setTimeData(json));
    };

    useEffect(() => {
        fetchQuote();
        fetchTimeData();
    }, []);

    const getFormattedTime = (datetime) => {
        const date = new Date(datetime);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedHours = hours % 12 || 12;
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return { formattedHours, formattedMinutes, ampm, hours };
    };

    const getGreetingText = (hours) => {
        if (hours >= 6 && hours < 12) return 'MORNING';
        if (hours >= 12 && hours < 15) return 'NOON';
        if (hours >= 15 && hours < 18) return 'AFTERNOON';
        if (hours >= 18 && hours < 20) return 'EVENING';
        return 'NIGHT';
    };

    const isNightTime = (hours) => {
        return hours >= 18 || hours < 6;
    };

    return (
        <div className="relative w-full h-[100vh] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${isNightTime(getFormattedTime(timeData?.datetime).hours) ? nightTimeImg : dayTimeBGImg})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 w-[80%] pt-16 mx-auto">
                <div className='quoteDiv w-[55%] flex justify-between gap-3'>
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

                <div className="timeDiv mt-20">
                    {timeData && (
                        <>
                            <div className='flex gap-4'>
                                <img className='w-[30px]' src={isNightTime(getFormattedTime(timeData.datetime).hours) ? moonIcon : sunIcon} alt="Icon" />
                                <p className='text-white text-[20px] font-medium tracking-[4px]'>
                                    <span>GOOD {getGreetingText(getFormattedTime(timeData.datetime).hours)}</span>, IT'S CURRENTLY
                                </p>
                            </div>

                            <div>
                                <div className='flex gap-4 items-center'>
                                    <h1 className='text-[180px] font-bold text-white tracking-[10px]'>
                                        {getFormattedTime(timeData.datetime).formattedHours}:{getFormattedTime(timeData.datetime).formattedMinutes}
                                    </h1>

                                    <div className='flex flex-col'>
                                        <p className='text-[32px] font-medium text-white tracking-[2px]'>
                                            {getFormattedTime(timeData.datetime).ampm}
                                        </p>
                                        <p className='text-[32px] font-medium text-white tracking-[2px]'>
                                            {timeData.utc_offset}
                                        </p>
                                    </div>
                                </div>

                                <div className='w-full flex justify-between'>
                                    <div className='flex gap-4'>
                                        <p className='text-white font-bold text-[32px] tracking-[2px]'>IN</p>
                                        <p className='text-white font-bold text-[32px] tracking-[2px]'>
                                            {timeData.timezone.split('/')[1]}
                                        </p>
                                    </div>

                                    <button className='bg-white px-6 py-3 rounded-[50px] flex items-center gap-3 hover:opacity-65 transition-all delay-75'>
                                        <p className='font-semibold text-[18px] text-gray-500 tracking-[4px]'>
                                            MORE
                                        </p>
                                        <img className='rounded-full' src={arrowIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainPage;
