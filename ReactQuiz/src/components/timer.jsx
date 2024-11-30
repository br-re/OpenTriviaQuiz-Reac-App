import React, { useEffect } from 'react';
import { useState } from 'react';

const Timer = () => {
    const duration = 15000;
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(()=>{//start timer
        const interval = setInterval(()=>{
            setTimeLeft((prev)=> (prev > 0 ? prev - 10 : 0));
        }, 10);

        //clear when unmounted
        return ()=> clearInterval(interval)
    }, [])
    return (
        <div>
            <progress value={timeLeft} max={duration}/>
        </div>
    );
}

export default Timer;
