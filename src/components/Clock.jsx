import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString('es-SP', { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const intervalId = setInterval(() => {
        setTime(new Date().toLocaleTimeString('es-SP', { hour: '2-digit', minute: '2-digit' }));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <p>{time}</p>;
}

export default Clock;




