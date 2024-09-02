import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const [size, setSize ] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const resizeHandler = () => {
            setSize({
                width: window.innerWidth, 
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', resizeHandler);
            return () => 
                window.removeEventListener('resize', resizeHandler);
    }, []);
    
    return size;
};

export default useWindowSize;